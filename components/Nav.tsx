"use client";

import { useState } from "react";
import Link from "next/link";
import type { SiteContent } from "@/lib/content";

export function Nav({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);
  const base = `/${content.locale}`;

  const links = [
    { href: `${base}#work`, label: content.nav.work, n: "01" },
    { href: `${base}#studio`, label: content.nav.studio, n: "02" },
    { href: `${base}#talk`, label: content.nav.talk, n: "03" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`${base}#top`}
          className="font-disp text-lg font-extrabold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {content.nav.logo}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 font-mono text-[12px] uppercase tracking-[0.08em] text-ink sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-navy">
              <span className="mr-1 text-navy">{l.n}</span>
              {l.label}
            </a>
          ))}
          <Link
            href={content.nav.switchTo.href}
            className="rounded-full border border-line px-3 py-1 text-ink-soft transition-colors hover:border-navy hover:text-navy"
          >
            {content.nav.switchTo.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] sm:hidden"
        >
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-line px-6 py-6 font-mono text-sm uppercase tracking-[0.06em] sm:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 text-ink"
              >
                <span className="text-navy">{l.n}</span>
                {l.label}
              </a>
            ))}
            <Link
              href={content.nav.switchTo.href}
              className="mt-2 w-fit rounded-full border border-line px-3 py-1 text-[12px] text-ink-soft"
            >
              {content.nav.switchTo.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
