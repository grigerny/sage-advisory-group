# SAGE Website Editing Rules

This site is intentionally structured so an AI agent can make safe client-requested changes.

## Default behavior
1. Prefer editing files in `/content`.
2. Do not change `/components` or `/app` unless the request clearly requires a layout, feature, or design change.
3. Never remove an existing public URL without adding a replacement strategy.
4. Keep the main CTA pointed at the internal `/contact/` page unless the client explicitly asks to change it.
5. Preserve semantic heading order and metadata.
6. Run `npm run build` before proposing a production merge.
7. For larger visual changes, use a pull request / preview flow rather than pushing straight to production.

## Common requests
- Change wording: edit `/content/site.ts`
- Add/edit service: edit `/content/site.ts`
- Add/edit review: edit `/content/site.ts`
- Add/edit blog: edit `/content/blogs.ts`
- Change phone/email/social links: edit `/content/site.ts`
- Change contact form questions/options: edit `/content/site.ts` (`contact` object)
- Change colors: edit CSS variables at the top of `/app/globals.css`

## Production rule
For client-facing use, the recommended flow is:
ChatGPT/Codex -> branch -> pull request -> preview -> human approval -> merge to `main`.
