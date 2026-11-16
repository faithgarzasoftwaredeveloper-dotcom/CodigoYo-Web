# CodigoYo

Public marketing site for CodigoYo, the technology company behind **Learn. Work. Build.**

This repository is the front door. It is not the learning product, the careers product, or the studio product.

- **SkillSprint** is a separate application for practical technology learning.
- **CodigoYo Careers** is in development. This site explains the direction. It is not a job board.
- **CodigoYo Studio** is in development. This site explains the direction. It is not a working builder.

## Local setup

Requirements: Node.js 22+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell:

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Environment variables

Copy `.env.example` to `.env.local`. Only public values belong here. Do not add secrets.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap, and robots. Set this to the real domain before launch. |
| `NEXT_PUBLIC_SKILLSPRINT_URL` | SkillSprint application URL. Start Learning, Get Started, and Explore SkillSprint use it. |
| `NEXT_PUBLIC_SIGN_IN_URL` | Optional sign-in URL. If empty, Sign In uses the SkillSprint URL, then `/#get-started`. |
| `NEXT_PUBLIC_CAREERS_URL` | Optional. When set, Careers links leave this site. |
| `NEXT_PUBLIC_STUDIO_URL` | Optional. When set, Studio links leave this site. |

If a product URL is empty, links stay on this site. The page does not 404.

Product URLs are read in `lib/config.ts`. Do not hardcode them in components.

## Where to edit the site

| Change | File |
| --- | --- |
| Homepage copy | `lib/content.ts` |
| Colors, type, buttons, motion, light and dark tokens | `app/globals.css` |
| Fonts | `app/layout.tsx` |
| Section layout | `components/` |
| SEO title and description | `lib/seo.ts` |
| Social share image | `lib/social-image.tsx` |
| Product links | `lib/config.ts` and `.env.local` |
| Analytics event names | `lib/analytics.ts` |

The header and footer include a light / dark control. The choice is stored in `localStorage` under `codigoyo-theme`. With no saved choice, the site follows the system preference and otherwise starts in dark. Tokens for both themes live at the top of `app/globals.css`.

Spanish is not translated. The EN / ES control explains that Spanish is coming. To add it later, create a Spanish copy module with the same shape as `content` in `lib/content.ts`, then switch that object from `components/LanguageControl.tsx`. Do not mark Spanish as complete until the copy actually changes.

## Animation

Motion lives in two places:

- CSS in `app/globals.css`: floating cards, hub glow, pathway pulses, button and card hover, scroll reveals.
- `components/EcosystemVisual.tsx`: pointer parallax, scroll parallax, and staggered card changes. Those updates use `transform` and CSS variables inside `requestAnimationFrame`.

The homepage itself is a Server Component. Client JavaScript is limited to the header, the ecosystem visual, scroll reveals, language note, and analytics.

`prefers-reduced-motion: reduce` disables parallax, floating, card cycling, pathway travel, cursor glow, and scroll reveals. Content stays in place and readable.

Pointer parallax and the cursor glow run only for a fine pointer on a wide screen. Touch layouts keep the lighter automatic motion.

## SEO

Metadata is set in `lib/seo.ts` and exported from `app/layout.tsx`.

Also included:

- `app/opengraph-image.tsx` and `app/twitter-image.tsx` (generated from `lib/social-image.tsx`)
- `app/robots.ts`
- `app/sitemap.ts`
- Organization and WebSite JSON-LD in `components/JsonLd.tsx`

JSON-LD includes a URL only when `NEXT_PUBLIC_SITE_URL` is a public origin. Localhost is omitted. No address, rating, founder, or social account is invented.

To replace the generated share image, edit `lib/social-image.tsx`, or delete the image routes and add static `app/opengraph-image.png` and `app/twitter-image.png` files.

## Analytics

`@vercel/analytics` is installed. Page views are recorded when the project is deployed on Vercel and Web Analytics is enabled for that project. Nothing is sent to a separate vendor from this repo.

Custom events are sent through `lib/analytics.ts`:

- `cta_start_learning`
- `cta_explore`
- `cta_get_started`
- `nav_sign_in`
- `product_skillsprint`
- `product_careers_interest`
- `product_studio_interest`
- `language_select`
- `theme_select`

`location` is attached when a control has `data-track-location`. Enable Analytics in the Vercel project settings after the first deploy. The package does not require a database.

## Deploy to Vercel

1. Push this repository to the Git host Vercel will read.
2. Import the project in Vercel. Framework preset: Next.js. Root directory: this repo.
3. Add the `NEXT_PUBLIC_*` variables from `.env.example`. Set `NEXT_PUBLIC_SITE_URL` to the production domain, including `https://`.
4. Set `NEXT_PUBLIC_SKILLSPRINT_URL` to the live SkillSprint URL.
5. Deploy.
6. In the Vercel project, enable Web Analytics if you want the events above.

No build command override is required. Vercel uses `npm run build`.

## Stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4. No database, authentication, CMS, or payment code.

## Future — Do Not Build Yet

- Full English / Spanish localization
- CMS
- Blog or resources publishing
- Email capture
- Careers application, job discovery, job matching, and career intelligence
- Studio application, AI tools, and business automation
- User accounts and cross-product identity
- Deeper SkillSprint integration beyond the public URL
- A shared CodigoYo design system package
- Customer stories
- Community features
- Newsletter
- Advanced analytics and A/B testing

Those belong in later products or later phases. This site should stay a fast, honest marketing front door.
