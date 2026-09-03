export const LOCATIONS = [
  "Jadavpur, Kolkata",
  "Siliguri",
  "Dankuni",
  "Purulia",
  "Kalyani",
  "Malda",
  "Musheerabad",
] as const;

export type Location = (typeof LOCATIONS)[number];
