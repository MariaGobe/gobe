import type { SiteContent } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Studio({ id, content }: { id?: string; content: SiteContent }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <span className="eyebrow">{content.studio.eyebrow}</span>
        <h2 className="mt-3 max-w-[22ch] text-[clamp(26px,4vw,40px)]">{content.studio.heading}</h2>
        <p className="mt-4 max-w-[60ch] text-ink-soft">{content.studio.lede}</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
        {content.studio.team.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.08} className="flex flex-col bg-paper">
            <div className="aspect-[3/4] overflow-hidden bg-paper-sunk">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.photo}
                alt={`Retrato de ${member.name}`}
                className="h-full w-full object-cover grayscale contrast-[1.05]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-navy">
                {member.role}
              </span>
              <h4 className="mt-2 font-disp text-xl">{member.name}</h4>
              <p className="mt-3 flex-1 text-sm text-ink-soft">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-block border-t border-line pt-3 font-mono text-[11px] text-ink-faint transition-colors hover:text-navy"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
