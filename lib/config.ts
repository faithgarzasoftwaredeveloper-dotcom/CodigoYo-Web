function clean(value: string | undefined) {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  return trimmed.replace(/\/$/, "");
}

export const siteConfig = {
  name: "CodigoYo",
  slogan: "Learn. Work. Build.",
  description:
    "CodigoYo creates technology that helps people learn valuable skills, find career opportunities, and build businesses and digital products.",
  siteUrl: clean(process.env.NEXT_PUBLIC_SITE_URL),
  skillSprintUrl: clean(process.env.NEXT_PUBLIC_SKILLSPRINT_URL),
  signInUrl: clean(process.env.NEXT_PUBLIC_SIGN_IN_URL),
  careersUrl: clean(process.env.NEXT_PUBLIC_CAREERS_URL),
  studioUrl: clean(process.env.NEXT_PUBLIC_STUDIO_URL),
} as const;

export const metadataBaseUrl = siteConfig.siteUrl ?? "http://localhost:3000";

export function publicSiteUrl() {
  const url = siteConfig.siteUrl;
  if (!url) return null;
  if (url.includes("localhost") || url.includes("127.0.0.1")) return null;
  return url;
}

export function skillSprintHref() {
  return siteConfig.skillSprintUrl ?? "/#learn";
}

export function signInHref() {
  if (siteConfig.signInUrl) return siteConfig.signInUrl;
  if (siteConfig.skillSprintUrl) return siteConfig.skillSprintUrl;
  return "/#get-started";
}

export function careersHref() {
  return siteConfig.careersUrl ?? "/#work";
}

export function studioHref() {
  return siteConfig.studioUrl ?? "/#build";
}
