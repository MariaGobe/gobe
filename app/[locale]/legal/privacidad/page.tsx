import Link from "next/link";
import type { Metadata } from "next";
import { getContent, isLocale, defaultLocale, locales } from "@/lib/content";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: PageProps<"/[locale]/legal/privacidad">
): Promise<Metadata> {
  const { locale: localeParam } = await props.params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const content = getContent(locale);
  return { title: `${content.legal.privacy.title} — Gobe` };
}

export default async function PrivacyPage(props: PageProps<"/[locale]/legal/privacidad">) {
  const { locale: localeParam } = await props.params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const content = getContent(locale);
  const { privacy } = content.legal;
  const backLabel = locale === "es" ? "Volver al inicio" : "Back to home";

  return (
    <>
      <Nav content={content} />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href={`/${locale}`}
          className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-soft transition-colors hover:text-navy"
        >
          ← {backLabel}
        </Link>

        <h1 className="mt-6 font-disp text-[clamp(28px,5vw,44px)] leading-[1.05]">
          {privacy.title}
        </h1>
        <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-faint">
          {privacy.updated}
        </p>
        <p className="mt-6 max-w-[65ch] text-ink-soft">{privacy.intro}</p>

        <div className="mt-12 space-y-10 border-t border-line pt-10">
          {privacy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-disp text-[20px]">{section.heading}</h2>
              <p className="mt-2 max-w-[65ch] text-[15px] leading-relaxed text-ink-soft">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer content={content} />
    </>
  );
}
