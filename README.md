# CloudVPN Marketing Site

CloudVPN is a React + Vite marketing site for a VPN product. The project now includes:

- Product pages for features, pricing, status, download, changelog, blog, careers, press, help center, community, and legal content
- Shared SEO metadata, sitemap support, manifest, favicon, and Open Graph artwork
- A Vitest + Testing Library setup for route, theme, form, and dashboard behavior
- CI that runs lint, tests, and production build checks

## Stack

- React 19
- Vite 7
- React Router
- Framer Motion
- Tailwind CSS 4 utilities
- Vitest + Testing Library

## Getting Started

Use a modern Node.js release that matches Vite 7 requirements. Node 20 LTS or Node 22 LTS is recommended.

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Scripts

```bash
npm run dev        # start the development server
npm run build      # create a production build
npm run preview    # preview the production build locally
npm run lint       # run ESLint
npm run test       # start Vitest in watch mode
npm run test:run   # run the test suite once
npm run coverage   # generate a coverage report
npm run e2e        # run Playwright smoke tests against a production preview
npm run lhci       # run Lighthouse CI against the production preview
npm run audit:prod # audit production dependencies
npm run check      # lint + test + build
```

## Project Structure

```text
src/
  components/      shared UI, SEO, routing helpers
  contexts/        theme context
  data/            navigation and structured page content
  pages/           route-level pages
  test/            test setup and helpers
public/
  favicon.svg
  og-image.svg
  site.webmanifest
  robots.txt
  sitemap.xml
```

## Quality Notes

- Unknown routes render a custom `404` page.
- Footer links now point to real pages instead of placeholders.
- Contact form labels are associated with controls for accessibility and testability.
- GitHub Actions validates the app on Node 20 and Node 22.

## Deployment

Vercel is the primary deployment target because the app uses Vercel Analytics and Speed Insights. The repository also keeps Netlify SPA rewrite support as a fallback:

- `vercel.json`
- `netlify.toml`

Run `npm run build` before deploying and publish the `dist` directory.

## Production Notes

The site currently uses demo marketing copy and mock status/contact behavior when `VITE_CONTACT_ENDPOINT` and `VITE_STATUS_API_URL` are not configured. Verify all legal, privacy, company, and usage claims before production launch.
