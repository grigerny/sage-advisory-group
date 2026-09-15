# SAGE Rebuild Build Spec

## Core architecture
Client request -> ChatGPT/Codex -> GitHub branch/PR -> preview -> merge -> Cloudflare Pages

## Component map

### Global
- `Header`
- `Footer`
- `PageHero`
- `SectionHeading`
- `SolutionGrid`
- `CTA`

### Homepage
1. Hero
2. About split
3. Four-solution grid
4. Investment CTA band
5. Why SAGE split
6. Four proof points
7. Testimonial area
8. Latest articles
9. CTA

### About
1. Interior hero
2. Approach
3. Why SAGE
4. Mission
5. Founder
6. CTA

### Solutions
1. Interior hero
2. Four solution cards
3. SAGE Resources
4. CTA

### Dynamic solution pages
Generated from `content/site.ts` while preserving the current public slugs.

### Blogs
Generated from `content/blogs.ts` while preserving current public slugs.

## SEO migration rules
- Preserve existing public URLs
- Preserve/update title tags and descriptions
- Add canonical URLs before cutover
- Generate sitemap.xml and robots.txt
- Redirect only when a URL truly changes
- Preserve article titles and publish dates
- Use approved structured data in production
- Do not launch until Search Console and analytics ownership are confirmed

## Client AI editing model
Most changes should touch only:
- `/content/site.ts`
- `/content/blogs.ts`

That is deliberate. Layout and code should be changed less often than business content.
