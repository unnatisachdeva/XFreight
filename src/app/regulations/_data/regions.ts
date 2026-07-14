export type CountryCode = "CA" | "US";

export interface Region {
  slug: string;
  name: string;
  abbr: string;
  country: CountryCode;
  /** Approximate latitude of the largest / most recognizable city, used for the map. */
  lat: number;
  /** Approximate longitude of the largest / most recognizable city, used for the map. */
  lng: number;
}

export const regions: Region[] = [
  // Canada — provinces and territories
  { slug: "alberta", name: "Alberta", abbr: "AB", country: "CA", lat: 51.0447, lng: -114.0719 },
  { slug: "british-columbia", name: "British Columbia", abbr: "BC", country: "CA", lat: 49.2827, lng: -123.1207 },
  { slug: "manitoba", name: "Manitoba", abbr: "MB", country: "CA", lat: 49.8951, lng: -97.1384 },
  { slug: "new-brunswick", name: "New Brunswick", abbr: "NB", country: "CA", lat: 46.0878, lng: -64.7782 },
  { slug: "newfoundland-labrador", name: "Newfoundland and Labrador", abbr: "NL", country: "CA", lat: 47.5615, lng: -52.7126 },
  { slug: "northwest-territories", name: "Northwest Territories", abbr: "NT", country: "CA", lat: 62.454, lng: -114.3718 },
  { slug: "nova-scotia", name: "Nova Scotia", abbr: "NS", country: "CA", lat: 44.6488, lng: -63.5752 },
  { slug: "ontario", name: "Ontario", abbr: "ON", country: "CA", lat: 43.6532, lng: -79.3832 },
  { slug: "prince-edward-island", name: "Prince Edward Island", abbr: "PE", country: "CA", lat: 46.2382, lng: -63.1311 },
  { slug: "quebec", name: "Quebec", abbr: "QC", country: "CA", lat: 45.5017, lng: -73.5673 },
  { slug: "saskatchewan", name: "Saskatchewan", abbr: "SK", country: "CA", lat: 52.1579, lng: -106.6702 },
  { slug: "yukon", name: "Yukon", abbr: "YT", country: "CA", lat: 60.7212, lng: -135.0568 },

  // United States — states and district
  { slug: "alabama", name: "Alabama", abbr: "AL", country: "US", lat: 33.5207, lng: -86.8025 },
  { slug: "alaska", name: "Alaska", abbr: "AK", country: "US", lat: 61.2181, lng: -149.9003 },
  { slug: "arizona", name: "Arizona", abbr: "AZ", country: "US", lat: 33.4484, lng: -112.074 },
  { slug: "arkansas", name: "Arkansas", abbr: "AR", country: "US", lat: 34.7465, lng: -92.2896 },
  { slug: "california", name: "California", abbr: "CA", country: "US", lat: 34.0522, lng: -118.2437 },
  { slug: "colorado", name: "Colorado", abbr: "CO", country: "US", lat: 39.7392, lng: -104.9903 },
  { slug: "connecticut", name: "Connecticut", abbr: "CT", country: "US", lat: 41.1865, lng: -73.1952 },
  { slug: "delaware", name: "Delaware", abbr: "DE", country: "US", lat: 39.7391, lng: -75.5398 },
  { slug: "florida", name: "Florida", abbr: "FL", country: "US", lat: 30.3322, lng: -81.6557 },
  { slug: "georgia", name: "Georgia", abbr: "GA", country: "US", lat: 33.749, lng: -84.388 },
  { slug: "idaho", name: "Idaho", abbr: "ID", country: "US", lat: 43.615, lng: -116.2023 },
  { slug: "illinois", name: "Illinois", abbr: "IL", country: "US", lat: 41.8781, lng: -87.6298 },
  { slug: "indiana", name: "Indiana", abbr: "IN", country: "US", lat: 39.7684, lng: -86.1581 },
  { slug: "iowa", name: "Iowa", abbr: "IA", country: "US", lat: 41.5868, lng: -93.625 },
  { slug: "kansas", name: "Kansas", abbr: "KS", country: "US", lat: 37.6872, lng: -97.3301 },
  { slug: "kentucky", name: "Kentucky", abbr: "KY", country: "US", lat: 38.2527, lng: -85.7585 },
  { slug: "louisiana", name: "Louisiana", abbr: "LA", country: "US", lat: 29.9511, lng: -90.0715 },
  { slug: "maine", name: "Maine", abbr: "ME", country: "US", lat: 43.6591, lng: -70.2568 },
  { slug: "maryland", name: "Maryland", abbr: "MD", country: "US", lat: 39.2904, lng: -76.6122 },
  { slug: "massachusetts", name: "Massachusetts", abbr: "MA", country: "US", lat: 42.3601, lng: -71.0589 },
  { slug: "michigan", name: "Michigan", abbr: "MI", country: "US", lat: 42.3314, lng: -83.0458 },
  { slug: "minnesota", name: "Minnesota", abbr: "MN", country: "US", lat: 44.9778, lng: -93.265 },
  { slug: "mississippi", name: "Mississippi", abbr: "MS", country: "US", lat: 32.2988, lng: -90.1848 },
  { slug: "missouri", name: "Missouri", abbr: "MO", country: "US", lat: 39.0997, lng: -94.5786 },
  { slug: "montana", name: "Montana", abbr: "MT", country: "US", lat: 45.7833, lng: -108.5007 },
  { slug: "nebraska", name: "Nebraska", abbr: "NE", country: "US", lat: 41.2565, lng: -95.9345 },
  { slug: "nevada", name: "Nevada", abbr: "NV", country: "US", lat: 36.1699, lng: -115.1398 },
  { slug: "new-hampshire", name: "New Hampshire", abbr: "NH", country: "US", lat: 42.9956, lng: -71.4548 },
  { slug: "new-jersey", name: "New Jersey", abbr: "NJ", country: "US", lat: 40.7357, lng: -74.1724 },
  { slug: "new-mexico", name: "New Mexico", abbr: "NM", country: "US", lat: 35.0844, lng: -106.6504 },
  { slug: "new-york", name: "New York", abbr: "NY", country: "US", lat: 40.7128, lng: -74.006 },
  { slug: "north-carolina", name: "North Carolina", abbr: "NC", country: "US", lat: 35.2271, lng: -80.8431 },
  { slug: "north-dakota", name: "North Dakota", abbr: "ND", country: "US", lat: 46.8772, lng: -96.7898 },
  { slug: "ohio", name: "Ohio", abbr: "OH", country: "US", lat: 39.9612, lng: -82.9988 },
  { slug: "oklahoma", name: "Oklahoma", abbr: "OK", country: "US", lat: 35.4676, lng: -97.5164 },
  { slug: "oregon", name: "Oregon", abbr: "OR", country: "US", lat: 45.5152, lng: -122.6784 },
  { slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", country: "US", lat: 39.9526, lng: -75.1652 },
  { slug: "rhode-island", name: "Rhode Island", abbr: "RI", country: "US", lat: 41.824, lng: -71.4128 },
  { slug: "south-carolina", name: "South Carolina", abbr: "SC", country: "US", lat: 32.7765, lng: -79.9311 },
  { slug: "south-dakota", name: "South Dakota", abbr: "SD", country: "US", lat: 43.5446, lng: -96.7311 },
  { slug: "tennessee", name: "Tennessee", abbr: "TN", country: "US", lat: 36.1627, lng: -86.7816 },
  { slug: "texas", name: "Texas", abbr: "TX", country: "US", lat: 29.7604, lng: -95.3698 },
  { slug: "utah", name: "Utah", abbr: "UT", country: "US", lat: 40.7608, lng: -111.891 },
  { slug: "vermont", name: "Vermont", abbr: "VT", country: "US", lat: 44.4759, lng: -73.2121 },
  { slug: "virginia", name: "Virginia", abbr: "VA", country: "US", lat: 36.8529, lng: -75.978 },
  { slug: "washington", name: "Washington", abbr: "WA", country: "US", lat: 47.6062, lng: -122.3321 },
  { slug: "west-virginia", name: "West Virginia", abbr: "WV", country: "US", lat: 38.3498, lng: -81.6326 },
  { slug: "wisconsin", name: "Wisconsin", abbr: "WI", country: "US", lat: 43.0389, lng: -87.9065 },
  { slug: "wyoming", name: "Wyoming", abbr: "WY", country: "US", lat: 41.14, lng: -104.8202 },
  { slug: "district-of-columbia", name: "District of Columbia", abbr: "DC", country: "US", lat: 38.9072, lng: -77.0369 },
];

export const caRegions = regions.filter((r) => r.country === "CA");
export const usRegions = regions.filter((r) => r.country === "US");
