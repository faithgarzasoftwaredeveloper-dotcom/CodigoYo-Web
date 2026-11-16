import { ButtonLink } from "@/components/ButtonLink";
import { ArrowRight } from "@/components/icons";
import { content } from "@/lib/content";
import { skillSprintHref } from "@/lib/config";

export function FeaturedExperiences() {
  const copy = content.featured;

  return (
    <section id="resources" className="section section-follow">
      <div className="shell">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">{copy.title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cy-secondary">{copy.support}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: index % 3 }}
              className="flex min-h-full flex-col rounded-3xl border border-cy-border bg-cy-surface/70 p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="eyebrow">{item.category}</p>
                <span className={item.live ? "status-live" : "status-soon"}>{item.status}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-2 flex-1 text-base leading-relaxed text-cy-secondary">{item.summary}</p>
              {item.live ? (
                <div className="mt-6">
                  <ButtonLink href={skillSprintHref()} track="product_skillsprint" location="featured">
                    Explore SkillSprint
                    <ArrowRight />
                  </ButtonLink>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
