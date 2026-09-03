"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { locationOrder, locationSlugs, locations, ui } from "./content";
import HomeBackground from "./HomeBackground";
import { PALETTES } from "./LocationBackground";
import PricingPreview from "./PricingPreview";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import { AmenityBadges, ArrowIcon, CardShine, Logo, OrbitBorder, t, useLang, useReveal, useTilt } from "./site-ui";

export default function Page() {
  const [lang, setLang] = useLang();
  const revealRef = useReveal([lang]);
  const tilt = useTilt();

  return (
    <div ref={revealRef}>
      <HomeBackground />
      <SiteNav lang={lang} setLang={setLang} />

      {/* FLAGSHIP BRAND BAND */}
      <section className="relative overflow-hidden px-8 pb-6 pt-32 text-center">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, #0a1526 0%, #0d1c33 55%, #070a11 100%)" }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[380px] -z-10"
          style={{ background: "radial-gradient(circle at 50% 0%, rgba(0,242,254,0.16), transparent 60%)" }}
        />
        <div className="micro-grid -z-10" aria-hidden="true" />
        <div className="ambient-orb ambient-orb-1 -z-10" aria-hidden="true" />
        <div className="ambient-orb ambient-orb-2 -z-10" aria-hidden="true" />
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Logo className="mx-auto mb-5 h-20 w-20 md:h-28 md:w-28" />
          <div
            className="text-[14px] tracking-[6px] text-white/80 md:text-[16px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            BLACK SEA
          </div>
          <div
            className="gradient-text text-[36px] tracking-[4px] md:text-[54px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            COMPLEX
          </div>
          <div className="mx-auto mt-6 h-[2px] w-32" style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />
        </motion.div>
      </section>

      {/* HERO / GATE */}
      <section className="px-8 pb-16 pt-10 text-center">
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
              const pal = PALETTES[id];
              return (
                <Link
                  key={id}
                  href={`/${locationSlugs[id]}`}
                  data-theme={id}
                  data-reveal
                  {...tilt}
                  className="gate-card tilt-card premium-card glass-panel group relative block h-[460px] cursor-pointer overflow-hidden rounded-md text-left"
                >
                  <div className="gate-bg absolute inset-0 overflow-hidden transition-transform duration-700" style={{ background: pal.baseGradient }}>
                    {l.photo && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: `url(${l.photo})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          opacity: 0.32,
                          filter: "grayscale(15%) contrast(105%)",
                        }}
                      />
                    )}
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
                    style={{ background: "linear-gradient(180deg, transparent 30%, rgba(7,10,17,0.94) 100%)" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <span
                      className="mb-2.5 block text-[11px] uppercase tracking-[2px]"
                      style={{ color: "var(--accent)", textShadow: "0 0 10px currentColor" }}
                    >
                      {t(l.gateTag, lang)}
                    </span>
                    <h3 className="mb-2 text-[32px]" style={{ fontFamily: "var(--font-head)" }}>
                      {l.brandName}
                    </h3>
                    <p className="mb-4 max-w-xs text-[14px] text-white/60">{t(l.gateBlurb, lang)}</p>
                    <div className="mb-5">
                      <AmenityBadges loc={l} lang={lang} />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex gap-4 text-[12px] text-white/60">
                        <span>{t(l.areaLabel, lang)}</span>
                        <span>{t(l.hoursShort, lang)}</span>
                      </div>
                      <span
                        className="flex items-center gap-1.5 text-[12px] font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5"
                        style={{ color: "var(--accent)" }}
                      >
                        {t(ui.viewLocation, lang)}
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                  <OrbitBorder />
                  <CardShine />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <PricingPreview lang={lang} />

      <SiteFooter lang={lang} />
    </div>
  );
}
