# SAGE Advisory Group - Next.js Static Rebuild Starter

A static-first Next.js 16 starter modeled around the current public SAGE Advisory Group site structure.

## Why this architecture

- Next.js App Router
- Static export (`output: "export"`)
- No database required
- No CMS required
- Designed for GitHub + Cloudflare Pages
- Client-editable business content lives in `/content`
- Existing public URL patterns are preserved where practical for SEO
- HoneyBook remains the external lead/contact flow

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000

Production build:

```bash
npm run build
```

The static export is written to `/out`.

## Suggested Cloudflare Pages settings

- Framework preset: Next.js (Static HTML Export) or custom
- Build command: `npm run build`
- Output directory: `out`
- Node: current supported LTS
- Production branch: `main`

## Content ownership / migration note

This starter intentionally does not copy the full text, legal language, blog articles, testimonials,
or proprietary photography from the existing public website. Replace the placeholder/paraphrased
content with the client's approved source material and original assets before production.

Put approved image files in:

`/public/images`

Then update the image paths in `/content/site.ts`.

## Recommended client workflow

The client connects ChatGPT to the GitHub repository and asks for changes in normal language.

Example:

> Change the homepage CTA heading to "Build a Stronger Restaurant Operation."

The AI should edit `/content/site.ts`, create a branch/PR, and let the client approve the preview.

## Current site routes represented

- `/`
- `/about-us/`
- `/solutions/`
- `/solutions/detail/Financial-Management/`
- `/solutions/detail/Operations-and-Field-Advisory/`
- `/solutions/detail/Restaurant-Project-Management/`
- `/solutions/detail/11-Coaching-for-Restaurant-Owners-Operators/`
- `/reviews/`
- `/blogs/`
- `/blogs/detail/[slug]/`
- `/permits/`
- `/capital/`
- `/crm/`
- `/legal/`
- `/terms-of-service/`
- `/privacy-policy/`
