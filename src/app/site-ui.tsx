"use client";

import { Dumbbell, Hotel, Snowflake, Waves } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { type Bi, type Category, type Lang, type LocationContent } from "./content";

export function t(bi: Bi, lang: Lang) {
  return bi[lang];
}

/** Circular badge for the (non-transparent, square-cropped) logo file —
 *  clips it into a ring and adds a themed glow, without touching the
 *  source image. object-cover intentionally overfills so the artwork's
 *  own circular mark reaches the badge edge instead of leaving a visible
 *  square corner peeking out past a smaller inscribed circle. */
export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span className={`logo-badge inline-block shrink-0 overflow-hidden rounded-full ${className}`}>
      <img src="/logo.png" alt="Black Sea" className="h-full w-full scale-[1.14] object-cover" />
    </span>
  );
}

/** Diagonal light-sweep overlay for hover micro-interactions — a real
 *  element (not a pseudo-element) so it can be dropped into cards that
 *  already use ::before/::after for other effects (glow, gradient border)
 *  without clobbering them. Parent needs `group` + `relative overflow-hidden`. */
export function CardShine() {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <span className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover:translate-x-[250%] group-hover:opacity-100" />
    </span>
  );
}

/** Slow, low-opacity rotating conic-gradient ring — a real element (see
 *  CardShine) so it layers cleanly on top of premium-card's own
 *  ::before/::after glow + border-sheen without a pseudo-element clash. */
export function OrbitBorder() {
  return <span aria-hidden className="orbit-border pointer-events-none absolute inset-0 rounded-[inherit]" />;
}

const AMENITY_ICON: Record<Category | "hotel", React.ComponentType<{ className?: string }>> = {
  pool: Waves,
  gym: Dumbbell,
  ice: Snowflake,
  hotel: Hotel,
};

const AMENITY_LABEL: Record<Category | "hotel", Bi> = {
  pool: { en: "Pool", ka: "აუზი" },
  gym: { en: "Gym", ka: "დარბაზი" },
  ice: { en: "Ice Rink", ka: "სრიალის ბანი" },
  hotel: { en: "Hotel", ka: "სასტუმრო" },
};

/** Small pill row on a location card summarising what's inside — derived
 *  straight from the location's services/hotel data, never hand-maintained. */
export function AmenityBadges({ loc, lang }: { loc: LocationContent; lang: Lang }) {
  const categories = Array.from(new Set(loc.services.map((s) => s.category))) as Category[];
  const keys: (Category | "hotel")[] = loc.hotel ? [...categories, "hotel"] : categories;

  return (
    <div className="flex flex-wrap gap-1.5">
      {keys.map((key) => {
        const Icon = AMENITY_ICON[key];
        return (
          <span key={key} className="amenity-badge">
            <Icon className="h-3 w-3" />
            {t(AMENITY_LABEL[key], lang)}
          </span>
        );
      })}
    </div>
  );
}

const LANG_STORAGE_KEY = "blacksea-lang";

export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>("ka");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(LANG_STORAGE_KEY) : null;
    if (stored === "en" || stored === "ka") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(LANG_STORAGE_KEY, l);
  };

  return [lang, setLang];
}

export function useReveal(deps: unknown[]) {
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

export function useTilt(strength = 8) {
  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${y * -strength}deg) rotateY(${x * strength}deg) translateY(-4px)`;
    el.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  };
  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "";
  };
  return { onMouseMove, onMouseLeave };
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className}>
      <circle cx="12" cy="12" r="9.3" />
      <path d="M13.8 21v-7.2h2.3l.4-2.8h-2.7v-1.8c0-.8.2-1.4 1.4-1.4h1.4V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2h-2.4v2.8h2.4V21" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SocialLink({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)]"
    >
      <span className="h-4 w-4">{children}</span>
    </a>
  );
}

export function PrimaryButton({ children, ...props }: React.ComponentPropsWithoutRef<"a">) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.3}px)`;
  };
  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <a
      {...props}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: "transform 200ms cubic-bezier(0.16,1,0.3,1), box-shadow 300ms ease, border-color 300ms ease" }}
      className="premium-button inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border px-6 py-3 text-[13px] font-semibold tracking-wide text-black transition-all duration-300 bg-[var(--accent)] border-transparent hover:-translate-y-px hover:shadow-[0_0_28px_rgba(var(--accent-rgb),0.45)]"
    >
      {children}
    </a>
  );
}

export function GhostButton({ children, ...props }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-[rgba(var(--accent-rgb),0.35)] px-6 py-3 text-[13px] tracking-wide text-white transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.25)]"
    >
      {children}
    </a>
  );
}

export function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex gap-1.5 text-[12px] text-white/60">
      <span
        onClick={() => setLang("en")}
        className={`cursor-pointer rounded px-1.5 py-0.5 ${lang === "en" ? "border border-white/20 text-white" : ""}`}
      >
        EN
      </span>
      <span>|</span>
      <span
        onClick={() => setLang("ka")}
        className={`cursor-pointer rounded px-1.5 py-0.5 ${lang === "ka" ? "border border-white/20 text-white" : ""}`}
      >
        KA
      </span>
    </div>
  );
}
