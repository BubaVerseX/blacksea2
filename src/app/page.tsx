"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  type Bi,
  type IconKind,
  type Lang,
  type LocationId,
  instagramUrl,
  locationOrder,
  locations,
  ui,
} from "./content";

const ICON_STYLE: Record<IconKind, { bg: string; fg: string }> = {
  wave: { bg: "rgba(255,47,176,0.16)", fg: "#ff6fd4" },
  aqua: { bg: "rgba(176,38,255,0.18)", fg: "#c084fc" },
  kids: { bg: "rgba(255,230,0,0.18)", fg: "#ffe600" },
  dumbbell: { bg: "rgba(0,245,208,0.18)", fg: "#5cf5df" },
  crossfit: { bg: "rgba(255,47,110,0.18)", fg: "#ff6f9c" },
  aerobics: { bg: "rgba(176,38,255,0.18)", fg: "#c084fc" },
  hotel: { bg: "rgba(255,47,176,0.16)", fg: "#ff6fd4" },
};

const TINT_GRADIENT: Record<string, string> = {
  gold: "linear-gradient(135deg,rgba(0,245,208,0.3),#08090c)",
  blue: "linear-gradient(135deg,rgba(255,47,176,0.3),#08090c)",
  teal: "linear-gradient(135deg,rgba(176,38,255,0.3),#08090c)",
  coral: "linear-gradient(135deg,rgba(255,230,0,0.3),#08090c)",
};

function ServiceIcon({ kind, className }: { kind: IconKind; className?: string }) {
  const c = className || "h-full w-full";
  switch (kind) {
    case "wave":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={c}>
          <path d="M2 17c1.6 1.6 3.2 1.6 4.8 0s3.2-1.6 4.8 0 3.2 1.6 4.8 0 3.2-1.6 4.8 0" />
          <path d="M2 12c1.6 1.6 3.2 1.6 4.8 0s3.2-1.6 4.8 0 3.2 1.6 4.8 0 3.2-1.6 4.8 0" />
        </svg>
      );
    case "aqua":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={c}>
          <path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
        </svg>
      );
    case "kids":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={c}>
          <circle cx="12" cy="6" r="2.4" />
          <path d="M6 21c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5M9 12l3 1 3-1" />
        </svg>
      );
    case "dumbbell":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={c}>
          <path d="M4 9v6M2 10.5v3M20 9v6M22 10.5v3M7 12h10" />
        </svg>
      );
    case "crossfit":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={c}>
          <circle cx="7" cy="15" r="3" />
          <path d="M9.5 12.5 15 7M17 5l2 2-2 2-2-2 2-2Z" />
        </svg>
      );
    case "aerobics":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={c}>
          <circle cx="12" cy="4.5" r="2" />
          <path d="M12 7v6l4 4M12 13l-4 4M8 9l4 1 4-1" />
        </svg>
      );
    case "hotel":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={c}>
          <path d="M3 20V9l7-4 7 4v11M3 20h18M8 20v-5h5v5" />
        </svg>
      );
  }
}

function tiltHandlers() {
  return {
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)";
    },
  };
}

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

function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.min(100, (scrolled / max) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return pct;
}

function AnimatedNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1200;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(value * eased);
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
    </span>
  );
}

