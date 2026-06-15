# Phase 3: Course Index

## Summary

Phase 3 replaced the scaffold home page with a generated course index at `/`. The page uses the Phase 2 content discovery utility to render units in sorted order and link each discovered module title to its planned notes route.

## Decisions Made

- Replaced `src/pages/index.mdx` with `src/pages/index.astro` so the root route can await `getCourseIndex()` directly.
- Kept content discovery unchanged and reused `getCourseIndex()` from `src/lib/contentDiscovery.js`.
- Rendered unit titles from the discovery utility, which removes numeric folder prefixes.
- Displayed intentional sequence numbers (`01`, `02`, etc.) separately from unit titles with `aria-hidden="true"` so the visual sequence does not leak source folder names into accessible headings.
- Used semantic sections, headings, an ordered module list, and normal anchors for the index.
- Added index-specific styles to the global stylesheet using existing theme tokens.

## Files Added Or Changed

- `src/pages/index.astro`
- `src/pages/index.mdx` removed
- `src/styles/global.css`
- `IMPLEMENTATION_PLANS.md`
- `PHASE-03.md`

## Commands Run

```text
cmd.exe /c npm test
cmd.exe /c npm run build
Select-String -Path dist\index.html -Pattern 'Semantic HTML Foundations|CSS Grid Track Sizing|/01-semantic-html/01-introduction/|/02-css-layout/01-grid/'
Start-Process ... npm run dev -- --host 127.0.0.1 --port 4321
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:4321/
```

## Verification

- `npm test` passed.
  - 2 test files passed.
  - 7 tests passed.
- `npm run build` passed.
  - `astro check` reported 0 errors, 0 warnings, and 0 hints.
  - Astro built 1 static page.
- The generated `dist/index.html` contains:
  - `Semantic HTML` -> `Semantic HTML Foundations` at `/01-semantic-html/01-introduction/`
  - `CSS Layout` -> `CSS Grid Track Sizing` at `/02-css-layout/01-grid/`
- `http://127.0.0.1:4321/` responded with HTTP 200.
- User verified the index page visually and approved Phase 3.

## Known Limitations And Notes

- Clicking module links currently returns 404 because notes routes are scheduled for Phase 6. The links intentionally point to the planned route shape now.
- The index page has no dedicated component tests. The existing discovery tests cover ordering, title extraction, and route path generation; the production build and generated HTML check cover page integration.
- The dev server may still be running on `127.0.0.1:4321` from verification.

## Recommended Starting Point For Phase 4

Implement the MDX teaching primitives next: callout components, `<Aside>`, and separate notes/slides component mappings. Keep behavior covered with focused tests before wiring full notes and slide routes in later phases.
