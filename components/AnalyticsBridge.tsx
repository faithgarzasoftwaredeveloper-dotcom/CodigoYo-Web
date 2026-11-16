"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsBridge() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const element = (event.target as Element | null)?.closest?.("[data-track]");
      if (!(element instanceof HTMLElement)) return;
      const name = element.getAttribute("data-track");
      if (!name) return;
      const location = element.getAttribute("data-track-location");
      trackEvent(name, location ? { location } : undefined);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
