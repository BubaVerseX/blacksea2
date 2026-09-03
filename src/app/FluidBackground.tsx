"use client";

import { useEffect, useRef } from "react";

type Blob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  speed: number;
  colorVar: "--accent-rgb" | "--accent-2-rgb";
  alpha: number;
};

/** Ambient canvas layer — a handful of soft, blurred color blobs that ease
 *  toward the pointer (or drift on their own with no pointer / reduced
 *  motion) and are read back in the current section's --accent-rgb /
 *  --accent-2-rgb, so the same component re-themes itself per location
 *  without any props. Painted with mix-blend-mode: screen (see .fluid-canvas
 *  in globals.css) so it only ever adds light on top of the dark backdrop. */
export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pointer = { x: width / 2, y: height / 2, active: false };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    if (hasPointer) window.addEventListener("mousemove", onMove, { passive: true });

    const blobs: Blob[] = [
      { x: width * 0.3, y: height * 0.35, vx: 0, vy: 0, radius: 0.34, speed: 0.05, colorVar: "--accent-rgb", alpha: 0.32 },
      { x: width * 0.68, y: height * 0.5, vx: 0, vy: 0, radius: 0.26, speed: 0.035, colorVar: "--accent-2-rgb", alpha: 0.24 },
      { x: width * 0.5, y: height * 0.7, vx: 0.4, vy: 0.3, radius: 0.2, speed: 0.02, colorVar: "--accent-rgb", alpha: 0.18 },
    ];

    let raf = 0;
    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const styles = getComputedStyle(canvas);

      blobs.forEach((b, i) => {
        if (pointer.active && hasPointer && !reduced) {
          const targetX = pointer.x + (i === 0 ? 0 : i === 1 ? 80 : -60);
          const targetY = pointer.y + (i === 0 ? 0 : i === 1 ? -40 : 90);
          b.x += (targetX - b.x) * b.speed;
          b.y += (targetY - b.y) * b.speed;
        } else if (!reduced) {
          // gentle autonomous drift for touch / no-pointer contexts
          b.x = width * (0.35 + i * 0.15) + Math.sin(angle * (0.5 + i * 0.2)) * width * 0.12;
          b.y = height * (0.4 + i * 0.1) + Math.cos(angle * (0.4 + i * 0.15)) * height * 0.12;
        }

        const rgb = styles.getPropertyValue(b.colorVar).trim() || "0, 242, 254";
        const r = Math.max(width, height) * b.radius;
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r);
        gradient.addColorStop(0, `rgba(${rgb}, ${b.alpha})`);
        gradient.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      angle += 0.0025;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (hasPointer) window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="fluid-canvas" aria-hidden="true" />;
}
