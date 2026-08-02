"use client";

import { useEffect, useRef } from "react";
import type { LocationId } from "./content";

/** Attaches a passive scroll listener that offsets each ref'd layer by
 *  scrollY * its own speed factor — the mark drifts slowest (furthest back),
 *  the color blocks a little faster, the glass panes fastest (closest). */
function useParallax(speeds: number[]) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const apply = () => {
      const y = window.scrollY;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const speed = speeds[i] ?? 0.15;
        el.style.transform = `${el.dataset.baseTransform ?? ""} translate3d(0, ${y * speed}px, 0)`;
      });
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speeds]);

  return refs;
}

// Fixed (non-random) star field — hardcoded so server and client render the
// same markup (Math.random() at render time would cause hydration mismatches).
const STARS = [
  { left: "4%", top: "8%", size: 2, dx: 22, dy: -16, drift: "58s", twinkle: "3.2s", delay: "0s" },
  { left: "12%", top: "34%", size: 1, dx: -18, dy: 20, drift: "72s", twinkle: "2.6s", delay: "0.8s" },
  { left: "21%", top: "62%", size: 2, dx: 26, dy: 14, drift: "64s", twinkle: "3.8s", delay: "1.4s" },
  { left: "29%", top: "12%", size: 1, dx: -20, dy: -22, drift: "80s", twinkle: "2.9s", delay: "0.3s" },
  { left: "37%", top: "80%", size: 2, dx: 18, dy: -20, drift: "66s", twinkle: "3.4s", delay: "2.1s" },
  { left: "45%", top: "26%", size: 1, dx: -24, dy: 18, drift: "74s", twinkle: "2.4s", delay: "1.1s" },
  { left: "52%", top: "54%", size: 2, dx: 20, dy: 24, drift: "60s", twinkle: "3.6s", delay: "0.6s" },
  { left: "60%", top: "8%", size: 1, dx: -16, dy: -18, drift: "70s", twinkle: "2.7s", delay: "1.8s" },
  { left: "67%", top: "70%", size: 2, dx: 24, dy: -14, drift: "56s", twinkle: "3.1s", delay: "0.9s" },
  { left: "74%", top: "40%", size: 1, dx: -22, dy: 16, drift: "78s", twinkle: "2.5s", delay: "2.4s" },
  { left: "81%", top: "18%", size: 2, dx: 18, dy: 22, drift: "62s", twinkle: "3.9s", delay: "0.4s" },
  { left: "88%", top: "62%", size: 1, dx: -20, dy: -16, drift: "68s", twinkle: "2.8s", delay: "1.6s" },
  { left: "93%", top: "32%", size: 2, dx: 16, dy: 20, drift: "76s", twinkle: "3.3s", delay: "1.0s" },
  { left: "8%", top: "88%", size: 1, dx: 20, dy: -18, drift: "82s", twinkle: "2.6s", delay: "2.6s" },
  { left: "18%", top: "48%", size: 1, dx: -18, dy: 20, drift: "58s", twinkle: "3.5s", delay: "0.2s" },
  { left: "56%", top: "88%", size: 1, dx: 22, dy: -20, drift: "64s", twinkle: "2.3s", delay: "1.9s" },
  { left: "40%", top: "6%", size: 1, dx: -16, dy: 18, drift: "72s", twinkle: "3.7s", delay: "0.7s" },
  { left: "97%", top: "84%", size: 2, dx: -20, dy: -22, drift: "60s", twinkle: "3.0s", delay: "1.3s" },
];

export function StarField() {
  return (
    <>
      {STARS.map((s, i) => (
        <div
          key={i}
          className="bg-star"
          style={
            {
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              "--dx": `${s.dx}px`,
              "--dy": `${s.dy}px`,
              "--drift-dur": s.drift,
              "--twinkle-dur": s.twinkle,
              animationDelay: `${s.delay}, ${s.delay}`,
            } as React.CSSProperties
          }
        />
      ))}
    </>
  );
}

export type Palette = {
  baseGradient: string;
  block1: string;
  block1Opacity: number;
  block2: string;
  block2Opacity: number;
  mark: string;
  markStroke: string;
  markLeft: string;
  markTop: string;
  cardMarkSize: string;
  pane1Bg: string;
  pane1Border: string;
  pane2Bg: string;
  pane2Border: string;
};

