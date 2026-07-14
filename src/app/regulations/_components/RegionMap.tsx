"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import "leaflet/dist/leaflet.css";
import type * as Leaflet from "leaflet";
import type {
  FeatureCollection,
  Feature,
  Geometry,
  MultiPolygon,
  Polygon,
  Position,
} from "geojson";
import type { Region } from "../_data/regions";
import { terminals } from "../_data/terminals";
import styles from "../page.module.css";

interface RegionMapProps {
  regions: Region[];
  onSelect: (slug: string) => void;
}

const COUNTRY_COLOR: Record<Region["country"], string> = {
  CA: "#cc0000",
  US: "#3b82f6",
};

const GEO_JSON_URL = "/maps/na-regions.geojson";

function getFocusedViewport(regions: Region[]): { center: [number, number]; zoom: number } | null {
  if (regions.length < 10) return null;

  const hasCanada = regions.some((region) => region.country === "CA");
  const hasUnitedStates = regions.some((region) => region.country === "US");

  if (hasCanada && hasUnitedStates) {
    return { center: [50.5, -97], zoom: 3.7 };
  }

  if (hasCanada) {
    return { center: [57.5, -98], zoom: 3.2 };
  }

  if (hasUnitedStates) {
    return { center: [38.5, -96], zoom: 3.8 };
  }

  return null;
}

interface GeoJsonProperties {
  slug: string;
  name: string;
  abbr: string;
  country: Region["country"];
}

type GeoFeature = Feature<Geometry, GeoJsonProperties>;
type GeoFeatureCollection = FeatureCollection<Geometry, GeoJsonProperties>;
type Ring = Position[];

function getRingArea(ring: Ring): number {
  let area = 0;

  for (let i = 0; i < ring.length; i++) {
    const [lng1, lat1] = ring[i];
    const [lng2, lat2] = ring[(i + 1) % ring.length];
    area += lng1 * lat2 - lng2 * lat1;
  }

  return area / 2;
}

function getRingCentroid(ring: Ring): { lat: number; lng: number } | null {
  const area = getRingArea(ring);
  if (!Number.isFinite(area) || Math.abs(area) < 0.000001) return null;

  let lngSum = 0;
  let latSum = 0;

  for (let i = 0; i < ring.length; i++) {
    const [lng1, lat1] = ring[i];
    const [lng2, lat2] = ring[(i + 1) % ring.length];
    const cross = lng1 * lat2 - lng2 * lat1;
    lngSum += (lng1 + lng2) * cross;
    latSum += (lat1 + lat2) * cross;
  }

  return {
    lat: latSum / (6 * area),
    lng: lngSum / (6 * area),
  };
}

function getLargestExteriorRing(geometry: Polygon | MultiPolygon): Ring {
  if (geometry.type === "Polygon") {
    return geometry.coordinates[0] as Ring;
  }

  return geometry.coordinates.reduce<Ring>((largest, polygon) => {
    const ring = polygon[0] as Ring;
    return Math.abs(getRingArea(ring)) > Math.abs(getRingArea(largest)) ? ring : largest;
  }, geometry.coordinates[0][0] as Ring);
}

function getFeatureCenter(feature: GeoFeature): { lat: number; lng: number } | null {
  if (feature.geometry.type !== "Polygon" && feature.geometry.type !== "MultiPolygon") {
    return null;
  }

  const ring = getLargestExteriorRing(feature.geometry);
  const centroid = getRingCentroid(ring);
  if (centroid && Number.isFinite(centroid.lat) && Number.isFinite(centroid.lng)) {
    return centroid;
  }

  return null;
}

