"use client";

import { useEffect, useRef, useState } from "react";
import {
  type Bi,
  type Lang,
  type LocationId,
  instagramUrl,
  locationOrder,
  locations,
  ui,
} from "./content";

function t(bi: Bi, lang: Lang) {
  return bi[lang];
}

function useReveal(deps: unknown[]) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rootRef;
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className}>
      <circle cx="12" cy="12" r="9.3" />
      <path d="M13.8 21v-7.2h2.3l.4-2.8h-2.7v-1.8c0-.8.2-1.4 1.4-1.4h1.4V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2h-2.4v2.8h2.4V21" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SocialLink({ href, tone, children, label }: { href: string; tone: "gold" | "blue"; children: React.ReactNode; label: string }) {
  const hoverClass = tone === "gold" ? "hover:text-[var(--gold)] hover:border-[var(--gold)]" : "hover:text-[var(--blue)] hover:border-[var(--blue)]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 ${hoverClass}`}
    >
      <span className="h-4 w-4">{children}</span>
    </a>
  );
}

function PrimaryButton({ tone, children, ...props }: React.ComponentPropsWithoutRef<"a"> & { tone: "gold" | "blue" }) {
  const bg = tone === "gold" ? "bg-[var(--gold)] text-black" : "bg-[var(--blue)] text-white";
  return (
    <a
      {...props}
      className={`premium-button inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border px-6 py-3 text-[13px] font-semibold tracking-wide transition-all duration-300 ${bg} border-transparent hover:-translate-y-px hover:shadow-[0_0_28px_rgba(242,195,0,0.35)]`}
    >
      {children}
    </a>
  );
}

