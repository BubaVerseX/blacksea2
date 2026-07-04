import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Sea 2 | Swimming and Fitness in Gldani",
  description:
    "Black Sea 2 is a sports and swimming complex in Gldani, Tbilisi with swimming pools, gym, aqua aerobics, aerobics, and CrossFit.",
  openGraph: {
    title: "Black Sea 2",
    description:
      "Swimming, fitness, aqua aerobics, and CrossFit in Gldani, Tbilisi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
