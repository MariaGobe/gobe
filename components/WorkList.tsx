import Link from "next/link";
import type { WorkItem } from "@/lib/content";
import { Reveal } from "./Reveal";

export function WorkList({
  id,
  locale,
  eyebrow,
  heading,
  lede,
  items,
}: {
  id?: string;
  locale: string;
  eyebrow: string;
  heading: string;
  lede: string;
  items: WorkItem[];
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-3 max-w-[22ch] text-[clamp(26px,4vw,40px)]">{heading}</h2>
        <p className="mt-4 max-w-[60ch] text-ink-soft">{lede}</p>
      </Reveal>

      <div className="mt-14 divide-y divide-line border-y border-line">
        {items.map((item, i) => (
          <Reveal key={item.idx} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-[3rem_1fr_16rem] sm:gap-10">
              <div className="font-mono text-xs text-ink-faint">
                {item.idx}
                <div className="mt-2 inline-block rounded-full border border-line px-2 py-1 text-[10px] uppercase tracking-[0.06em] text-navy sm:mt-3 sm:block sm:w-fit">
                  {item.stamp}
                </div>
              </div>
              <div>
                <Link href={`/${locale}/work/${item.slug}`} className="group inline-block">
                  <h3 className="font-disp text-[clamp(22px,3vw,30px)] transition-colors group-hover:text-navy">
                    {item.title}
                  </h3>
                </Link>
                <p className="mt-2 max-w-[56ch] text-[14.5px] text-ink-soft">
                  {item.description}
                </p>
                <div className="mt-3 font-mono text-[13.5px] leading-relaxed text-navy">
                  → {item.treatment}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
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
              <Link
                href={`/${locale}/work/${item.slug}`}
                className="order-first flex items-center justify-center overflow-hidden rounded-sm border border-line bg-paper-raised sm:order-none"
              >
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full max-h-56 w-full object-cover sm:max-h-none"
                  />
                ) : (
                  <div className="p-6 text-center font-mono text-[11px] uppercase tracking-[0.06em] text-ink-faint">
                    {item.imageAlt || "—"}
                  </div>
                )}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