function GhostButton({ children, ...props }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-white/20 px-6 py-3 text-[13px] tracking-wide text-white transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
    >
      {children}
    </a>
  );
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("ka");
  const [active, setActive] = useState<LocationId>("tbilisi");
  const [scrolled, setScrolled] = useState(false);
  const revealRef = useReveal([active, lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (loc: LocationId, scroll?: boolean) => {
    setActive(loc);
    if (scroll) {
      document.getElementById("locations")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const loc = locations[active];
  const accentVar = loc.accent === "gold" ? "var(--gold)" : "var(--blue)";

  return (
    <div ref={revealRef}>
      {/* NAV */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-[var(--background)]/75 py-3.5 backdrop-blur-xl" : "border-b border-transparent py-5.5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8">
          <div className="whitespace-nowrap font-serif text-[20px] tracking-[2.5px]" style={{ fontFamily: "Georgia, serif" }}>
            BLACK SEA <span style={{ color: "var(--gold)" }}>COMPLEX</span>
          </div>
          <div className="hidden gap-2 text-[13px] md:flex">
            {locationOrder.map((id) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={`rounded-full border px-4 py-2 transition-all duration-300 ${
                  active === id ? "border-white/20 bg-white/5 text-white" : "border-transparent text-white/60"
                }`}
              >
                {id === "tbilisi" ? "Tbilisi" : "Zestafoni"}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5 text-[12px] text-white/60">
              <span
                onClick={() => setLang("en")}
                className={`cursor-pointer rounded px-1.5 py-0.5 ${lang === "en" ? "border border-white/20 text-white" : ""}`}
              >
                {ui.langEn}
              </span>
              <span>|</span>
              <span
                onClick={() => setLang("ka")}
                className={`cursor-pointer rounded px-1.5 py-0.5 ${lang === "ka" ? "border border-white/20 text-white" : ""}`}
              >
                {ui.langKa}
              </span>
            </div>
            <GhostButton href={`tel:${loc.phones[0].replace(/\s/g, "")}`} className="!px-5 !py-2.5 !text-[12px]">
              {t(ui.navCall, lang)}
            </GhostButton>
          </div>
        </div>
      </nav>

      {/* HERO / GATE */}
      <section className="px-8 pb-16 pt-44 text-center">
        <div className="mx-auto max-w-6xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-[11px] uppercase tracking-[2px] text-white/60">
            {t(ui.heroBadge, lang)}
          </span>
          <h1 className="mx-auto max-w-3xl text-[38px] leading-[1.08] tracking-wide md:text-[60px]" style={{ fontFamily: "Georgia, serif" }}>
            {t(ui.heroTitle, lang)}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[16px] text-white/60">{t(ui.heroSub, lang)}</p>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {locationOrder.map((id) => {
              const l = locations[id];
              const isGold = l.accent === "gold";
              return (
                <div
                  key={id}
                  onClick={() => goTo(id, true)}
                  className="gate-card group relative h-[440px] cursor-pointer overflow-hidden rounded-md border border-white/10 text-left"
                  style={{ background: "linear-gradient(150deg,var(--panel),var(--background))" }}
                >
                  <div
                    className="gate-bg absolute inset-0 transition-transform duration-700"
                    style={{
                      background: isGold
                        ? "radial-gradient(circle at 30% 20%, rgba(242,195,0,0.16), transparent 55%), linear-gradient(160deg,var(--panel),var(--background))"
                        : "radial-gradient(circle at 70% 30%, rgba(30,167,255,0.18), transparent 55%), linear-gradient(160deg,var(--panel),var(--background))",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 30%, rgba(27,27,29,0.92) 100%)" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <span
                      className="mb-2.5 block text-[11px] uppercase tracking-[2px]"
                      style={{ color: isGold ? "var(--gold)" : "var(--blue)" }}
                    >
                      {t(l.gateTag, lang)}
                    </span>
                    <h3 className="mb-2 text-[32px]" style={{ fontFamily: "Georgia, serif" }}>
                      {l.brandName}
                    </h3>
                    <p className="mb-5 max-w-xs text-[14px] text-white/60">{t(l.gateBlurb, lang)}</p>
                    <div className="flex gap-4 text-[12px] text-white/60">
                      <span>{t(l.areaLabel, lang)}</span>
                      <span>{t(l.hoursShort, lang)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEGMENT CONTROL */}
      <div
        className="sticky top-[70px] z-40 flex justify-center py-6"
        style={{ background: "linear-gradient(var(--background) 60%, transparent)" }}
      >
        <div className="inline-flex gap-1 rounded-full border border-white/20 bg-[var(--panel-2)]/90 p-1 backdrop-blur-md">
          {locationOrder.map((id) => {
            const l = locations[id];
            const isActive = active === id;
            const bg = l.accent === "gold" ? "bg-[var(--gold)] text-black" : "bg-[var(--blue)] text-white";
            return (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={`rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                  isActive ? bg : "text-white/60"
                }`}
              >
                {id === "tbilisi" ? "Tbilisi" : "Zestafoni"}
              </button>
            );
          })}
        </div>
      </div>

      {/* LOCATION PANEL */}
      <div id="locations">
        <section className="px-8 pt-6 pb-20">
          <div className="mx-auto max-w-6xl" data-reveal>
            <div className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar }}>
              {loc.brandName}
            </div>
            <h2 className="max-w-2xl text-[30px] md:text-[44px]" style={{ fontFamily: "Georgia, serif" }}>
              {t(loc.introHeading, lang)}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">{t(loc.introLede, lang)}</p>
            <div className="mt-7 flex flex-wrap gap-7 text-[14px] text-white/60">
              <div>
                <b className="mb-1 block font-medium text-white">{t(ui.addressLabel, lang)}</b>
                {t(loc.address, lang)}
              </div>
              <div>
                <b className="mb-1 block font-medium text-white">{t(ui.phoneLabel, lang)}</b>
                {loc.phones.join(" / ")}
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
            <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar }}>
              {t(ui.includedEyebrow, lang)}
            </div>
            <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "Georgia, serif" }}>
              {t(ui.includedHeading, lang)}
            </h2>
            <div data-reveal className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {loc.services.map((s, i) => {
                const isGold = s.category === "gym";
                return (
                  <div key={i} className="premium-card bg-[var(--panel)] p-9 transition-colors duration-300 hover:bg-[var(--panel-2)]">
                    <span
                      className="mb-4 inline-block rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[2px]"
                      style={{
                        color: isGold ? "var(--gold)" : "var(--blue)",
                        borderColor: isGold ? "rgba(242,195,0,.35)" : "rgba(30,167,255,.35)",
                      }}
                    >
                      {s.category === "gym" ? (lang === "en" ? "Gym" : "დარბაზი") : lang === "en" ? "Pool" : "აუზი"}
                    </span>
                    <h3 className="mb-2.5 text-[22px]" style={{ fontFamily: "Georgia, serif" }}>
                      {t(s.title, lang)}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-white/60">{t(s.desc, lang)}</p>
                  </div>
                );
              })}
              {loc.hotel && (
                <div className="premium-card tone-blue col-span-1 grid grid-cols-1 items-center gap-7 bg-[var(--panel-2)] p-9 sm:col-span-2 lg:col-span-3 lg:grid-cols-2">
                  <div>
                    <span
                      className="mb-4 inline-block rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[2px]"
                      style={{ color: "var(--blue)", borderColor: "rgba(30,167,255,.35)" }}
                    >
                      {lang === "en" ? "Hotel" : "სასტუმრო"}
                    </span>
                    <h3 className="mb-2.5 text-[22px]" style={{ fontFamily: "Georgia, serif" }}>
                      {t(loc.hotel.title, lang)}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-white/60">{t(loc.hotel.desc, lang)}</p>
                  </div>
                  <div className="flex h-[150px] items-center justify-center rounded text-[11px] uppercase tracking-[1.5px] text-white/50" style={{ background: "linear-gradient(135deg,#28282a,#1e1e20)" }}>
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
            <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar }}>
              {t(ui.membershipEyebrow, lang)}
            </div>
            <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "Georgia, serif" }}>
              {t(ui.pricingHeading(loc.hoursShort.en ? { en: loc.id === "tbilisi" ? "Tbilisi" : "Zestafoni", ka: loc.id === "tbilisi" ? "თბილისი" : "ზესტაფონი" } : { en: "", ka: "" }), lang)}
            </h2>
            <div data-reveal className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {loc.pricing.map((p, i) => (
                <div
                  key={i}
                  className="rounded-md border border-white/10 bg-[var(--panel)] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20"
                  style={p.accent ? { borderColor: accentVar } : undefined}
                >
                  <div className="mb-3.5 text-[12px] uppercase tracking-[2px] text-white/60">{t(p.label, lang)}</div>
                  <div className="mb-1 text-[40px]" style={{ fontFamily: "Georgia, serif" }}>
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
            <div
              data-reveal
              className="mt-10 rounded-md border border-dashed p-4 text-[13px] leading-relaxed"
              style={{
                borderColor: loc.accent === "gold" ? "rgba(242,195,0,0.35)" : "rgba(30,167,255,0.35)",
                background: loc.accent === "gold" ? "rgba(242,195,0,0.06)" : "rgba(30,167,255,0.08)",
                color: accentVar,
              }}
            >
              {t(ui.pricingNote, lang)}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="border-y border-white/10 px-8 py-20" style={{ background: "var(--panel-2)" }}>
          <div className="mx-auto max-w-6xl">
            <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar }}>
              {t(ui.galleryEyebrow, lang)}
            </div>
            <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "Georgia, serif" }}>
              {t(ui.galleryHeading(loc.id === "tbilisi" ? { en: "Tbilisi", ka: "თბილისი" } : { en: "Zestafoni", ka: "ზესტაფონი" }), lang)}
            </h2>
            <div data-reveal className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4" style={{ gridAutoRows: "170px" }}>
              {loc.gallery.map((g, i) => (
                <div
                  key={i}
                  className={`gallery-card relative overflow-hidden rounded border border-white/10 ${i === 0 ? "col-span-2 row-span-2" : "col-span-1"}`}
                >
                  <div
                    className="flex h-full items-center justify-center text-[11px] uppercase tracking-[1.5px] text-white/50 transition-transform duration-500 hover:scale-105"
                    style={{ background: "linear-gradient(135deg,#2a2a2c,#1e1e20)" }}
                  >
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
            <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar }}>
              {t(ui.hoursContactEyebrow, lang)}
            </div>
            <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "Georgia, serif" }}>
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
            <div data-reveal className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-md border border-white/10 bg-[var(--panel)] p-8">
              <div className="text-[14px] text-white/60">
                <b className="mb-1 block text-[16px] font-medium text-white">{loc.brandName}</b>
                {t(loc.address, lang)}
              </div>
              <div className="flex items-center gap-3">
                <PrimaryButton tone={loc.accent} href={`tel:${loc.phones[0].replace(/\s/g, "")}`}>
                  {t(ui.navCall, lang)}
                </PrimaryButton>
                <GhostButton href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.brandName)}`}>
                  {t(ui.directions, lang)}
                </GhostButton>
                <SocialLink href={loc.facebook} tone={loc.accent} label={`Facebook — ${loc.brandName}`}>
                  <FacebookIcon className="h-full w-full" />
                </SocialLink>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-8 pb-10 pt-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="text-[17px] tracking-[2px]" style={{ fontFamily: "Georgia, serif" }}>
              BLACK SEA <span style={{ color: "var(--gold)" }}>COMPLEX</span>
            </div>
            <div className="flex items-center gap-6 text-[13px] text-white/60">
              {locationOrder.map((id) => (
                <button key={id} onClick={() => goTo(id, true)}>
                  {id === "tbilisi" ? "Tbilisi" : "Zestafoni"}
                </button>
              ))}
              <div className="flex gap-2.5">
                <SocialLink href={locations.tbilisi.facebook} tone="gold" label="Facebook">
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
    </div>
  );
}
