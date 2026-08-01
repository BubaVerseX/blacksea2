"use client";

import Link from "next/link";
import { type Lang, instagramUrl, locationOrder, locationSlugs, locations, ui } from "./content";
import { FacebookIcon, InstagramIcon, SocialLink, t } from "./site-ui";

export default function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="glass-bar border-t border-white/10 px-8 pb-10 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="text-[15px] tracking-[2px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            BLACK SEA <span style={{ color: "var(--gold)", textShadow: "0 0 10px currentColor" }}>COMPLEX</span>
          </div>
          <div className="flex items-center gap-6 text-[13px] text-white/60">
            {locationOrder.map((id) => (
              <Link key={id} href={`/${locationSlugs[id]}`} className="hover:text-white/90">
                {t(locations[id].shortName, lang)}
              </Link>
            ))}
            <div className="flex gap-2.5">
              <SocialLink href={locations.blacksea1.facebook!} tone="gold" label="Facebook">
                <FacebookIcon className="h-full w-full" />
              </SocialLink>
              <SocialLink href={instagramUrl || "#"} tone="gold" label="Instagram">
                <InstagramIcon className="h-full w-full" />
              </SocialLink>
            </div>
          </div>
        </div>
        <div className="mt-6 text-[12px] text-white/50">{t(ui.footNote, lang)}</div>
      </div>
    </footer>
  );
}
