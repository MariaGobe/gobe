import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getContent, isLocale, defaultLocale, findWorkItem, allWorkSlugs } from "@/lib/content";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export async function generateStaticParams() {
  return allWorkSlugs();
}

export async function generateMetadata(
  props: PageProps<"/[locale]/work/[slug]">
): Promise<Metadata> {
  const { locale: localeParam, slug } = await props.params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const found = findWorkItem(locale, slug);
  if (!found) return {};
  return {
    title: `${found.item.title} — Gobe`,
    description: found.item.description,
  };
}

export default async function WorkCasePage(props: PageProps<"/[locale]/work/[slug]">) {
  const { locale: localeParam, slug } = await props.params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const content = getContent(locale);
  const found = findWorkItem(locale, slug);

  if (!found) notFound();

  const { item, section, prev, next } = found;
  const backLabel = locale === "es" ? "Volver a Work" : "Back to Work";
  const caseLabel = locale === "es" ? "Caso" : "Case";
  const sectionLabel =
    section === "work" ? content.work.eyebrow : content.experiments.eyebrow;

  return (
    <>
      <Nav content={content} />
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <Reveal>
          <Link
            href={`/${locale}#work`}
            className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-soft transition-colors hover:text-navy"
          >
            ← {backLabel}
          </Link>

          <div className="mt-8 flex items-center gap-3 font-mono text-xs text-ink-faint">
            <span>{caseLabel} {item.idx}</span>
            <span className="rounded-full border border-line px-2 py-1 text-[10px] uppercase tracking-[0.06em] text-navy">
              {item.stamp}
            </span>
            <span className="text-ink-faint">{sectionLabel}</span>
          </div>

          <h1 className="mt-4 font-disp text-[clamp(32px,6vw,56px)] leading-[1.05]">
            {item.title}
          </h1>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 overflow-hidden rounded-sm border border-line bg-paper-raised">
            {item.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.image} alt={item.imageAlt} className="w-full object-cover" />
            ) : (
              <div className="p-16 text-center font-mono text-xs uppercase tracking-[0.06em] text-ink-faint">
                {item.imageAlt || "—"}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 max-w-[65ch] space-y-5 text-lg leading-relaxed text-ink-soft">
            {item.description.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 max-w-[65ch] font-mono text-sm leading-relaxed text-navy">
            → {item.treatment}
          </div>

          {item.links && item.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="font-mono text-[13px] uppercase tracking-[0.06em] text-ink underline decoration-line underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}

          {item.press && item.press.length > 0 && (
            <div className="mt-10 border-t border-line pt-6">
              <span className="eyebrow">{locale === "es" ? "En prensa" : "In the press"}</span>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {item.press.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="font-mono text-[13px] text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          )}
        </Reveal>

        {(prev || next) && (
          <div className="mt-20 flex items-center justify-between border-t border-line pt-8 font-mono text-[12px] uppercase tracking-[0.06em]">
            {prev ? (
              <Link href={`/${locale}/work/${prev.slug}`} className="text-ink-soft transition-colors hover:text-navy">
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/${locale}/work/${next.slug}`} className="text-ink-soft transition-colors hover:text-navy">
                {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        )}
      </main>
      <Footer content={content} />
    </>
  );
}
