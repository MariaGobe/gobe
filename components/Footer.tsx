import Link from "next/link";
import type { SiteContent } from "@/lib/content";

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-line px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <span className="font-disp text-[clamp(24px,4vw,36px)] font-extrabold text-ink">
          {content.footer.line}
        </span>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <span className="font-mono text-[11px] text-ink-faint">{content.footer.meta}</span>
          <Link
            href={`/${content.locale}/legal/privacidad`}
            className="font-mono text-[11px] text-ink-faint underline decoration-line underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
          >
            {content.footer.privacyLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
