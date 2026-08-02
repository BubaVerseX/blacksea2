"use client";

import { useEffect, useRef } from "react";
import type { LocationId } from "./content";

/** Attaches a passive scroll listener that offsets each ref'd layer by
 *  scrollY * its own speed factor, giving a parallax feel — the fixed
 *  layers seem to drift at a fraction of real scroll speed. */
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
        const speed = speeds[i] ?? 0.3;
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
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

function BlackSeaBg() {
  const refs = useParallax([0.18, 0.32, 0.32, 0.32, 0.22, 0.22]);
  return (
    <div className="loc-bg" aria-hidden="true">
      <div ref={(el) => { refs.current[0] = el; }} className="bg-ring" style={{ left: "18%", top: "28%" }} />
      <div ref={(el) => { refs.current[0] = el; }} className="bg-ring" style={{ left: "18%", top: "28%", animationDelay: "1.6s" }} />
      <div ref={(el) => { refs.current[1] = el; }} className="bg-streak" style={{ top: "16%", width: 260, animationDuration: "5.2s" }} />
      <div ref={(el) => { refs.current[2] = el; }} className="bg-streak" style={{ top: "48%", width: 200, animationDuration: "6.4s", animationDelay: "1.4s" }} />
      <div ref={(el) => { refs.current[3] = el; }} className="bg-streak" style={{ top: "74%", width: 170, animationDuration: "5.8s", animationDelay: "2.6s" }} />
      <div ref={(el) => { refs.current[4] = el; }} className="bg-ring" style={{ right: "12%", bottom: "18%", animationDelay: "0.8s" }} />
      <div ref={(el) => { refs.current[5] = el; }} className="bg-ring" style={{ right: "12%", bottom: "18%", animationDelay: "2.4s" }} />
    </div>
  );
}

function KidsBg() {
  const refs = useParallax([0.15, 0.25, 0.2, 0.28, 0.18, 0.3, 0.22, 0.26]);
  const bubbles = [
    { color: "255,138,216", size: 30, left: "8%", dur: "9s", delay: "0s" },
    { color: "0,245,208", size: 18, left: "20%", dur: "7s", delay: "1.2s" },
    { color: "209,153,255", size: 40, left: "34%", dur: "11s", delay: "2.4s" },
    { color: "255,214,242", size: 16, left: "48%", dur: "8s", delay: "0.6s" },
    { color: "125,255,240", size: 24, left: "62%", dur: "9.5s", delay: "3s" },
    { color: "255,138,216", size: 14, left: "74%", dur: "7.5s", delay: "1.8s" },
    { color: "209,153,255", size: 22, left: "86%", dur: "10s", delay: "0.3s" },
    { color: "0,245,208", size: 32, left: "94%", dur: "8.6s", delay: "2.1s" },
  ];
  return (
    <div className="loc-bg" aria-hidden="true">
      {bubbles.map((b, i) => (
        <div
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          className="bg-bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle, rgba(${b.color},0.55), transparent 72%)`,
            animationDuration: `${b.dur}, ${(parseFloat(b.dur) * 0.55).toFixed(1)}s`,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}

function ZestafoniBg() {
  const refs = useParallax([0.12, 0.16, 0.1, 0.3, 0.34, 0.28, 0.32]);
  const sparkles = [
    { top: "18%", left: "22%", delay: "0s" },
    { top: "62%", left: "12%", delay: "0.7s" },
    { top: "30%", left: "68%", delay: "1.3s" },
    { top: "76%", left: "58%", delay: "0.4s" },
    { top: "48%", left: "84%", delay: "1.8s" },
  ];
  return (
    <div className="loc-bg" aria-hidden="true">
      <div ref={(el) => { refs.current[0] = el; }} className="bg-orb-warm" style={{ left: "-10%", top: "-6%" }} />
      <div ref={(el) => { refs.current[1] = el; }} className="bg-orb-warm bg-orb-warm--gold" style={{ right: "-8%", bottom: "-10%" }} />
      <div ref={(el) => { refs.current[2] = el; }} className="bg-aurora" />
      {sparkles.map((s, i) => (
        <div
          key={i}
          ref={(el) => { refs.current[3 + i] = el; }}
          className="bg-sparkle"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}
    </div>
  );
}

export default function LocationBackground({ id }: { id: LocationId }) {
  if (id === "blackseakids") return <KidsBg />;
  if (id === "zestafoni") return <ZestafoniBg />;
  return <BlackSeaBg />;
}
