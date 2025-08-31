// src/lib/media.ts
export function getDealImage(
  city: "karachi" | "hyderabad" | "lahore",
  file: string
) {
  // files live in /public/deals/<city>/<file>
  return `/deals/${city}/${file}`;
}
