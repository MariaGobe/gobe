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

export type { SiteContent, WorkItem, TeamMember } from "./types";
