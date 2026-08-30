import type { Metadata } from "next";
import localFont from "next/font/local";
import { locale as getLocale } from "next/root-params";
import { getContent, isLocale, defaultLocale, locales } from "@/lib/content";
import "./globals.css";

// Self-hosted (no external font CDN calls): files copied from the
// @fontsource packages into app/fonts/.
const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "../fonts/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/poppins-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
});

const newsreader = localFont({
  variable: "--font-newsreader",
  display: "swap",
  src: [
    { path: "../fonts/newsreader-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/newsreader-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/newsreader-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/newsreader-latin-500-italic.woff2", weight: "500", style: "italic" },
  ],
});

const spaceMono = localFont({
  variable: "--font-space-mono",
  display: "swap",
  src: [
    { path: "../fonts/space-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/space-mono-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

const caveat = localFont({
  variable: "--font-caveat",
  display: "swap",
  src: [
    { path: "../fonts/caveat-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/caveat-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const localeParam = await getLocale();
  const locale = isLocale(localeParam ?? "") ? (localeParam as string) : defaultLocale;
  const content = getContent(locale);
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const localeParam = await getLocale();
  const htmlLang = isLocale(localeParam ?? "") ? (localeParam as string) : defaultLocale;

  return (
    <html
      lang={htmlLang}
      className={`${poppins.variable} ${newsreader.variable} ${spaceMono.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
