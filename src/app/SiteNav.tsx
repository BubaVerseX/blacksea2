"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { type Lang, type LocationId, locationOrder, locationSlugs, locations, ui } from "./content";
import { GhostButton, LangSwitcher, t } from "./site-ui";

export default function SiteNav({
  activeId,
  lang,
  setLang,
}: {
  activeId?: LocationId;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const callPhone = activeId ? locations[activeId].phones[0] : undefined;

  return (
    <nav
      className={`glass-bar fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled ? "py-3.5" : "py-5.5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8">
        <Link
          href="/"
          className="whitespace-nowrap text-[16px] tracking-[2.5px]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          BLACK SEA <span style={{ color: "var(--gold)", textShadow: "0 0 10px currentColor" }}>COMPLEX</span>
        </Link>
        <div className="hidden gap-2 text-[13px] md:flex">
          {locationOrder.map((id) => (
            <Link
              key={id}
              href={`/${locationSlugs[id]}`}
              className={`rounded-full border px-4 py-2 transition-all duration-300 ${
                activeId === id ? "border-white/20 bg-white/5 text-white" : "border-transparent text-white/60 hover:text-white/90"
              }`}
            >
              {t(locations[id].shortName, lang)}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <LangSwitcher lang={lang} setLang={setLang} />
          {callPhone && (
            <GhostButton href={`tel:${callPhone.replace(/\s/g, "")}`} className="!px-5 !py-2.5 !text-[12px]">
              {t(ui.navCall, lang)}
            </GhostButton>
          )}
        </div>
      </div>
    </nav>
  );
}
