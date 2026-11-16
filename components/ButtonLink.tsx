import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  track,
  location,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  track?: string;
  location?: string;
  className?: string;
}) {
  const classNameValue = `btn btn-${variant} ${className}`.trim();
  const isInternalPage = href.startsWith("/") && !href.includes("#");

  if (isInternalPage) {
    return (
      <Link href={href} data-track={track} data-track-location={location} className={classNameValue}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} data-track={track} data-track-location={location} className={classNameValue}>
      {children}
    </a>
  );
}
