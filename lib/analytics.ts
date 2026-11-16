export const analyticsEvents = [
  "cta_start_learning",
  "cta_explore",
  "cta_get_started",
  "nav_sign_in",
  "product_skillsprint",
  "product_careers_interest",
  "product_studio_interest",
  "language_select",
  "theme_select",
] as const;

export type AnalyticsEventName = (typeof analyticsEvents)[number];

export type AnalyticsProps = Record<string, string | number | boolean | null>;

function isAnalyticsEvent(value: string): value is AnalyticsEventName {
  return (analyticsEvents as readonly string[]).includes(value);
}

export function trackEvent(name: string, properties?: AnalyticsProps) {
  if (typeof window === "undefined" || !isAnalyticsEvent(name)) return;

  void import("@vercel/analytics")
    .then(({ track }) => {
      track(name, properties);
    })
    .catch(() => {
      // Analytics is optional until the package is available in the deployment.
    });
}
