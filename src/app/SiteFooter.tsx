"use client";

import Link from "next/link";
import { type Lang, locationOrder, locationSlugs, locations } from "./content";
import { FacebookIcon, InstagramIcon, Logo, SocialLink, t } from "./site-ui";

export default function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="glass-bar border-t border-white/10 px-8 pb-10 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-3 text-[15px] tracking-[2px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            <Logo className="h-8 w-8" />
            BLACK SEA <span style={{ color: "var(--accent)", textShadow: "0 0 10px currentColor" }}>COMPLEX</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/60">
            {locationOrder.map((id) => (
              <Link key={id} href={`/${locationSlugs[id]}`} className="whitespace-nowrap hover:text-white/90">
                {t(locations[id].shortName, lang)}
              </Link>
            ))}
            <div className="flex gap-2.5">
              <SocialLink href={locations.blacksea1.facebook!} label="Facebook">
                <FacebookIcon className="h-full w-full" />
              </SocialLink>
              <SocialLink href={locations.zestafoni.instagram!} label="Instagram">
                <InstagramIcon className="h-full w-full" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
