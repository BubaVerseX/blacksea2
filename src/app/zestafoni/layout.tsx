import type { Metadata } from "next";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Black Sea ზესტაფონი — აუზები, სავარჯიშო დარბაზი და სასტუმრო",
  description:
    "Black Sea ზესტაფონში, აღმაშენებლის 37: დახურული და ღია აუზები, საუნა, სავარჯიშო დარბაზი, კრივი, აქვა აერობიკა, ცურვის გაკვეთილები ბავშვებისთვის და სასტუმრო კომპლექსში. ყოველდღე 09:00–21:00.",
  path: "/zestafoni",
  image: "/og/zestafoni.jpg",
  imageAlt: "Black Sea ზესტაფონი — სავარჯიშო დარბაზი",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
