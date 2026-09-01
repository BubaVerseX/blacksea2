"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch devices
    const el = dot.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
    };
    const grow = () => el.classList.add("cursor-hover");
    const shrink = () => el.classList.remove("cursor-hover");
    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [role='button']").forEach((n) => {
      n.addEventListener("mouseenter", grow);
      n.addEventListener("mouseleave", shrink);
    });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={dot} className="app-cursor" />;
}
