import type { SiteContent } from "@/lib/content";

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-line px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <span className="font-disp text-[clamp(24px,4vw,36px)] font-extrabold text-ink">
          {content.footer.line}
        </span>
        <span className="font-mono text-[11px] text-ink-faint">{content.footer.meta}</span>
      </div>
    </footer>
  );
}
