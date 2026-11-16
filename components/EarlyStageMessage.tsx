import { content } from "@/lib/content";

export function EarlyStageMessage() {
  const copy = content.early;

  return (
    <section id="about" className="section section-follow">
      <div className="shell">
        <div data-reveal className="grid gap-10 rounded-[1.75rem] border border-cy-border bg-cy-raised/80 px-5 py-10 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-12 lg:py-14">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.9rem)]">{copy.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cy-secondary">{copy.body}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cy-secondary">{copy.close}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cy-cyan">{copy.nowTitle}</p>
              <ul className="mt-3 space-y-2 text-cy-secondary">
                {copy.now.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cy-muted">{copy.nextTitle}</p>
              <ul className="mt-3 space-y-2 text-cy-secondary">
                {copy.next.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
