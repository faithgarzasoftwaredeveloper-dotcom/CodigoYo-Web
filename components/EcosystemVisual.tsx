"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/icons";
import { content } from "@/lib/content";

type Area = "learn" | "work" | "build";

const learnFrames = [
  { id: "lesson", view: <LearnLesson /> },
  { id: "code", view: <LearnCode /> },
  { id: "play", view: <LearnPlay /> },
  { id: "badge", view: <LearnBadge /> },
];

const workFrames = [
  { id: "match", view: <WorkMatch /> },
  { id: "role", view: <WorkRole /> },
  { id: "path", view: <WorkPath /> },
  { id: "application", view: <WorkApplication /> },
];

const buildFrames = [
  { id: "draft", view: <BuildDraft /> },
  { id: "flow", view: <BuildFlow /> },
  { id: "site", view: <BuildSite /> },
  { id: "analytics", view: <BuildAnalytics /> },
];

const frames = {
  learn: learnFrames,
  work: workFrames,
  build: buildFrames,
} as const;

const floatClass: Record<Area, string> = {
  learn: "float-a",
  work: "float-b",
  build: "float-c",
};

const positionClass: Record<Area, string> = {
  learn: "pos-learn",
  work: "pos-work",
  build: "pos-build",
};

export function EcosystemVisual() {
  const stageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [indexes, setIndexes] = useState({ learn: 0, work: 0, build: 0 });
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let timer = 0;
    let phase = 0;
    const order: Area[] = ["learn", "work", "build"];

    const run = () => {
      if (document.hidden) {
        timer = window.setTimeout(run, 1200);
        return;
      }
      const key = order[phase];
      setIndexes((current) => ({
        ...current,
        [key]: (current[key] + 1) % 4,
      }));
      const delay = phase === 2 ? 6400 : 2000;
      phase = (phase + 1) % 3;
      timer = window.setTimeout(run, delay);
    };

    timer = window.setTimeout(run, 5400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !desktop) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const hero = stage.closest("[data-hero]") as HTMLElement | null;
    const glow = glowRef.current;
    const current = { x: 0, y: 0, s: 0 };
    const target = { x: 0, y: 0, s: 0 };
    let frame = 0;
    let visible = true;

    const apply = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      current.s += (target.s - current.s) * 0.1;
      stage.style.setProperty("--px", current.x.toFixed(3));
      stage.style.setProperty("--py", current.y.toFixed(3));
      stage.style.setProperty("--sy", current.s.toFixed(2));
    };

    const tick = () => {
      apply();
      const settled =
        Math.abs(target.x - current.x) < 0.004 &&
        Math.abs(target.y - current.y) < 0.004 &&
        Math.abs(target.s - current.s) < 0.08;
      if (!visible && settled) {
        frame = 0;
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frame) frame = window.requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      target.s = Math.min(Math.max(-rect.top, 0), 360);
      start();
    };

    const onMove = (event: PointerEvent) => {
      if (!fine || event.pointerType !== "mouse" || !hero) return;
      const heroRect = hero.getBoundingClientRect();
      const nx = ((event.clientX - heroRect.left) / heroRect.width - 0.5) * 2;
      const ny = ((event.clientY - heroRect.top) / heroRect.height - 0.5) * 2;
      target.x = Math.max(-1, Math.min(1, nx));
      target.y = Math.max(-1, Math.min(1, ny));

      if (glow) {
        const stageRect = stage.getBoundingClientRect();
        const inside =
          event.clientX >= stageRect.left &&
          event.clientX <= stageRect.right &&
          event.clientY >= stageRect.top &&
          event.clientY <= stageRect.bottom;
        glow.style.opacity = inside ? "1" : "0";
        glow.style.transform = `translate3d(${event.clientX - stageRect.left}px, ${event.clientY - stageRect.top}px, 0)`;
      }
      start();
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      if (glow) glow.style.opacity = "0";
      start();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      if (visible) start();
    });
    observer.observe(hero ?? stage);

    hero?.addEventListener("pointermove", onMove);
    hero?.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      hero?.removeEventListener("pointermove", onMove);
      hero?.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [desktop]);

  return (
    <div>
      <p className="sr-only">{content.hero.visualLabel}</p>
      <div className="mobile-stack lg:hidden" aria-hidden="true">
        <span className="rail-pulse" />
        <div className="flex items-center gap-3">
          <Hub compact />
          <p className="text-sm leading-snug text-cy-secondary">
            One hub. Three directions.
          </p>
        </div>
        <EcosystemCard area="learn" index={indexes.learn} />
        <EcosystemCard area="work" index={indexes.work} />
        <EcosystemCard area="build" index={indexes.build} />
      </div>

      <div ref={stageRef} className="stage hidden lg:block" aria-hidden="true">
        <div className="layer layer-bg">
          <div className="hero-glow" />
          <div className="grid-fade" />
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <span className="node" style={{ top: "18%", left: "28%" }} />
          <span className="node" style={{ top: "62%", left: "18%" }} />
          <span className="node" style={{ top: "30%", left: "70%" }} />
          <span className="node" style={{ top: "78%", left: "62%" }} />
        </div>
        <div className="layer layer-mid">
          <svg className="paths" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M20 46 C32 28 44 16 52 14" />
            <path d="M62 22 C50 32 44 40 48 46" />
            <path d="M58 58 C46 68 48 76 54 80" />
            <path className="pulse" d="M20 46 C32 28 44 16 52 14" />
            <path className="pulse pulse-2" d="M62 22 C50 32 44 40 48 46" />
            <path className="pulse pulse-3" d="M58 58 C46 68 48 76 54 80" />
            <circle cx="20" cy="46" r="0.9" fill="#3ee0c5" stroke="none" />
            <circle cx="52" cy="14" r="0.8" fill="#8eb6ff" stroke="none" />
            <circle cx="48" cy="46" r="0.8" fill="#8eb6ff" stroke="none" />
            <circle cx="54" cy="80" r="0.8" fill="#b7adff" stroke="none" />
          </svg>
        </div>
        <div className="layer layer-fg">
          <div className="pos-hub">
            <Hub />
          </div>
          <EcosystemCard area="learn" index={indexes.learn} className={positionClass.learn} />
          <EcosystemCard area="work" index={indexes.work} className={positionClass.work} />
          <EcosystemCard area="build" index={indexes.build} className={positionClass.build} />
        </div>
        <div ref={glowRef} className="cursor-glow" />
      </div>
    </div>
  );
}

