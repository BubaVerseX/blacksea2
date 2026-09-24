import type { Metadata } from "next";

// Canonical origin used for metadataBase, OG URLs, sitemap and robots.
// blackseacomplex.ge is attached in Vercel but its DNS isn't live yet, so the
// Vercel URL stays the default until then. Once the domain resolves, set
// NEXT_PUBLIC_SITE_URL=https://blackseacomplex.ge in Vercel (or change the
// fallback below) and redeploy.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://blacksea2.vercel.app").replace(/\/$/, "");

export const SITE_NAME = "Black Sea Complex";

// Next.js replaces nested metadata objects (openGraph, twitter) wholesale,
// so every page builds its full set through this helper.
export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
}): Metadata {
  const images = [{ url: image, width: 1200, height: 630, alt: imageAlt }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "ka_GE",
      alternateLocale: ["en_US"],
      url: path,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
