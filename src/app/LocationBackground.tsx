"use client";

import { useEffect, useRef } from "react";
import type { LocationId } from "./content";

/** Attaches a passive scroll listener that offsets each ref'd wrapper by
 *  scrollY * its own speed factor, giving a parallax feel — different layers
 *  drift at different fractions of real scroll speed. Each wrapper spans the
 *  full background (inset: 0) purely so it can carry the JS transform; the
 *  CSS-animated child inside keeps its original percentage-based position.
 *  This split is necessary because a running CSS animation on `transform`
 *  silently overrides any inline transform set directly on the same element. */
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

function Layer({
  parallaxRef,
  children,
}: {
  parallaxRef: (el: HTMLDivElement | null) => void;
  children: React.ReactNode;
}) {
  return (
    <div ref={parallaxRef} style={{ position: "absolute", inset: 0 }}>
      {children}
    </div>
  );
}

function BlackSeaBg() {
  const refs = useParallax([0.14, 0.14, 0.32, 0.36, 0.3]);
  return (
    <div className="loc-bg" aria-hidden="true">
      <Layer parallaxRef={(el) => { refs.current[0] = el; }}>
        <div className="bg-ring" style={{ left: "18%", top: "28%" }} />
        <div className="bg-ring" style={{ left: "18%", top: "28%", animationDelay: "1.6s" }} />
      </Layer>
      <Layer parallaxRef={(el) => { refs.current[1] = el; }}>
        <div className="bg-ring" style={{ right: "12%", bottom: "18%", animationDelay: "0.8s" }} />
        <div className="bg-ring" style={{ right: "12%", bottom: "18%", animationDelay: "2.4s" }} />
      </Layer>
      <Layer parallaxRef={(el) => { refs.current[2] = el; }}>
        <div className="bg-streak" style={{ top: "16%", width: 260, animationDuration: "5.2s" }} />
      </Layer>
      <Layer parallaxRef={(el) => { refs.current[3] = el; }}>
        <div className="bg-streak" style={{ top: "48%", width: 200, animationDuration: "6.4s", animationDelay: "1.4s" }} />
      </Layer>
      <Layer parallaxRef={(el) => { refs.current[4] = el; }}>
        <div className="bg-streak" style={{ top: "74%", width: 170, animationDuration: "5.8s", animationDelay: "2.6s" }} />
      </Layer>
    </div>
  );
}

function KidsBg() {
  const bubbles = [
    { color: "255,138,216", size: 30, left: "8%", dur: "9s", delay: "0s", speed: 0.14 },
    { color: "0,245,208", size: 18, left: "20%", dur: "7s", delay: "1.2s", speed: 0.32 },
    { color: "209,153,255", size: 40, left: "34%", dur: "11s", delay: "2.4s", speed: 0.1 },
    { color: "255,214,242", size: 16, left: "48%", dur: "8s", delay: "0.6s", speed: 0.36 },
    { color: "125,255,240", size: 24, left: "62%", dur: "9.5s", delay: "3s", speed: 0.2 },
    { color: "255,138,216", size: 14, left: "74%", dur: "7.5s", delay: "1.8s", speed: 0.38 },
    { color: "209,153,255", size: 22, left: "86%", dur: "10s", delay: "0.3s", speed: 0.22 },
    { color: "0,245,208", size: 32, left: "94%", dur: "8.6s", delay: "2.1s", speed: 0.16 },
  ];
  const refs = useParallax(bubbles.map((b) => b.speed));
  return (
    <div className="loc-bg" aria-hidden="true">
      {bubbles.map((b, i) => (
        <Layer key={i} parallaxRef={(el) => { refs.current[i] = el; }}>
          <div
            className="bg-bubble"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              background: `radial-gradient(circle, rgba(${b.color},0.8), transparent 72%)`,
              animationDuration: `${b.dur}, ${(parseFloat(b.dur) * 0.55).toFixed(1)}s`,
              animationDelay: b.delay,
            }}
          />
        </Layer>
      ))}
    </div>
  );
}

function ZestafoniBg() {
  const sparkles = [
    { top: "18%", left: "22%", delay: "0s" },
    { top: "62%", left: "12%", delay: "0.7s" },
    { top: "30%", left: "68%", delay: "1.3s" },
    { top: "76%", left: "58%", delay: "0.4s" },
    { top: "48%", left: "84%", delay: "1.8s" },
  ];
  const refs = useParallax([0.12, 0.16, 0.1, 0.3, 0.34, 0.28, 0.32]);
  return (
    <div className="loc-bg" aria-hidden="true">
      <Layer parallaxRef={(el) => { refs.current[0] = el; }}>
        <div className="bg-orb-warm" style={{ left: "-10%", top: "-6%" }} />
      </Layer>
      <Layer parallaxRef={(el) => { refs.current[1] = el; }}>
        <div className="bg-orb-warm bg-orb-warm--gold" style={{ right: "-8%", bottom: "-10%" }} />
      </Layer>
      <Layer parallaxRef={(el) => { refs.current[2] = el; }}>
        <div className="bg-aurora" />
      </Layer>
      {sparkles.map((s, i) => (
        <Layer key={i} parallaxRef={(el) => { refs.current[3 + i] = el; }}>
          <div className="bg-sparkle" style={{ top: s.top, left: s.left, animationDelay: s.delay }} />
        </Layer>
      ))}
    </div>
  );
}

export default function LocationBackground({ id }: { id: LocationId }) {
  if (id === "blackseakids") return <KidsBg />;
  if (id === "zestafoni") return <ZestafoniBg />;
  return <BlackSeaBg />;
}
