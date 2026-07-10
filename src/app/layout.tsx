import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Sea Complex | Tbilisi & Zestafoni",
  description:
    "Black Sea Complex — premium sport complexes in Tbilisi (Gldani) and Zestafoni. Pools, gym, group classes, and an on-site hotel in Zestafoni.",
  openGraph: {
    title: "Black Sea Complex",
    description:
      "Two premium sport complexes in Georgia — Tbilisi and Zestafoni.",
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
