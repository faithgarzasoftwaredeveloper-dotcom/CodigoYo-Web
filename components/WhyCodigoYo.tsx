import { content } from "@/lib/content";

export function WhyCodigoYo() {
  const copy = content.why;

  return (
    <section id="why" className="section section-follow">
      <div className="shell">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">{copy.title}</h2>
        </div>
        <div className="why-grid mt-10">
          {copy.items.map((item, index) => (
            <article key={item.title} data-reveal style={{ ["--reveal-delay" as string]: index }} className="why-item">
              <p className="font-display text-sm text-cy-cyan">0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-2 max-w-md text-base leading-relaxed text-cy-secondary">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
