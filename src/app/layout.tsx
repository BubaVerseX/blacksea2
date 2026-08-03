import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Sea Complex | Tbilisi (Gldani) & Zestafoni",
  description:
    "Black Sea Complex — premium sport complexes in Tbilisi (Gldani) and Zestafoni. Pools, gym, group classes, a kids-focused location, and an on-site hotel in Zestafoni.",
  other: {
    "talentapp:project_verification":
      "1b76d65933aa988020aaa330a8234ce58815eaa6f3efa473da1604fb4fc09fac0b5a446ed4e9b8811368510fd53e4202bf6e90c4ce2411d0650167769a3a9f9c",
  },
  openGraph: {
    title: "Black Sea Complex",
    description:
      "Three premium sport complexes in Georgia — Black Sea 1, Black Sea Kids, and Zestafoni.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
