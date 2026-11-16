import { ButtonLink } from "@/components/ButtonLink";
import { content } from "@/lib/content";

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="shell flex min-h-[70vh] flex-col justify-center py-32">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.4rem)]">{content.notFound.title}</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-cy-secondary">{content.notFound.body}</p>
      <div className="mt-8">
        <ButtonLink href="/">{content.notFound.cta}</ButtonLink>
      </div>
    </main>
  );
}
