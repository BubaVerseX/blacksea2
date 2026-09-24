import type { MetadataRoute } from "next";
import { locationOrder, locationSlugs } from "./content";
import { SITE_URL } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...locationOrder.map((id) => ({
      url: `${SITE_URL}/${locationSlugs[id]}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
