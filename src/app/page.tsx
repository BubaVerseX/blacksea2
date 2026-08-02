"use client";

import Link from "next/link";
import { locationOrder, locationSlugs, locations, ui } from "./content";
import HomeBackground from "./HomeBackground";
import { PALETTES } from "./LocationBackground";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import { ArrowIcon, t, useLang, useReveal } from "./site-ui";

export default function Page() {
  const [lang, setLang] = useLang();
  const revealRef = useReveal([lang]);

  return (
    <div ref={revealRef}>
      <HomeBackground />
      <SiteNav lang={lang} setLang={setLang} />

      {/* HERO / GATE */}
      <section className="px-8 pb-16 pt-44 text-center">
        <div className="mx-auto max-w-6xl">
          <span className="glass-panel mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[2px] text-white/60">
            {t(ui.heroBadge, lang)}
          </span>
          <h1 className="mx-auto max-w-3xl text-[34px] leading-[1.1] tracking-wide md:text-[52px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            {t(ui.heroTitle, lang)}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[16px] text-white/60">{t(ui.heroSub, lang)}</p>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locationOrder.map((id) => {
              const l = locations[id];
              const isGold = l.accent === "gold";
              const pal = PALETTES[id];
              return (
                <Link
                  key={id}
                  href={`/${locationSlugs[id]}`}
                  data-reveal
                  className="gate-card glass-panel group relative block h-[440px] cursor-pointer overflow-hidden rounded-md text-left"
                >
                  <div className="gate-bg absolute inset-0 overflow-hidden transition-transform duration-700" style={{ background: pal.baseGradient }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "30%",
                        top: "-12%",
                        width: "62%",
                        height: "62%",
                        background: pal.pane1Bg,
                        border: `1px solid ${pal.pane1Border}`,
                        borderRadius: 14,
                        transform: "rotate(-3deg)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "-6%",
                        bottom: "-10%",
                        fontFamily: "var(--font-head)",
                        fontWeight: 800,
                        lineHeight: 0.8,
                        fontSize: pal.cardMarkSize,
                        color: "transparent",
                        WebkitTextStroke: `1px ${pal.markStroke}`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {pal.mark}
                    </div>
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 30%, rgba(3,4,5,0.92) 100%)" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <span
                      className="mb-2.5 block text-[11px] uppercase tracking-[2px]"
                      style={{ color: isGold ? "var(--gold)" : "var(--blue)", textShadow: "0 0 10px currentColor" }}
                    >
                      {t(l.gateTag, lang)}
                    </span>
                    <h3 className="mb-2 text-[32px]" style={{ fontFamily: "var(--font-head)" }}>
                      {l.brandName}
                    </h3>
                    <p className="mb-5 max-w-xs text-[14px] text-white/60">{t(l.gateBlurb, lang)}</p>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex gap-4 text-[12px] text-white/60">
                        <span>{t(l.areaLabel, lang)}</span>
                        <span>{t(l.hoursShort, lang)}</span>
                      </div>
                      <span
                        className="flex items-center gap-1.5 text-[12px] font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5"
                        style={{ color: isGold ? "var(--gold)" : "var(--blue)" }}
                      >
                        {t(ui.viewLocation, lang)}
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