function EcosystemCard({
  area,
  index,
  className = "",
}: {
  area: Area;
  index: number;
  className?: string;
}) {
  const meta = content.ecosystemCards[area];
  return (
    <article className={`product-card ${floatClass[area]} ${className}`}>
      <div className="card-shell p-3">
        <div className="card-kicker">
          <span className={area === "build" ? "text-cy-violet" : area === "work" ? "text-cy-blue-bright" : "text-cy-cyan"}>
            {meta.label}
          </span>
          <span>{content.ecosystemCards.preview}</span>
        </div>
        <div className="preview-viewport mt-3">
          {frames[area].map((frame, frameIndex) => (
            <div key={frame.id} className={`preview ${frameIndex === index ? "is-active" : ""}`}>
              {frame.view}
            </div>
          ))}
        </div>
        <p className="mt-3 text-[0.84rem] leading-snug text-cy-secondary">{meta.detail}</p>
      </div>
    </article>
  );
}

function Hub({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`hub ${compact ? "hub-compact" : ""}`}>
      <div className="hub-glow" />
      <div className="hub-core">
        <LogoMark className={compact ? "h-5 w-5" : "h-7 w-7"} />
        {compact ? null : (
          <span className="font-display text-[0.78rem] font-medium tracking-[-0.03em]">CodigoYo</span>
        )}
      </div>
    </div>
  );
}

function LearnLesson() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-cy-cyan">SKILLSPRINT</p>
        <p className="mt-1 text-sm font-semibold">APIs in practice</p>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-cy-track">
        <div className="h-full w-[46%] rounded-full bg-cy-cyan" />
      </div>
      <p className="text-[0.78rem] text-cy-secondary">Module 2 · Response</p>
    </div>
  );
}

function LearnCode() {
  return (
    <div className="flex h-full flex-col">
      <p className="text-[0.68rem] text-cy-muted">challenge.ts</p>
      <pre className="mt-2 font-mono text-[0.72rem] leading-relaxed text-cy-secondary">
        <code>{`function handle() {\n  return { ok: true }\n}`}</code>
      </pre>
      <p className="mt-auto text-[0.75rem] text-cy-cyan">Tests 2 of 3</p>
    </div>
  );
}