export default function RegionMap({ regions, onSelect }: RegionMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Leaflet.Map | null>(null);
  const geoGroupRef = useRef<Leaflet.LayerGroup | null>(null);
  const geoDataRef = useRef<GeoFeatureCollection | null>(null);
  const LRef = useRef<typeof Leaflet | null>(null);

  const regionLookup = useMemo(() => {
    const map = new Map<string, Region>();
    regions.forEach((r) => map.set(r.slug, r));
    return map;
  }, [regions]);

  const getRegionStyle = useCallback(
    (feature?: GeoFeature): Leaflet.PathOptions => {
      const country = feature?.properties?.country as Region["country"];
      return {
        fillColor: COUNTRY_COLOR[country] ?? "#888888",
        fillOpacity: 0.65,
        color: "#ffffff",
        weight: 1.5,
        opacity: 1,
      };
    },
    []
  );

  const syncMarkers = useCallback(() => {
    const L = LRef.current;
    const map = mapRef.current;
    const geoGroup = geoGroupRef.current;
    if (!L || !map || !geoGroup) return;

    geoGroup.clearLayers();

    if (regions.length === 0) {
      map.setView([50, -100], 4);
      return;
    }

    const data = geoDataRef.current;
    const filteredFeatures =
      data?.features?.filter(
        (feature: GeoFeature) =>
          !!feature.properties?.slug &&
          regionLookup.has(feature.properties.slug)
      ) ?? [];

    const filteredData: GeoFeatureCollection | null =
      filteredFeatures.length > 0
        ? { type: "FeatureCollection", features: filteredFeatures }
        : null;

    // Draw highlighted region shapes.
    if (filteredData) {
      const regionLayer = L.geoJSON(filteredData, {
        style: getRegionStyle,
        onEachFeature: (feature, layer) => {
          const slug = feature.properties.slug as string;
          const region = regionLookup.get(slug)!;

          layer.bindTooltip(region.name, {
            direction: "top",
            sticky: true,
            className: styles.mapTooltip,
          });

          layer.on({
            mouseover: (e) => {
              (e.target as Leaflet.Path).setStyle({
                fillOpacity: 0.85,
                weight: 2,
              });
            },
            mouseout: (e) => {
              (e.target as Leaflet.Path).setStyle(getRegionStyle(feature));
            },
            click: () => onSelect(slug),
          });
        },
      }).addTo(geoGroup);

      regionLayer.eachLayer((layer) => {
        const feature = (layer as Leaflet.Layer & { feature?: GeoFeature }).feature;
        const slug = feature?.properties?.slug;
        if (!slug) return;

        const region = regionLookup.get(slug);
        if (!region) return;

        const center = getFeatureCenter(feature) ?? { lat: region.lat, lng: region.lng };

        const icon = L.divIcon({
          html: `<span class="${styles.regionLabel}">${region.abbr}</span>`,
          className: "",
          iconSize: [40, 24],
          iconAnchor: [20, 12],
        });

        L.marker([center.lat, center.lng], { icon, interactive: false }).addTo(geoGroup);
      });
    }

    // Add terminal markers.
    terminals.forEach((terminal) => {
      const icon = L.divIcon({
        html: `
          <div class="${styles.terminalMarker}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#22c55e" stroke="#ffffff" stroke-width="2">
              <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5" fill="#ffffff"/>
            </svg>
            <span class="${styles.terminalLabel}">${terminal.name}</span>
          </div>
        `,
        className: "",
        iconSize: [80, 44],
        iconAnchor: [40, 42],
      });

      L.marker([terminal.lat, terminal.lng], { icon })
        .bindTooltip(`Terminal - ${terminal.name}`, {
          direction: "top",
          offset: [0, -4],
          className: styles.mapTooltip,
        })
        .addTo(geoGroup);
    });

    const focusedViewport = getFocusedViewport(regions);

    if (focusedViewport) {
      map.setView(focusedViewport.center, focusedViewport.zoom, {
        animate: true,
      });
    } else if (filteredData) {
      map.fitBounds(L.geoJSON(filteredData).getBounds().pad(0.01), {
        animate: true,
        padding: [0, 0],
        maxZoom: 5.8,
      });
    } else {
      const bounds = L.latLngBounds(
        [regions[0].lat, regions[0].lng],
        [regions[0].lat, regions[0].lng]
      );
      regions.forEach((r) => bounds.extend([r.lat, r.lng]));
      map.fitBounds(bounds.pad(0.01), {
        animate: true,
        padding: [0, 0],
        maxZoom: 5.8,
      });
    }
  }, [regions, onSelect, regionLookup, getRegionStyle]);

  // Initialize Leaflet once on the client. It is imported dynamically so the
  // module is never evaluated during server-side prerendering.
  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;

    (async () => {
      const leafletModule = await import("leaflet");
      const L =
        (leafletModule as { default?: typeof Leaflet }).default ?? leafletModule;

      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        zoomControl: true,
        attributionControl: false,
        minZoom: 3,
        zoomSnap: 0.1,
        zoomDelta: 0.5,
      }).setView([50, -100], 4);

      const geoGroup = L.layerGroup().addTo(map);

      let data: GeoFeatureCollection | null = null;
      try {
        const res = await fetch(GEO_JSON_URL);
        if (res.ok) {
          data = await res.json();
        }
      } catch {
        data = null;
      }

      if (cancelled) return;

      mapRef.current = map;
      geoGroupRef.current = geoGroup;
      geoDataRef.current = data;
      LRef.current = L;

      syncMarkers();
    })();

    return () => {
      cancelled = true;
      geoGroupRef.current?.remove();
      mapRef.current?.remove();
      mapRef.current = null;
      geoGroupRef.current = null;
      geoDataRef.current = null;
      LRef.current = null;
    };
    // The map should only be created once; shape updates are handled separately.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update shapes/labels and bounds whenever the filtered region set changes.
  useEffect(() => {
    syncMarkers();
  }, [syncMarkers]);

  return <div ref={containerRef} className={styles.mapContainer} />;
}
