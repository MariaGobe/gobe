import { getContent, isLocale, defaultLocale } from "@/lib/content";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Nav } from "@/components/Nav";
import { Cover } from "@/components/Cover";
import { Home } from "@/components/Home";
import { WorkList } from "@/components/WorkList";
import { WorkGallery } from "@/components/WorkGallery";
import { Studio } from "@/components/Studio";
import { Talk } from "@/components/Talk";
import { Footer } from "@/components/Footer";

export default async function LocalePage(props: PageProps<"/[locale]">) {
  const { locale: localeParam } = await props.params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const content = getContent(locale);

  return (
    <MotionWrapper>
      <Nav content={content} />
      <main>
        <Cover content={content} />
        <Home content={content} />
        <WorkList
          locale={locale}
          eyebrow={content.experiments.eyebrow}
          heading={content.experiments.heading}
          lede={content.experiments.lede}
          items={content.experiments.items}
        />
        <WorkGallery
          id="work"
          locale={locale}
          eyebrow={content.work.eyebrow}
          heading={content.work.heading}
          lede={content.work.lede}
          items={content.work.items}
          allLabel={locale === "es" ? "Todos" : "All"}
          loadMoreLabel={locale === "es" ? "Cargar más" : "Load more"}
        />
        <Studio id="studio" content={content} />
        <Talk id="talk" content={content} />
      </main>
      <Footer content={content} />
    </MotionWrapper>
  );
}
