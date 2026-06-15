# Phase 11: Deployment

## Summary

Phase 11 configured Sliders for static GitHub Pages deployment from the
`stungeye/Sliders` repository. The production site is configured for the
repository Pages URL at `https://stungeye.github.io/Sliders/`, while local
development keeps the same clean route conventions.

## Decisions Made

- Set Astro `site` to `https://stungeye.github.io`.
- Set Astro `base` to `/Sliders`, matching the GitHub repository name.
- Kept discovered module `routePath` values root-relative, such as
  `/02-css-layout/01-grid/`, so routing data remains simple and testable.
- Added a small `toSitePath()` helper for rendered links that need Astro's
  deployment base path.
- Used the official Astro GitHub Pages action workflow with GitHub Pages
  deployment permissions.
- Documented the deployment URL, base-path assumption, and required GitHub Pages
  repository setting in the README.
- User confirmed GitHub repository Settings > Pages > Build and deployment >
  Source is set to `GitHub Actions`.

## Files Added Or Changed

- `.github/workflows/deploy.yml`
- `IMPLEMENTATION_PLANS.md`
- `PHASE-11.md`
- `README.md`
- `astro.config.mjs`
- `src/components/mdx/createNotesMdxComponents.jsx`
- `src/lib/siteUrls.js`
- `src/lib/siteUrls.test.js`
- `src/pages/[unit]/[module]/index.astro`
- `src/pages/demos/[demo]/index.astro`
- `src/pages/index.astro`

## Commands Run

```text
cmd.exe /c npm test -- src\lib\siteUrls.test.js
cmd.exe /c npm test -- src\components\mdx\createMdxComponents.test.jsx
cmd.exe /c npm test -- src\lib\demoRegistry.test.jsx
cmd.exe /c npm test
cmd.exe /c npm run build
Get-ChildItem -Path dist -Recurse -Filter *.html | Select-String -Pattern 'href="/(?!Sliders/)'
Get-ChildItem -Path dist -Recurse -Filter *.html | Select-String -Pattern 'src="/(?!Sliders/)'
```

## Verification

- Focused site URL helper tests passed.
- Focused MDX demo-link tests passed.
- Focused demo registry tests passed.
- Full test suite passed.
  - 12 test files passed.
  - 67 tests passed.
- `npm run build` passed.
  - `astro check` reported 0 errors, 0 warnings, and 0 hints.
  - Astro built 7 static pages.
- Generated HTML contains `/Sliders/`-prefixed stylesheet, script, notes,
  slides, image, and standalone demo links.
- Generated HTML scan found no root-relative `href` or `src` values outside
  `/Sliders/`.
- User updated the GitHub Pages Build and deployment source setting and approved
  the phase.

## Known Limitations And Notes

- The deployment workflow runs on pushes to `main` and manual
  `workflow_dispatch` runs.
- The configured production URL assumes the repository remains named `Sliders`
  under the `stungeye` account.
- If the site moves to a custom domain, remove or change the Astro `base` value
  according to Astro's GitHub Pages guidance.
- No backend or runtime server is required.

## MVP Completion Status

The MVP deployment phase is complete. Remaining future work should come from the
deferred-work list in `IMPLEMENTATION_PLANS.md` or from new course content and
demo authoring needs.

## Phase Closeout Status

Implementation, tests, production build, generated-output verification, user
repository setting confirmation, user verification, plan marking, and git commit
are complete.
