import type { Metadata } from "next";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Black Sea Kids — ცურვის გაკვეთილები ბავშვებისთვის, გლდანი",
  description:
    "ბავშვებზე ორიენტირებული კომპლექსი გლდანში, თბილისი: ჯგუფური და პერსონალური ცურვის გაკვეთილები 5 წლიდან, ბავშვთა ფიტნესი და ორი აუზი. ორშ–შაბ 09:00–21:00, კვირა 09:00–15:00.",
  path: "/black-sea-kids",
  image: "/og/black-sea-kids.jpg",
  imageAlt: "Black Sea Kids — სავარჯიშო ბილიკები",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