function StaggerWords({ text, step = 70 }: { text: string; step?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span
          key={`${i}-${w}`}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${i * step}ms`, display: "inline-block" }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

function useActiveSection(ids: string[], deps: unknown[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return active;
}

function glowHandlers(color: string) {
  return {
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
      e.currentTarget.style.setProperty("--glow-color", color);
    },
  };
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
  const bg = tone === "gold" ? "bg-[var(--gold)] text-black" : "bg-[var(--blue)] text-black";
  return (
    <a
      {...props}
      className={`premium-button inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border px-6 py-3 text-[13px] font-semibold tracking-wide transition-all duration-300 ${bg} border-transparent hover:-translate-y-px hover:shadow-[0_0_28px_rgba(0,245,208,0.45)]`}
    >
      {children}
    </a>
  );
}

function GhostButton({ children, ...props }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-[rgba(0,245,208,0.35)] px-6 py-3 text-[13px] tracking-wide text-white transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(0,245,208,0.25)]"
    >
      {children}
    </a>
  );
}

const PARTICLES = Array.from({ length: 10 }).map((_, i) => ({
  left: `${(i * 9.7) % 100}%`,
  top: `${(i * 17.3) % 100}%`,
  size: 2 + (i % 3),
  delay: `${(i * 0.7).toFixed(1)}s`,
}));

export default function Page() {
  const [lang, setLang] = useState<Lang>("ka");
  const [active, setActive] = useState<LocationId>("tbilisi");
  const [scrolled, setScrolled] = useState(false);
  const revealRef = useReveal([active, lang]);
  const progress = useScrollProgress();

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
  const glowColor = loc.accent === "gold" ? "rgba(0,245,208,0.24)" : "rgba(255,47,176,0.24)";
  const totalPools = useMemo(() => locations.tbilisi.poolCount + locations.zestafoni.poolCount, []);
  const railSections = ["hero", "included", "pricing", "gallery", "contact"];
  const activeSection = useActiveSection(railSections, [active]);

  return (
    <div ref={revealRef} className="relative">
      <div className="aurora-field">
        <div className="aurora-blob gold" />
        <div className="aurora-blob blue" />
        <div className="aurora-blob teal" />
        <div className="aurora-beam" />
      </div>
      <div className="cine-vignette" />
      <div className="progress-bar" style={{ width: `${progress}%`, background: accentVar }} />

      <div className="scroll-rail" style={{ ["--rail-color" as string]: accentVar }}>
        {railSections.map((id) => (
          <button
            key={id}
            aria-label={id}
            className={activeSection === id ? "active" : ""}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
          />
        ))}
      </div>

      {/* NAV */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-[var(--background)]/75 py-3.5 backdrop-blur-xl" : "border-b border-transparent py-5.5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8">
          <div className="whitespace-nowrap text-[16px] tracking-[2.5px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            BLACK SEA <span style={{ color: "var(--gold)", textShadow: "0 0 10px currentColor" }}>COMPLEX</span>
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
                className={`cursor-pointer rounded px-1.5 py-0.5 transition-all duration-300 ${lang === "en" ? "border border-white/20 text-white" : ""}`}
              >
                {ui.langEn}
              </span>
              <span>|</span>
              <span
                onClick={() => setLang("ka")}
                className={`cursor-pointer rounded px-1.5 py-0.5 transition-all duration-300 ${lang === "ka" ? "border border-white/20 text-white" : ""}`}
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
      <section id="hero" className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-8 pb-16 pt-32 text-center">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: i % 2 === 0 ? "rgba(0,245,208,0.65)" : "rgba(255,47,176,0.65)",
              animationDelay: p.delay,
            }}
          />
        ))}
        <div className="mx-auto max-w-6xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-[11px] uppercase tracking-[2px] text-white/60">
            {t(ui.heroBadge, lang)}
          </span>
          <h1
            className="gradient-text mx-auto max-w-4xl text-[38px] leading-[1.08] tracking-wide md:text-[68px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            <StaggerWords text={t(ui.heroTitle, lang)} step={90} />
          </h1>
          <p data-reveal style={{ ["--reveal-delay" as string]: "280ms" }} className="mx-auto mt-5 max-w-md text-[16px] text-white/60">
            {t(ui.heroSub, lang)}
          </p>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {locationOrder.map((id) => {
              const l = locations[id];
              const isGold = l.accent === "gold";
              return (
                <div
                  key={id}
                  onClick={() => goTo(id, true)}
                  className="gate-card tilt-card group relative h-[440px] cursor-pointer overflow-hidden rounded-md border border-white/10 text-left"
                  style={{ background: "linear-gradient(150deg,var(--panel),var(--background))" }}
                  {...tiltHandlers()}
                >
                  <div
                    className="gate-bg absolute inset-0 transition-transform duration-700"
                    style={{
                      background: isGold
                        ? "radial-gradient(circle at 30% 20%, rgba(0,245,208,0.22), transparent 55%), linear-gradient(160deg,var(--panel),var(--background))"
                        : "radial-gradient(circle at 70% 30%, rgba(255,47,176,0.22), transparent 55%), linear-gradient(160deg,var(--panel),var(--background))",
                    }}
                  />
                  <div className={isGold ? "gold-sheen" : "water-lines"} />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 30%, rgba(27,27,29,0.92) 100%)" }}
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
        <svg
          className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth={1.6}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </section>

      {/* AMENITY TICKER */}
      <div className="ticker-strip border-y border-white/10 py-4" style={{ background: "var(--panel)" }}>
        <div className="ticker-track">
          {Array.from({ length: 2 }).flatMap((_, rep) =>
            loc.tickerItems.map((item, i) => (
              <span key={`${rep}-${i}`} className="flex shrink-0 items-center gap-6 pr-6 text-[12px] uppercase tracking-[2px]">
                <span style={{ color: i % 2 === 0 ? accentVar : "rgba(255,255,255,0.75)", textShadow: i % 2 === 0 ? "0 0 8px currentColor" : "none" }}>{t(item, lang)}</span>
                <span className="text-white/25">·</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* TRUST STATS */}
      <section className="border-y border-white/10 px-8 py-12" style={{ background: "var(--panel)" }}>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div data-reveal>
            <div className="text-[34px] font-medium" style={{ fontFamily: "var(--font-head)", color: accentVar }}>
              <AnimatedNumber value={loc.rating} decimals={2} />
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[1.5px] text-white/50">{t(ui.statRating, lang)}</div>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            <div className="text-[34px] font-medium" style={{ fontFamily: "var(--font-head)" }}>
              <AnimatedNumber value={loc.reviewCount} />+
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[1.5px] text-white/50">{t(ui.statReviews, lang)}</div>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "160ms" }}>
            <div className="text-[34px] font-medium" style={{ fontFamily: "var(--font-head)" }}>
              <AnimatedNumber value={loc.poolCount} />
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[1.5px] text-white/50">{t(ui.statPools, lang)}</div>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "240ms" }}>
            <div className="text-[34px] font-medium" style={{ fontFamily: "var(--font-head)" }}>
              <AnimatedNumber value={totalPools} />
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[1.5px] text-white/50">{lang === "en" ? "Pools total" : "სულ აუზი"}</div>
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
            const bg = l.accent === "gold" ? "bg-[var(--gold)] text-black" : "bg-[var(--blue)] text-black";
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
      <div id="locations" key={active} className="panel-fade">
        <section className="px-8 pt-6 pb-20">
          <div className="mx-auto max-w-6xl" data-reveal>
            <div className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar, textShadow: "0 0 10px currentColor" }}>
              {loc.brandName}
            </div>
            <h2 className="max-w-2xl text-[30px] md:text-[44px]" style={{ fontFamily: "var(--font-head)" }}>
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
        <section id="included" className="relative overflow-hidden border-y border-white/10 px-8 py-20" style={{ background: "var(--panel-2)" }}>
          <div className={loc.accent === "gold" ? "gold-sheen" : "water-lines"} style={{ opacity: 0.25 }} />
          <div className="relative mx-auto max-w-6xl">
            <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar, textShadow: "0 0 10px currentColor" }}>
              {t(ui.includedEyebrow, lang)}
            </div>
            <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "var(--font-head)" }}>
              {t(ui.includedHeading, lang)}
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {loc.services.map((s, i) => {
                const style = ICON_STYLE[s.icon];
                return (
                  <div
                    key={i}
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                    className="premium-card card-glow bg-[var(--panel)] p-9 transition-colors duration-300 hover:bg-[var(--panel-2)]"
                    {...glowHandlers(style.bg.replace("0.16", "0.22").replace("0.18", "0.22"))}
                  >
                    <div className="icon-badge mb-5 h-12 w-12 p-3" style={{ background: style.bg, color: style.fg }}>
                      <ServiceIcon kind={s.icon} />
                    </div>
                    <h3 className="mb-2.5 text-[22px]" style={{ fontFamily: "var(--font-head)" }}>
                      {t(s.title, lang)}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-white/60">{t(s.desc, lang)}</p>
                  </div>
                );
              })}
              {loc.hotel && (
                <div
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${loc.services.length * 70}ms` }}
                  className="premium-card tone-blue card-glow col-span-1 grid grid-cols-1 items-center gap-7 bg-[var(--panel-2)] p-9 sm:col-span-2 lg:col-span-3 lg:grid-cols-2"
                  {...glowHandlers("rgba(255,47,176,0.24)")}
                >
                  <div>
                    <div className="icon-badge mb-5 h-12 w-12 p-3" style={{ background: "rgba(255,47,176,0.16)", color: "#ff6fd4" }}>
                      <ServiceIcon kind="hotel" />
                    </div>
                    <h3 className="mb-2.5 text-[22px]" style={{ fontFamily: "var(--font-head)" }}>
                      {t(loc.hotel.title, lang)}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-white/60">{t(loc.hotel.desc, lang)}</p>
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
        <section id="pricing" className="px-8 py-20">
          <div className="mx-auto max-w-6xl">
            <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar, textShadow: "0 0 10px currentColor" }}>
              {t(ui.membershipEyebrow, lang)}
            </div>
            <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "var(--font-head)" }}>
              {t(ui.pricingHeading(loc.id === "tbilisi" ? { en: "Tbilisi", ka: "თბილისი" } : { en: "Zestafoni", ka: "ზესტაფონი" }), lang)}
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {loc.pricing.map((p, i) => (
                <div
                  key={i}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 90}ms`, ...(p.accent ? { borderColor: accentVar } : {}) }}
                  className="card-glow relative overflow-hidden rounded-md border border-white/10 bg-[var(--panel)] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20"
                  {...glowHandlers(glowColor)}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(90deg,#c084fc,transparent)"
                          : i === 1
                            ? "linear-gradient(90deg,var(--gold),var(--blue))"
                            : "linear-gradient(90deg,#ffe600,transparent)",
                    }}
                  />
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
            <div
              data-reveal
              className="mt-10 rounded-md border border-dashed p-4 text-[13px] leading-relaxed"
              style={{
                borderColor: loc.accent === "gold" ? "rgba(0,245,208,0.4)" : "rgba(255,47,176,0.4)",
                background: loc.accent === "gold" ? "rgba(0,245,208,0.07)" : "rgba(255,47,176,0.08)",
                color: accentVar,
                textShadow: "0 0 8px currentColor",
              }}
            >
              {t(ui.pricingNote, lang)}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="border-y border-white/10 px-8 py-20" style={{ background: "var(--panel-2)" }}>
          <div className="mx-auto max-w-6xl">
            <div data-reveal className="mb-4 text-[12px] uppercase tracking-[3px]" style={{ color: accentVar, textShadow: "0 0 10px currentColor" }}>
              {t(ui.galleryEyebrow, lang)}
            </div>
            <h2 data-reveal className="max-w-2xl text-[28px] md:text-[42px]" style={{ fontFamily: "var(--font-head)" }}>
              {t(ui.galleryHeading(loc.id === "tbilisi" ? { en: "Tbilisi", ka: "თბილისი" } : { en: "Zestafoni", ka: "ზესტაფონი" }), lang)}
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4" style={{ gridAutoRows: "170px" }}>
              {loc.gallery.map((g, i) => (
                <div
                  key={i}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                  className={`gallery-card relative overflow-hidden rounded border border-white/10 ${i === 0 ? "col-span-2 row-span-2" : "col-span-1"}`}
                >
                  <div
                    className="flex h-full items-center justify-center text-[11px] uppercase tracking-[1.5px] text-white/60 transition-transform duration-500 hover:scale-105"
                    style={{ background: TINT_GRADIENT[g.tint] }}
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
            <div className="text-[15px] tracking-[2px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              BLACK SEA <span style={{ color: "var(--gold)", textShadow: "0 0 10px currentColor" }}>COMPLEX</span>
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
