import type { Metadata } from "next";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Black Sea, გლდანი — აუზები, სავარჯიშო დარბაზი და სრიალის ბანი",
  description:
    "გლდანის მთავარი კომპლექსი თბილისში: 25 მ და 12.5 მ აუზები, თანამედროვე სავარჯიშო დარბაზი, CrossFit, აქვა აერობიკა, ჯგუფური ვარჯიშები და ფიგურული სრიალის ბანი. ორშ–შაბ 07:00–22:00, კვირა 09:00–21:00.",
  path: "/black-sea",
  image: "/og/black-sea.jpg",
  imageAlt: "Black Sea, გლდანი — მისაღები",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
