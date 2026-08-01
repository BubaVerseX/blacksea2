"use client";

import Link from "next/link";
import { type Lang, type LocationId, locations, ui } from "./content";
import { ArrowIcon, FacebookIcon, GhostButton, PrimaryButton, SocialLink, t, useReveal } from "./site-ui";

export default function LocationPage({ id, lang }: { id: LocationId; lang: Lang }) {
  const loc = locations[id];
  const accentVar = loc.accent === "gold" ? "var(--gold)" : "var(--blue)";
  const revealRef = useReveal([lang]);

  return (
    <div ref={revealRef}>
      {/* BREADCRUMB */}
      <div className="px-8 pt-28">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[1.5px] text-white/50 transition-colors duration-300 hover:text-white/90"
          >
            <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
            {t(ui.backToLocations, lang)}
          </Link>
        </div>
      </div>

      {/* INTRO */}
      <section className="px-8 pb-10 pt-8">
        <div className="mx-auto max-w-6xl" data-reveal>
          <div className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar, textShadow: "0 0 10px currentColor" }}>
            {loc.brandName}
          </div>
          <h1 className="max-w-2xl text-[30px] md:text-[48px]" style={{ fontFamily: "var(--font-head)" }}>
            {t(loc.introHeading, lang)}
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">{t(loc.introLede, lang)}</p>
          <div className="mt-7 flex flex-wrap gap-7 text-[14px] text-white/60">
            <div>
              <b className="mb-1 block font-medium text-white">{t(ui.addressLabel, lang)}</b>
              {t(loc.address, lang)}
            </div>
            <div>
              <b className="mb-1 block font-medium text-white">{t(ui.phoneLabel, lang)}</b>
              {loc.phones.length ? loc.phones.join(" / ") : t(ui.phoneTbc, lang)}
            </div>
            <div>
              <b className="mb-1 block font-medium text-white">{t(ui.hoursLabel, lang)}</b>
              {t(loc.hoursShort, lang)}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="border-y border-white/10 px-8 py-20" style={{ background: "var(--panel-2)" }}>
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar, textShadow: "0 0 10px currentColor" }}>
            {t(ui.includedEyebrow, lang)}
          </div>
          <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "var(--font-head)" }}>
            {t(ui.includedHeading, lang)}
          </h2>
          <div data-reveal className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loc.services.map((s, i) => {
              const tone = s.category === "gym" ? "fit" : "spa";
              return (
                <div
                  key={i}
                  className={`premium-card glass-panel glass-${tone} tone-${tone} rounded-md p-9 transition-transform duration-300 hover:-translate-y-1`}
                >
                  <span className={`mb-4 inline-block rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[2px] ${tone === "fit" ? "badge-fit" : "badge-spa"}`}>
                    {s.category === "gym" ? (lang === "en" ? "Gym" : "დარბაზი") : lang === "en" ? "Pool" : "აუზი"}
                  </span>
                  <h3 className={`mb-2.5 text-[22px] ${tone === "fit" ? "fit-heading" : "spa-heading"}`}>
                    {t(s.title, lang)}
                  </h3>
                  <p className={`text-[13px] leading-relaxed ${tone === "fit" ? "text-white/70" : "spa-body"}`}>{t(s.desc, lang)}</p>
                </div>
              );
            })}
            {loc.hotel && (
              <div className="premium-card tone-spa glass-panel glass-spa col-span-1 grid grid-cols-1 items-center gap-7 rounded-md p-9 sm:col-span-2 lg:col-span-3 lg:grid-cols-2">
                <div>
                  <span className="badge-spa mb-4 inline-block rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[2px]">
                    {lang === "en" ? "Hotel" : "სასტუმრო"}
                  </span>
                  <h3 className="spa-heading mb-2.5 text-[22px]">{t(loc.hotel.title, lang)}</h3>
                  <p className="spa-body text-[13px] leading-relaxed">{t(loc.hotel.desc, lang)}</p>
                </div>
                <div className="flex h-[150px] items-center justify-center rounded text-[11px] uppercase tracking-[1.5px] text-white/50" style={{ background: "linear-gradient(135deg,#12151c,#08090c)" }}>
                  {lang === "en" ? "Photo pending — hotel" : "ფოტო მალე — სასტუმრო"}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar, textShadow: "0 0 10px currentColor" }}>
            {t(ui.membershipEyebrow, lang)}
          </div>
          <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "var(--font-head)" }}>
            {t(ui.pricingHeading(loc.shortName), lang)}
          </h2>

          {loc.pricingGroups ? (
            <>
              {loc.visitorNote && (
                <div
                  data-reveal
                  className="glass-panel mt-10 inline-block rounded-md px-4 py-2.5 text-[13px] leading-relaxed"
                  style={{ color: accentVar, textShadow: "0 0 8px currentColor" }}
                >
                  {t(loc.visitorNote, lang)}
                </div>
              )}
              <div data-reveal className="mt-8 flex flex-col gap-6">
                {loc.pricingGroups.map((group, gi) => (
                  <div key={gi} className="premium-card tone-blue glass-panel rounded-md p-6 md:p-8">
                    <h3 className="mb-5 text-[18px]" style={{ fontFamily: "var(--font-head)", color: accentVar, textShadow: "0 0 8px currentColor" }}>
                      {t(group.category, lang)}
                    </h3>
                    <div className="flex flex-col divide-y divide-white/10">
                      {group.rows.map((row, ri) => (
                        <div key={ri} className="flex items-center justify-between gap-4 py-3 text-[14px]">
                          <span className="text-white/70">{t(row.tier, lang)}</span>
                          <span className="font-semibold whitespace-nowrap" style={{ fontFamily: "var(--font-head)" }}>
                            {row.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div data-reveal className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
                {loc.pricing?.map((p, i) => (
                  <div
                    key={i}
                    className="glass-panel rounded-md p-8 transition-all duration-300 hover:-translate-y-1.5"
                    style={p.accent ? { borderColor: accentVar } : undefined}
                  >
                    <div className="mb-3.5 text-[12px] uppercase tracking-[2px] text-white/60">{t(p.label, lang)}</div>
                    <div className="mb-1 text-[40px]" style={{ fontFamily: "var(--font-head)" }}>
                      —<span className="text-[14px] font-sans text-white/60">{t(p.unit, lang)}</span>
                    </div>
                    <div className="mb-6 text-[12px] text-white/60">{t(p.note, lang)}</div>
                    <ul className="mb-6 flex flex-col gap-2.5 text-[13px] text-white/60">
                      {p.features.map((f, fi) => (
                        <li key={fi}>— {t(f, lang)}</li>
                      ))}
                    </ul>
                    {p.accent ? (
                      <PrimaryButton tone={loc.accent} href="#contact" className="w-full">
                        {t(ui.contactUs, lang)}
                      </PrimaryButton>
                    ) : (
                      <GhostButton href="#contact" className="w-full">
                        {t(ui.contactUs, lang)}
                      </GhostButton>
                    )}
                  </div>
                ))}
              </div>
              <div data-reveal className="glass-panel mt-10 rounded-md p-4 text-[13px] leading-relaxed" style={{ color: accentVar, textShadow: "0 0 8px currentColor" }}>
                {t(ui.pricingNote, lang)}
              </div>
            </>
          )}
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-y border-white/10 px-8 py-20" style={{ background: "var(--panel-2)" }}>
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar, textShadow: "0 0 10px currentColor" }}>
            {t(ui.galleryEyebrow, lang)}
          </div>
          <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "var(--font-head)" }}>
            {t(ui.galleryHeading(loc.shortName), lang)}
          </h2>
          <div data-reveal className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4" style={{ gridAutoRows: "170px" }}>
            {loc.gallery.map((g, i) => (
              <div
                key={i}
                className={`gallery-card relative overflow-hidden rounded ${i === 0 ? "col-span-2 row-span-2" : "col-span-1"}`}
              >
                <div className="glass-panel flex h-full items-center justify-center text-[11px] uppercase tracking-[1.5px] text-white/50 transition-transform duration-500 hover:scale-105">
                  {t(g.label, lang)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS + CONTACT */}
      <section id="contact" className="px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar, textShadow: "0 0 10px currentColor" }}>
            {t(ui.hoursContactEyebrow, lang)}
          </div>
          <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "var(--font-head)" }}>
            {t(ui.planVisit, lang)}
          </h2>
          <div data-reveal className="mt-10 max-w-md">
            {loc.hoursDetailed.map((h, i) => (
              <div key={i} className="flex justify-between border-b border-white/10 py-4 text-[15px]">
                <span className="text-white/60">{t(h.day, lang)}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>

          {loc.rules && (
            <div data-reveal className="mt-10 max-w-md">
              <b className="mb-3 block text-[15px] font-medium text-white">{t(ui.rulesHeading, lang)}</b>
              <ol className="flex flex-col gap-3 text-[13px] leading-relaxed text-white/60">
                {loc.rules.map((r, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span style={{ color: accentVar, textShadow: "0 0 8px currentColor" }}>{i + 1}.</span>
                    <span>{t(r, lang)}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div data-reveal className="glass-panel mt-12 flex flex-wrap items-center justify-between gap-6 rounded-md p-8">
            <div className="text-[14px] text-white/60">
              <b className="mb-1 block text-[16px] font-medium text-white">{loc.brandName}</b>
              {t(loc.address, lang)}
            </div>
            <div className="flex items-center gap-3">
              {loc.phones[0] && (
                <PrimaryButton tone={loc.accent} href={`tel:${loc.phones[0].replace(/\s/g, "")}`}>
                  {t(ui.navCall, lang)}
                </PrimaryButton>
              )}
              <GhostButton href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.brandName)}`}>
                {t(ui.directions, lang)}
              </GhostButton>
              {loc.facebook && (
                <SocialLink href={loc.facebook} tone={loc.accent} label={`Facebook — ${loc.brandName}`}>
                  <FacebookIcon className="h-full w-full" />
                </SocialLink>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
