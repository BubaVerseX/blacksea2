"use client";

import { useEffect, useRef, useState } from "react";
import { type Bi, type Lang } from "./content";

export function t(bi: Bi, lang: Lang) {
  return bi[lang];
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
  tone,
  children,
  label,
}: {
  href: string;
  tone: "gold" | "blue";
  children: React.ReactNode;
  label: string;
}) {
  const hoverClass =
    tone === "gold" ? "hover:text-[var(--gold)] hover:border-[var(--gold)]" : "hover:text-[var(--blue)] hover:border-[var(--blue)]";
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

export function PrimaryButton({
  tone,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { tone: "gold" | "blue" }) {
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

export function GhostButton({ children, ...props }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-[rgba(0,245,208,0.35)] px-6 py-3 text-[13px] tracking-wide text-white transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(0,245,208,0.25)]"
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
