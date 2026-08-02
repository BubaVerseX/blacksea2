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

type Palette = {
  baseGradient: string;
  block1: string;
  block1Opacity: number;
  block2: string;
  block2Opacity: number;
  mark: string;
  markStroke: string;
  markLeft: string;
  markTop: string;
  pane1Bg: string;
  pane1Border: string;
  pane2Bg: string;
  pane2Border: string;
};

const PALETTES: Record<LocationId, Palette> = {
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
