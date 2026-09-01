"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { SiteContent } from "@/lib/content";

export function Cover({ content }: { content: SiteContent }) {
  const sectionRef = useRef<HTMLElement>(null);

  // Raw pointer position as a 0–1 fraction of the section's box, smoothed
  // with a spring so the light and the parallax trail the cursor gently
  // instead of snapping to it.
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.35);
  const springConfig = { stiffness: 60, damping: 20, mass: 0.4 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const spotlight = useTransform([x, y], ([xv, yv]: number[]) =>
    `radial-gradient(38rem circle at ${xv * 100}% ${yv * 100}%, rgba(255,255,255,0.55), transparent 60%)`
  );
  const logoX = useTransform(x, (v) => (v - 0.5) * 18);
  const logoY = useTransform(y, (v) => (v - 0.5) * 10);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="cover-sky relative flex min-h-svh flex-col justify-between overflow-hidden border-b border-line"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{ backgroundImage: spotlight }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.img
          src="/images/cover-logo-animated.gif"
          alt="Marca animada de Gobe"
          className="w-64 max-w-[65vw] mix-blend-multiply sm:w-[26rem]"
          style={{ x: logoX, y: logoY }}
        />
        <p className="mt-6 font-mono text-sm tracking-[0.02em] text-ink-soft sm:text-base">
          {content.cover.line}
        </p>
      </div>

      <div className="relative border-t-2 border-ink px-6 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-0 gap-y-1">
          {content.cover.creditLabel.map((word, i) => (
            <span
              key={word}
              className={`border-l px-4 font-mono text-[11px] uppercase tracking-[0.08em] first:border-l-0 first:pl-0 ${
                i === 0 ? "font-bold text-garnet" : "border-line text-ink-soft"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce font-mono text-[11px] uppercase tracking-[0.1em] text-navy sm:hidden">
        {content.cover.hint}
      </div>
    </section>
  );
}
