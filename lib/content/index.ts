import { es } from "./es";
import { en } from "./en";
import type { SiteContent } from "./types";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

const dictionaries: Record<Locale, SiteContent> = { es, en };

export function getContent(locale: string): SiteContent {
  return dictionaries[(locale as Locale) in dictionaries ? (locale as Locale) : defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** All Selected Work + Experiments items, in display order, for a locale. */
export function allWorkItems(locale: string) {
  const content = getContent(locale);
  return [...content.work.items, ...content.experiments.items];
}

export function findWorkItem(locale: string, slug: string) {
  const items = allWorkItems(locale);
  const index = items.findIndex((item) => item.slug === slug);
  if (index === -1) return null;
  return {
    item: items[index],
    section: index < getContent(locale).work.items.length ? ("work" as const) : ("experiments" as const),
    prev: items[index - 1] ?? null,
    next: items[index + 1] ?? null,
  };
}

export function allWorkSlugs() {
  return locales.flatMap((locale) => allWorkItems(locale).map((item) => ({ locale, slug: item.slug })));
}

export type { SiteContent, WorkItem, WorkLink, TeamMember } from "./types";
