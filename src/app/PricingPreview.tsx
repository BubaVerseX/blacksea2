"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { type Lang, type LocationId, locationOrder, locationSlugs, locations, ui } from "./content";
import { PrimaryButton, t } from "./site-ui";

/** Interactive membership/pricing teaser for the home hub — switching the
 *  location tab both swaps the visible price rows and re-themes the whole
 *  card (via data-theme) to that location's accent, previewing the shift
 *  a visitor gets once they actually click through. */
export default function PricingPreview({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<LocationId>(locationOrder[0]);
  const loc = locations[active];
  const group = loc.pricingGroups?.[0];

  return (
    <section data-theme={active} data-reveal className="section-glass px-8 py-20">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: "var(--accent)", textShadow: "0 0 10px currentColor" }}>
          {t(ui.membershipEyebrow, lang)}
        </div>
        <h2 className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "var(--font-head)" }}>
          {t(ui.pricingPreviewHeading, lang)}
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {locationOrder.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              data-theme={id}
              className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] transition-all duration-300 ${
                active === id
                  ? "border-[var(--accent)] bg-[rgba(var(--accent-rgb),0.12)] text-white"
                  : "border-white/15 text-white/60 hover:text-white/90"
              }`}
            >
              {t(locations[id].shortName, lang)}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px] lg:items-stretch">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="premium-card glass-panel rounded-md p-8"
              >
                {group ? (
                  <>
                    <h3 className="mb-5 text-[15px] uppercase tracking-[1.5px]" style={{ color: "var(--accent)", textShadow: "0 0 8px currentColor" }}>
                      {t(group.category, lang)}
                    </h3>
                    <div className="flex flex-col divide-y divide-white/10">
                      {group.rows.slice(0, 4).map((row, i) => (
                        <div key={i} className="flex items-center justify-between gap-4 py-3 text-[14px]">
                          <span className="text-white/70">{t(row.tier, lang)}</span>
                          <span className="whitespace-nowrap font-semibold" style={{ fontFamily: "var(--font-head)" }}>
                            {row.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col divide-y divide-white/10">
                    {loc.pricing?.slice(0, 3).map((p, i) => (
                      <div key={i} className="flex items-center justify-between gap-4 py-3 text-[14px]">
                        <span className="text-white/70">{t(p.label, lang)}</span>
                        <span className="whitespace-nowrap font-semibold" style={{ fontFamily: "var(--font-head)" }}>
                          {t(p.unit, lang)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <p className="text-[14px] leading-relaxed text-white/60">{t(loc.gateBlurb, lang)}</p>
            <PrimaryButton href={`/${locationSlugs[active]}#pricing`} className="self-start">
              {t(ui.viewFullPricing, lang)}
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="section-divider mt-16" />
    </section>
  );
}
