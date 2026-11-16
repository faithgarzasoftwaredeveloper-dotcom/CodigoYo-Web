import { ButtonLink } from "@/components/ButtonLink";
import { ArrowRight } from "@/components/icons";
import { content } from "@/lib/content";
import { skillSprintHref } from "@/lib/config";

export function FinalCTA() {
  const copy = content.final;

  return (
    <section id="get-started" className="section section-follow">
      <div className="shell">
        <div
          data-reveal
          className="final-cta relative overflow-hidden rounded-[1.75rem] border border-cy-border px-5 py-12 text-center sm:px-10 sm:py-16"
        >
          <p className="eyebrow">Learn · Work · Build</p>
          <h2 className="display mx-auto mt-4 max-w-4xl text-[clamp(2.3rem,5vw,4.3rem)]">{copy.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cy-secondary">{copy.support}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 min-[480px]:flex-row">
            <ButtonLink href={skillSprintHref()} track="cta_start_learning" location="final" className="w-full min-[480px]:w-auto">
              {copy.primary}
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/#ecosystem" variant="secondary" track="cta_explore" location="final" className="w-full min-[480px]:w-auto">
              {copy.secondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
