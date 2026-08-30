import type { SiteContent } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Home({ content }: { content: SiteContent }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <span className="eyebrow">{content.home.eyebrow}</span>
        <h2 className="mt-3 max-w-[16ch] text-[clamp(28px,4.5vw,48px)]">
          {content.home.heading}
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-8 max-w-[62ch] text-lg text-ink-soft">{content.home.lede}</p>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-12 max-w-none border-t border-line pt-8 font-disp text-[clamp(18px,2.6vw,26px)] font-semibold leading-snug text-ink">
          {content.home.capabilities.map((word, i) => (
            <span key={word}>
              {i > 0 && <span className="mx-2 text-ink-faint sm:mx-3">—</span>}
              {word === "Mentoring" ? <span className="text-garnet">{word}</span> : word}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
