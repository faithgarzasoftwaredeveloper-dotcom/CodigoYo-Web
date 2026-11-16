import { content } from "@/lib/content";

export function JourneySection() {
  const copy = content.journey;

  return (
    <section id="journey" className="section section-follow">
      <div className="shell">
        <div data-reveal className="surface-panel overflow-hidden px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">{copy.title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cy-secondary">{copy.support}</p>
          </div>

          <div className="relative mt-12">
            <svg className="pointer-events-none absolute left-0 right-0 top-5 hidden h-4 w-full lg:block" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
              <path className="journey-line" d="M2 2 H98" pathLength="1" />
            </svg>
            <ol className="grid gap-4 lg:grid-cols-4">
              {copy.steps.map((step, index) => (
                <li key={step.index} data-reveal style={{ ["--reveal-delay" as string]: index }} className="relative border-l border-cy-border pl-4 lg:border-l-0 lg:pl-0 lg:pr-4">
                  <p className="font-display text-sm text-cy-cyan">{step.index}</p>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.03em]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cy-secondary">{step.detail}</p>
                </li>
              ))}
              <li data-reveal style={{ ["--reveal-delay" as string]: 3 }} className="border-l border-cy-border pl-4 lg:border-l-0 lg:pl-0">
                <p className="font-display text-sm text-cy-violet">04</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-cy-muted">{copy.forkLabel}</p>
                <div className="mt-3 grid gap-3">
                  {copy.outcomes.map((outcome) => (
                    <div key={outcome.title} className="rounded-2xl border border-cy-border bg-cy-chip p-4">
                      <h3 className="font-display text-xl font-medium tracking-[-0.03em]">{outcome.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-cy-secondary">{outcome.detail}</p>
                    </div>
                  ))}
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
