import type { SiteContent } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Talk({ id, content }: { id?: string; content: SiteContent }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <span className="eyebrow">{content.talk.eyebrow}</span>
        <h2 className="mt-3 max-w-[22ch] text-[clamp(26px,4vw,40px)]">{content.talk.heading}</h2>
        <p className="mt-4 max-w-[60ch] text-ink-soft">{content.talk.lede}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="mt-12 divide-y divide-line border-y border-line font-mono text-sm sm:text-base">
          {content.talk.social.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener"
                className="flex items-center justify-between py-4 transition-colors hover:text-navy"
              >
                {link.label}
                <span aria-hidden className="text-ink-faint">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
