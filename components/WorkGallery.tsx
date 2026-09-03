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

const PAGE_SIZE = 6;

export function WorkGallery({
  id,
  locale,
  eyebrow,
  heading,
  lede,
  items,
  allLabel = "Todos",
  loadMoreLabel = "Cargar más",
}: {
  id?: string;
  locale: string;
  eyebrow: string;
  heading: string;
  lede: string;
  items: WorkItem[];
  allLabel?: string;
  loadMoreLabel?: string;
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const availableTags = useMemo(() => {
    const present = new Set(items.flatMap((item) => item.tags ?? []));
    return TAG_ORDER.filter((tag) => present.has(tag));
  }, [items]);

  const filtered = activeTag ? items.filter((item) => item.tags?.includes(activeTag)) : items;
  const visible = filtered.slice(0, visibleCount);

  function selectTag(tag: string | null) {
    setActiveTag(tag);
    setVisibleCount(PAGE_SIZE);
  }

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
              onClick={() => selectTag(null)}
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
                onClick={() => selectTag(tag)}
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
        {visible.map((item, i) => (
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
                <Link href={`/${locale}/work/${item.slug}`} className="group inline-block">
                  <h3 className="font-disp text-[clamp(19px,2.4vw,23px)] transition-colors group-hover:text-navy">
                    {item.title}
                  </h3>
                </Link>
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-2 py-1 text-[10px] uppercase tracking-[0.06em] text-navy"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-5">
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

      {visibleCount < filtered.length && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="rounded-full border border-line px-6 py-2.5 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-soft transition-colors hover:border-navy hover:text-navy"
          >
            {loadMoreLabel}
          </button>
        </div>
      )}
    </section>
  );
}