function LearnPlay() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <p className="text-sm font-semibold">Build the endpoint</p>
        <p className="text-[0.75rem] text-cy-muted">Step 3 of 4</p>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 text-[0.72rem]">
        <span className="rounded-md border border-cy-border px-2 py-1">Request</span>
        <span className="text-cy-cyan">to</span>
        <span className="rounded-md border border-cy-cyan/40 px-2 py-1 text-cy-text">Handler</span>
      </div>
    </div>
  );
}

function LearnBadge() {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-cy-cyan">SKILL EARNED</p>
      <p className="mt-2 font-display text-base font-medium">API Foundations</p>
      <p className="mt-1 text-[0.8rem] text-cy-muted">Hands-on · Practical</p>
    </div>
  );
}

function WorkMatch() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <p className="text-sm font-semibold">Skill match</p>
        <p className="text-[0.75rem] text-cy-muted">Backend foundations</p>
      </div>
      <div>
        <div className="mb-1 flex justify-between text-[0.72rem] text-cy-secondary">
          <span>Alignment</span>
          <span>Strong</span>
        </div>
        <div className="h-1.5 rounded-full bg-cy-track">
          <div className="h-full w-[78%] rounded-full bg-cy-blue" />
        </div>
      </div>
      <p className="text-[0.75rem] text-cy-muted">Not a live role</p>
    </div>
  );
}

function WorkRole() {
  return (
    <div className="flex h-full flex-col justify-between">
      <p className="text-[0.68rem] tracking-[0.12em] text-cy-muted">OPPORTUNITY PREVIEW</p>
      <p className="text-sm font-semibold">Product engineer</p>
      <p className="text-[0.78rem] text-cy-secondary">APIs · interfaces · shipping</p>
    </div>
  );
}

function WorkPath() {
  return (
    <ol className="flex h-full flex-col justify-center gap-1.5 text-[0.82rem]">
      <li className="text-cy-muted">1 · Learn APIs</li>
      <li className="text-cy-text">2 · Ship a service</li>
      <li className="text-cy-muted">3 · Step into a role</li>
    </ol>
  );
}

function WorkApplication() {
  return (
    <div className="flex h-full flex-col justify-between">
      <p className="text-sm font-semibold">Application preview</p>
      <p className="text-[0.8rem] text-cy-secondary">Portfolio attached</p>
      <p className="text-[0.8rem] text-cy-cyan">Status: preparing</p>
      <p className="text-[0.75rem] text-cy-muted">Nothing is submitted</p>
    </div>
  );
}

function BuildDraft() {
  return (
    <div className="flex h-full flex-col justify-between">
      <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-cy-violet">AI CONTENT</p>
      <p className="text-sm font-semibold">Outline, voice, edit</p>
      <p className="text-[0.78rem] text-cy-muted">A page, a post, a product note</p>
    </div>
  );
}

function BuildFlow() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5 text-[0.8rem]">
      <p className="rounded-md border border-cy-border px-2 py-1">When a form arrives</p>
      <p className="text-cy-cyan">then file the lead</p>
      <p className="text-cy-secondary">then draft the reply</p>
    </div>
  );
}

function BuildSite() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 flex gap-1" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-cy-dot" />
        <span className="h-1.5 w-1.5 rounded-full bg-cy-dot-dim" />
        <span className="h-1.5 w-1.5 rounded-full bg-cy-dot-dim" />
      </div>
      <p className="text-[0.75rem] text-cy-muted">youridea.com</p>
      <p className="mt-2 text-sm font-semibold">Hero · Offer · Proof</p>
    </div>
  );
}

function BuildAnalytics() {
  return (
    <div className="flex h-full flex-col justify-between">
      <p className="text-[0.75rem] text-cy-muted">Preview, not live data</p>
      <div className="flex h-12 items-end gap-1.5" aria-hidden="true">
        <span className="h-6 flex-1 rounded-sm bg-cy-blue/80" />
        <span className="h-10 flex-1 rounded-sm bg-cy-cyan/80" />
        <span className="h-8 flex-1 rounded-sm bg-cy-violet/80" />
        <span className="h-12 flex-1 rounded-sm bg-cy-text/80" />
      </div>
      <p className="text-[0.75rem] text-cy-secondary">Visits · signups · shipped</p>
    </div>
  );
}
