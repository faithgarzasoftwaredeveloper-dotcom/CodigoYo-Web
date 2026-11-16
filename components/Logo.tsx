import { LogoMark } from "@/components/icons";

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 text-cy-text">
      <span className="grid h-9 w-9 place-items-center rounded-xl border border-cy-border bg-cy-surface">
        <LogoMark />
      </span>
      <span className="font-display text-[1.2rem] font-medium tracking-[-0.04em]">
        Codigo<span className="text-cy-cyan">Yo</span>
      </span>
    </span>
  );
}
