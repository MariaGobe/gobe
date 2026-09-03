"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { WorkItem } from "@/lib/content";
import { Reveal } from "./Reveal";

// Canonical vocabulary, in display order — matches the capabilities line
// used elsewhere on the site so filter tags stay consistent as the
// portfolio grows.
const TAG_ORDER = [
  "Branding",
  "Digital",
  "Graphic Design",
  "Web",
  "Apps",
  "AI",
  "Mentoring",
  "Better processes",
];

function firstParagraph(text: string) {
  return text.split("\n\n")[0];
}

export function WorkGallery({
  id,
  locale,
  eyebrow,
  heading,
  lede,
  items,
  allLabel = "Todos",
}: {
  id?: string;
  locale: string;
  eyebrow: string;
  heading: string;
  lede: string;
  items: WorkItem[];
  allLabel?: string;
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const availableTags = useMemo(() => {
    const present = new Set(items.flatMap((item) => item.tags ?? []));
    return TAG_ORDER.filter((tag) => present.has(tag));
  }, [items]);

  const filtered = activeTag ? items.filter((item) => item.tags?.includes(activeTag)) : items;

  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-3 max-w-[22ch] text-[clamp(26px,4vw,40px)]">{heading}</h2>
        <p className="mt-4 max-w-[60ch] text-ink-soft">{lede}</p>
      </Reveal>

      {availableTags.length > 1 && (
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={`rounded-full border px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.06em] transition-colors ${
                activeTag === null
                  ? "border-navy bg-navy text-paper"
                  : "border-line text-ink-soft hover:border-navy hover:text-navy"
              }`}
            >
              {allLabel}
            </button>
            {availableTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.06em] transition-colors ${
                  activeTag === tag
                    ? "border-navy bg-navy text-paper"
                    : "border-line text-ink-soft hover:border-navy hover:text-navy"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>
      )}

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <Reveal key={item.idx} delay={(i % 6) * 0.05}>
            <div className="flex h-full flex-col overflow-hidden rounded-sm border border-line">
              <Link
                href={`/${locale}/work/${item.slug}`}
                className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-paper-raised"
              >
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="p-6 text-center font-mono text-[11px] uppercase tracking-[0.06em] text-ink-faint">
                    {item.imageAlt || "—"}
                  </div>
                )}
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between font-mono text-xs text-ink-faint">
                  <span>{item.idx}</span>
                  <span className="rounded-full border border-line px-2 py-1 text-[10px] uppercase tracking-[0.06em] text-navy">
                    {item.stamp}
                  </span>
                </div>
                <Link href={`/${locale}/work/${item.slug}`} className="group mt-3 inline-block">
                  <h3 className="font-disp text-[clamp(19px,2.4vw,23px)] transition-colors group-hover:text-navy">
                    {item.title}
                  </h3>
                </Link>
                <p className="mt-2 flex-1 text-[14px] text-ink-soft">
                  {firstParagraph(item.description)}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  <Link
                    href={`/${locale}/work/${item.slug}`}
                    className="font-mono text-[12px] uppercase tracking-[0.06em] text-ink underline decoration-line underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
                  >
                    Ver caso →
                  </Link>
                  {item.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                      className="font-mono text-[12px] uppercase tracking-[0.06em] text-ink underline decoration-line underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
