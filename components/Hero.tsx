import { EcosystemVisual } from "@/components/EcosystemVisual";
import { ButtonLink } from "@/components/ButtonLink";
import { ValueStrip } from "@/components/ValueStrip";
import { ArrowRight } from "@/components/icons";
import { content } from "@/lib/content";
import { skillSprintHref } from "@/lib/config";

export function Hero() {
  return (
    <section className="hero" data-hero>
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1 className="display mt-5 text-[clamp(3.35rem,8vw,5.75rem)]">
            {content.hero.title.map((line) => (
              <span key={line} className="block">
                {line}
                <span className="text-cy-cyan">.</span>
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cy-secondary">{content.hero.support}</p>
          <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row">
            <ButtonLink
              href={skillSprintHref()}
              track="cta_start_learning"
              location="hero"
              className="w-full min-[480px]:w-auto"
            >
              {content.hero.primary}
              <ArrowRight />
            </ButtonLink>
            <ButtonLink
              href="/#ecosystem"
              variant="secondary"
              track="cta_explore"
              location="hero"
              className="w-full min-[480px]:w-auto"
            >
              {content.hero.secondary}
            </ButtonLink>
          </div>
        </div>
        <EcosystemVisual />
      </div>
      <div className="shell">
        <ValueStrip />
      </div>
    </section>
  );
}
