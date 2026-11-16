import { content } from "@/lib/content";

export function ValueStrip() {
  return (
    <div className="value-strip">
      {content.value.map((item) => (
        <div key={item.title} className="value-item">
          <p className="font-display text-lg font-medium tracking-[-0.03em]">{item.title}</p>
          <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-cy-secondary">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