export const PALETTES: Record<LocationId, Palette> = {
  blacksea1: {
    baseGradient: "linear-gradient(150deg, #081512, #040506)",
    block1: "#00f5d0",
    block1Opacity: 0.13,
    block2: "#00c2ff",
    block2Opacity: 0.07,
    mark: "01",
    markStroke: "rgba(0, 245, 208, 0.16)",
    markLeft: "6%",
    markTop: "54%",
    cardMarkSize: "150px",
    pane1Bg: "rgba(0, 245, 208, 0.05)",
    pane1Border: "rgba(0, 245, 208, 0.15)",
    pane2Bg: "rgba(255, 255, 255, 0.05)",
    pane2Border: "rgba(255, 255, 255, 0.12)",
  },
  blackseakids: {
    baseGradient: "linear-gradient(150deg, #120a17, #040506)",
    block1: "#ff8ad8",
    block1Opacity: 0.12,
    block2: "#7dfff0",
    block2Opacity: 0.07,
    mark: "KIDS",
    markStroke: "rgba(255, 138, 216, 0.2)",
    markLeft: "2%",
    markTop: "58%",
    cardMarkSize: "80px",
    pane1Bg: "rgba(255, 138, 216, 0.06)",
    pane1Border: "rgba(255, 138, 216, 0.16)",
    pane2Bg: "rgba(255, 255, 255, 0.05)",
    pane2Border: "rgba(255, 255, 255, 0.12)",
  },
  zestafoni: {
    baseGradient: "linear-gradient(150deg, #170d08, #040506)",
    block1: "#ff2fb0",
    block1Opacity: 0.11,
    block2: "#facf75",
    block2Opacity: 0.09,
    mark: "HOTEL",
    markStroke: "rgba(250, 199, 117, 0.22)",
    markLeft: "2%",
    markTop: "60%",
    cardMarkSize: "70px",
    pane1Bg: "rgba(255, 47, 176, 0.06)",
    pane1Border: "rgba(255, 47, 176, 0.16)",
    pane2Bg: "rgba(250, 199, 117, 0.06)",
    pane2Border: "rgba(250, 199, 117, 0.16)",
  },
};

export default function LocationBackground({ id }: { id: LocationId }) {
  const p = PALETTES[id];
  // speeds: mark (furthest back) drifts slowest, blocks mid, panes (closest) fastest
  const refs = useParallax([0.04, 0.07, 0.1, 0.16, 0.13]);

  return (
    <div className="loc-bg" aria-hidden="true">
      <div style={{ position: "absolute", inset: 0, background: p.baseGradient }} />

      <StarField />

      <div
        ref={(el) => { refs.current[0] = el; }}
        className="bg-mark"
        style={{ left: p.markLeft, top: p.markTop, WebkitTextStroke: `1px ${p.markStroke}` }}
      >
        {p.mark}
      </div>

      <div
        ref={(el) => { refs.current[1] = el; }}
        className="bg-block"
        style={{
          left: "55%",
          top: "-20%",
          width: "70%",
          height: "140%",
          background: p.block1,
          opacity: p.block1Opacity,
          clipPath: "polygon(0 0, 34% 0, 15% 100%, 0 100%)",
        }}
      />
      <div
        ref={(el) => { refs.current[2] = el; }}
        className="bg-block"
        style={{
          left: "82%",
          top: "10%",
          width: "34%",
          height: "110%",
          background: p.block2,
          opacity: p.block2Opacity,
          clipPath: "polygon(100% 0, 100% 100%, 55% 100%, 78% 0)",
        }}
      />

      <div
        ref={(el) => { refs.current[3] = el; }}
        data-base-transform="rotate(-2deg)"
        className="bg-pane"
        style={{
          left: "58%",
          top: "8%",
          width: "26%",
          height: "46%",
          background: p.pane1Bg,
          border: `1px solid ${p.pane1Border}`,
          transform: "rotate(-2deg)",
        }}
      />
      <div
        ref={(el) => { refs.current[4] = el; }}
        data-base-transform="rotate(2deg)"
        className="bg-pane"
        style={{
          left: "68%",
          top: "34%",
          width: "24%",
          height: "42%",
          background: p.pane2Bg,
          border: `1px solid ${p.pane2Border}`,
          transform: "rotate(2deg)",
        }}
      />
    </div>
  );
}
