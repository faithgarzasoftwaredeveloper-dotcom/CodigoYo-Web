import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { LanguageControl } from "@/components/LanguageControl";
import { ThemeToggle } from "@/components/ThemeToggle";
import { content } from "@/lib/content";
import { careersHref, siteConfig, skillSprintHref, studioHref } from "@/lib/config";

export function Footer() {
  const copy = content.footer;
  const products = [
    { label: "SkillSprint", href: skillSprintHref(), track: "product_skillsprint" },
    { label: "CodigoYo Careers", href: careersHref(), track: "product_careers_interest" },
    { label: "CodigoYo Studio", href: studioHref(), track: "product_studio_interest" },
  ];

  return (
    <footer className="border-t border-cy-border py-14">
      <div className="shell grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cy-secondary">{copy.blurb}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cy-muted">{siteConfig.description}</p>
        </div>
        <FooterColumn title={copy.products}>
          <ul className="space-y-2">
            {products.map((item) => (
              <li key={item.label}>
                <a href={item.href} data-track={item.track} data-track-location="footer" className="text-cy-secondary hover:text-cy-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </FooterColumn>
        <FooterColumn title={copy.learn}>
          <ul className="space-y-2">
            {copy.learnItems.map((item) => (
              <li key={item} className="flex items-baseline justify-between gap-3 text-cy-secondary">
                <span>{item}</span>
                <span className="text-xs text-cy-muted">{copy.soon}</span>
              </li>
            ))}
          </ul>
        </FooterColumn>
        <FooterColumn title={copy.company}>
          <FooterLinks items={copy.companyItems} soon={copy.soon} />
        </FooterColumn>
        <FooterColumn title={copy.resources}>
          <FooterLinks items={copy.resourceItems} soon={copy.soon} />
        </FooterColumn>
      </div>
      <div className="shell mt-12 flex flex-col gap-4 border-t border-cy-border pt-6 text-sm text-cy-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {copy.rights}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <ThemeToggle />
          <LanguageControl inline />
          <span className="inline-flex items-center gap-2">
            {copy.privacy}
            <span className="text-xs">{copy.soon}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            {copy.terms}
            <span className="text-xs">{copy.soon}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cy-text">{title}</p>
      <div className="mt-4 text-sm">{children}</div>
    </div>
  );
}

function FooterLinks({
  items,
  soon,
}: {
  items: readonly { label: string; href: string | null }[];
  soon: string;
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <a href={item.href} className="text-cy-secondary hover:text-cy-text">
              {item.label}
            </a>
          ) : (
            <span className="flex items-baseline justify-between gap-3 text-cy-secondary">
              <span>{item.label}</span>
              <span className="text-xs text-cy-muted">{soon}</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
