export interface Terminal {
  name: string;
  slug: string;
  lat: number;
  lng: number;
}

export const terminals: Terminal[] = [
  { name: "Edmonton, AB", slug: "edmonton", lat: 53.5461, lng: -113.4938 },
  { name: "Winnipeg, MB", slug: "winnipeg", lat: 49.8951, lng: -97.1384 },
  { name: "Toronto, ON", slug: "toronto", lat: 43.6532, lng: -79.3832 },
];
