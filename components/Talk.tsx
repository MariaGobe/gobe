import type { SiteContent } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Talk({ id, content }: { id?: string; content: SiteContent }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <span className="eyebrow">{content.talk.eyebrow}</span>
        <h2 className="mt-3 max-w-[22ch] text-[clamp(26px,4vw,40px)]">{content.talk.heading}</h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-14 sm:grid-cols-2">
        <Reveal delay={0.05}>
          <p className="text-ink-soft">{content.talk.lede}</p>
          <form className="mt-8 flex flex-col gap-4 rounded-sm border border-line bg-paper-raised p-6">
            <label className="flex flex-col gap-1 text-sm text-ink-soft">
              {content.talk.formLabels.name}
              <input
                type="text"
                name="name"
                className="rounded-sm border border-line bg-paper px-3 py-2 text-ink outline-none focus:border-navy"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-ink-soft">
              {content.talk.formLabels.email}
              <input
                type="email"
                name="email"
                className="rounded-sm border border-line bg-paper px-3 py-2 text-ink outline-none focus:border-navy"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-ink-soft">
              {content.talk.formLabels.message}
              <textarea
                name="message"
                rows={4}
                className="rounded-sm border border-line bg-paper px-3 py-2 text-ink outline-none focus:border-navy"
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-fit rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
            >
              {content.talk.formLabels.send}
            </button>
          </form>
          <p className="mt-4 text-[13.5px] text-ink-faint">{content.talk.formNote}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-line border-y border-line font-mono text-[13px]">
            {content.talk.social.map((link) => (
              <li key={link.label} className="flex items-center justify-between py-3">
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener"
                  className="transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
