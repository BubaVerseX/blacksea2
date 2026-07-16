import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Sea Complex | Tbilisi (Gldani) & Zestafoni",
  description:
    "Black Sea Complex — premium sport complexes in Tbilisi (Gldani) and Zestafoni. Pools, gym, group classes, a kids-focused location, and an on-site hotel in Zestafoni.",
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
