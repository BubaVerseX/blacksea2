"use client";

import { StarField } from "./LocationBackground";

/** The home hub belongs to all three locations, so it gets a neutral base —
 *  a faint whisper of all three accent colors (none dominant) plus the
 *  shared cosmos starfield — rather than committing to one location's palette. */
export default function HomeBackground() {
  return (
    <div className="loc-bg" aria-hidden="true">
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 0%, rgba(0,245,208,0.055), transparent 45%), " +
            "radial-gradient(circle at 82% 8%, rgba(255,138,216,0.045), transparent 45%), " +
            "radial-gradient(circle at 50% 95%, rgba(250,199,117,0.045), transparent 50%), " +
            "linear-gradient(180deg, #050607, #040506)",
        }}
      />
      <StarField />
    </div>
  );
}
