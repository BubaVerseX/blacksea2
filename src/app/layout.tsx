import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import Cursor from "./Cursor";
import "./globals.css";
import { pageMetadata, SITE_NAME, SITE_URL } from "./site";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "700", "900"], variable: "--font-display" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-head" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  ...pageMetadata({
    title: "Black Sea Complex — აუზები, ფიტნესი და სპორტი თბილისსა და ზესტაფონში",
    description:
      "სამი სპორტული კომპლექსი საქართველოში: Black Sea და Black Sea Kids გლდანში, თბილისი, და Black Sea ზესტაფონში. საცურაო აუზები, სავარჯიშო დარბაზი, ჯგუფური ვარჯიშები, ცურვის გაკვეთილები ბავშვებისთვის, ფიგურული სრიალის ბანი და სასტუმრო.",
    path: "/",
    image: "/og/home.jpg",
    imageAlt: "Black Sea Complex — საცურაო აუზი",
  }),
  other: {
    "talentapp:project_verification":
      "1b76d65933aa988020aaa330a8234ce58815eaa6f3efa473da1604fb4fc09fac0b5a446ed4e9b8811368510fd53e4202bf6e90c4ce2411d0650167769a3a9f9c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className={`h-full antialiased ${orbitron.variable} ${rajdhani.variable}`}>
      <body className="min-h-full flex flex-col">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
