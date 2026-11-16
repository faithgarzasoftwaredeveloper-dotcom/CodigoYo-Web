"use client";

import { useId, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { content } from "@/lib/content";

export function LanguageControl({ inline = false }: { inline?: boolean }) {
  const [open, setOpen] = useState(false);
  const noteId = useId();
  const copy = content.language;

  return (
    <div className={`relative flex items-center gap-1.5 text-sm font-semibold ${inline ? "flex-wrap" : ""}`}>
      <span className="sr-only">{copy.label}</span>
      <span className="rounded-full bg-cy-track px-2 py-1 text-cy-text" aria-current="true">
        {copy.english}
      </span>
      <span aria-hidden="true" className="text-cy-muted">
        /
      </span>
      <button
        type="button"
        className="rounded-full px-2 py-1 text-cy-secondary hover:text-cy-text"
        aria-expanded={open}
        aria-controls={open ? noteId : undefined}
        onClick={() => {
          setOpen((value) => {
            if (!value) trackEvent("language_select", { language: "es" });
            return !value;
          });
        }}
      >
        {copy.spanish}
      </button>
      {open ? (
        <p id={noteId} role="status" className={inline ? "basis-full pt-2 text-sm font-normal text-cy-secondary" : "lang-note"}>
          {copy.comingSoon}
        </p>
      ) : null}
    </div>
  );
}
