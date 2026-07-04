import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Sea 2 | ფიტნესი და აუზი გლდანში",
  description:
    "Black Sea 2 არის სპორტულ-გამაჯანსაღებელი კომპლექსი გლდანში: აუზი, ფიტნესი, Aqua Aerobics, აერობიკა და CrossFit.",
  openGraph: {
    title: "Black Sea 2",
    description:
      "ფიტნესი, ცურვა, Aqua Aerobics და CrossFit გლდანში, თბილისში.",
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
