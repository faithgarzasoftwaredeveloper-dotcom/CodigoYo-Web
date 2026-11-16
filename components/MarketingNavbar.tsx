"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { LanguageControl } from "@/components/LanguageControl";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowRight } from "@/components/icons";
import { content } from "@/lib/content";
import { signInHref, skillSprintHref } from "@/lib/config";

export function MarketingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const copy = content.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1180px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const items = panel?.querySelectorAll<HTMLElement>("a, button") ?? [];
    items[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="shell flex h-full items-center justify-between gap-3">
        <Link href="/" aria-label="CodigoYo home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 min-[1180px]:flex" aria-label="Primary">
          {copy.items.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <div className="hidden min-[1180px]:block">
            <LanguageControl />
          </div>
          <a href={signInHref()} data-track="nav_sign_in" data-track-location="header" className="btn btn-ghost hidden min-[1180px]:inline-flex">
            {copy.signIn}
          </a>
          <a
            href={skillSprintHref()}
            data-track="cta_get_started"
            data-track-location="header"
            className="btn btn-primary hidden !px-3 text-sm min-[420px]:inline-flex sm:!px-4"
          >
            {copy.getStarted}
            <ArrowRight />
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-cy-border text-cy-text min-[1180px]:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? copy.closeMenu : copy.openMenu}</span>
            <span aria-hidden="true" className="flex w-4 flex-col gap-1">
              <span className={`h-px bg-current transition ${open ? "translate-y-[2.5px] rotate-45" : ""}`} />
              <span className={`h-px bg-current transition ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          className="fixed inset-x-0 bottom-0 top-[var(--cy-header)] z-30 overflow-y-auto border-t border-cy-border bg-cy-menu px-5 py-6 min-[1180px]:hidden"
        >
          <nav className="shell !w-full !px-0 flex flex-col" aria-label="Mobile">
            {copy.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-cy-border py-4 text-lg font-semibold text-cy-text"
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-4">
              <LanguageControl inline />
              <a href={signInHref()} data-track="nav_sign_in" data-track-location="menu" className="btn btn-secondary w-full" onClick={close}>
                {copy.signIn}
              </a>
              <a
                href={skillSprintHref()}
                data-track="cta_get_started"
                data-track-location="menu"
                className="btn btn-primary w-full"
                onClick={close}
              >
                {copy.getStarted}
                <ArrowRight />
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
