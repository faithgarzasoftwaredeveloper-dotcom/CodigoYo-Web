import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { ArrowRight } from "@/components/icons";
import { content } from "@/lib/content";
import { siteConfig } from "@/lib/config";

export function ProductEcosystem() {
  const copy = content.products;
  const careersHref = siteConfig.careersUrl ?? "/#journey";
  const studioHref = siteConfig.studioUrl ?? "/#journey";

  return (
    <section id="ecosystem" className="section">
      <div className="shell">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2.3rem,5vw,4.2rem)]">{copy.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cy-secondary">{copy.support}</p>
        </div>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:gap-28">
          <ProductBlock
            id="learn"
            kicker={copy.learn.kicker}
            name={copy.learn.name}
            status={copy.learn.status}
            live
            body={copy.learn.body}
            points={copy.learn.points}
            note={copy.learn.note}
            cta={copy.learn.cta}
            href="https://skillsprintlms.netlify.app/en"
            track="product_skillsprint"
            visual={<LearnVisual />}
          />
          <ProductBlock
            id="work"
            reverse
            kicker={copy.work.kicker}
            name={copy.work.name}
            status={copy.work.status}
            body={copy.work.body}
            points={copy.work.points}
            note={copy.work.note}
            cta={siteConfig.careersUrl ? copy.work.ctaLive : copy.work.ctaSoon}
            href={careersHref}
            track="product_careers_interest"
            visual={<WorkVisual />}
          />
          <ProductBlock
            id="build"
            kicker={copy.build.kicker}
            name={copy.build.name}
            status={copy.build.status}
            body={copy.build.body}
            points={copy.build.points}
            note={copy.build.note}
            cta={siteConfig.studioUrl ? copy.build.ctaLive : copy.build.ctaSoon}
            href={studioHref}
            track="product_studio_interest"
            visual={<BuildVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function ProductBlock({
  id,
  reverse = false,
  kicker,
  name,
  status,
  live = false,
  body,
  points,
  note,
  cta,
  href,
  track,
  visual,
}: {
  id: string;
  reverse?: boolean;
  kicker: string;
  name: string;
  status: string;
  live?: boolean;
  body: string;
  points: readonly string[];
  note: string;
  cta: string;
  href: string;
  track: string;
  visual: ReactNode;
}) {
  return (
    <article id={id} data-reveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : undefined}>
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow">{kicker}</p>
          <span className={live ? "status-live" : "status-soon"}>{status}</span>
        </div>
        <h3 className="display mt-4 text-[clamp(2rem,4vw,3.25rem)]">{name}</h3>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-cy-secondary">{body}</p>
        <ul className="mt-6 grid gap-2.5 text-cy-secondary">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cy-cyan" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <ButtonLink href={href} variant={live ? "primary" : "secondary"} track={track} location={id}>
            {cta}
            {live ? <ArrowRight /> : null}
          </ButtonLink>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-cy-muted">{note}</p>
      </div>
      <div className={reverse ? "lg:order-1" : undefined}>{visual}</div>
    </article>
  );
}

function LearnVisual() {
  return (
    <div className="interface-preview p-4 sm:p-5">
      <div className="flex items-center justify-between text-xs font-semibold tracking-[0.14em] text-cy-muted">
        <span>SKILLSPRINT</span>
        <span>INTERFACE PREVIEW</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-cy-border bg-cy-chip p-3">
          <p className="text-sm font-semibold">APIs in practice</p>
          <p className="mt-1 text-xs text-cy-muted">Module 2 of 5</p>
          <div className="mt-3 h-1.5 rounded-full bg-cy-track">
            <div className="h-full w-[42%] rounded-full bg-cy-cyan" />
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-cy-muted">Request</li>
            <li className="text-cy-text">Response</li>
            <li className="text-cy-muted">Errors</li>
          </ul>
        </div>
        <div className="rounded-xl border border-cy-border bg-cy-code p-3 font-mono text-[0.75rem] leading-relaxed text-cy-secondary">
          <p className="mb-2 font-sans text-[0.68rem] tracking-wide text-cy-muted">practice.ts</p>
          <p>{"function reply(data) {"}</p>
          <p className="text-cy-cyan">{"  return json(data)"}</p>
          <p>{"}"}</p>
        </div>
      </div>
    </div>
  );
}

function WorkVisual() {
  const rows = [
    ["Skill match", "Backend foundations", "Strong alignment"],
    ["Career path", "APIs to a role", "Three steps"],
    ["Application", "Portfolio attached", "Not submitted"],
  ];

  return (
    <div className="interface-preview p-4 sm:p-5">
      <div className="flex items-center justify-between text-xs font-semibold tracking-[0.14em] text-cy-muted">
        <span>CAREERS</span>
        <span>DIRECTION PREVIEW</span>
      </div>
      <div className="mt-4 grid gap-2.5">
        {rows.map(([title, detail, meta]) => (
          <div key={title} className="flex items-center justify-between gap-3 rounded-xl border border-cy-border bg-cy-chip px-3 py-3">
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-cy-muted">{detail}</p>
            </div>
            <p className="text-right text-xs text-cy-secondary">{meta}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-cy-muted">Not a live job listing.</p>
    </div>
  );
}

function BuildVisual() {
  const steps = ["Idea", "Draft", "Automate", "Measure"];

  return (
    <div className="interface-preview p-4 sm:p-5">
      <div className="flex items-center justify-between text-xs font-semibold tracking-[0.14em] text-cy-muted">
        <span>STUDIO</span>
        <span>DIRECTION PREVIEW</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="rounded-xl border border-cy-border bg-cy-chip px-3 py-4">
            <p className="text-[0.68rem] text-cy-cyan">0{index + 1}</p>
            <p className="mt-2 text-sm font-semibold">{step}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-cy-border bg-cy-chip p-3">
        <p className="text-sm font-semibold">When a form arrives</p>
        <p className="mt-1 text-sm text-cy-secondary">File the lead, then draft the reply.</p>
      </div>
    </div>
  );
}
