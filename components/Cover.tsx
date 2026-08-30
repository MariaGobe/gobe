"use client";

import type { SiteContent } from "@/lib/content";

export function Cover({ content }: { content: SiteContent }) {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden border-b border-line"
      style={{
        background: `linear-gradient(180deg, var(--sky-top) 0%, var(--sky-mid) 62%, var(--paper) 100%)`,
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/cover-logo-animated.gif"
          alt="Marca animada de Gobe"
          className="mb-8 w-40 max-w-[45vw] mix-blend-multiply sm:w-56"
        />
        <h1 className="font-disp text-[13vw] font-extrabold leading-none tracking-tight text-navy sm:text-[8vw]">
          {content.cover.kicker}
        </h1>
        <p className="mt-4 font-body text-lg italic text-ink-soft sm:text-xl">
          {content.cover.line}
        </p>
      </div>

      <div className="border-t-2 border-ink px-6 py-3">
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
