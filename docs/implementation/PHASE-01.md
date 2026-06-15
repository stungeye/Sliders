# Phase 1: Project Scaffold

## Summary

Phase 1 created the Astro project foundation for Sliders. The scaffold supports MDX, React islands, static production builds, baseline testing, syntax-highlighted Markdown code blocks, and the source layout planned in `docs/implementation/SPEC.md`.

## Decisions Made

- Used Astro 6 with `output: "static"` for GitHub Pages-compatible static builds.
- Added `@astrojs/mdx` for MDX authoring.
- Added `@astrojs/react` for React-based interactive demos.
- Added Vitest with jsdom and Testing Library for component and utility tests.
- Configured Shiki through Astro's Markdown settings with the `github-light` theme and common web languages.
- Added a minimal MDX home page that proves MDX can render:
  - Markdown content
  - an Astro component
  - a React island
  - a syntax-highlighted code block
- Added fixed light theme tokens in a global stylesheet as the starting point for later notes, slides, callouts, and demos.
- Added `.gitkeep` files for planned directories that do not yet contain implementation files.
- Added `.gitignore` for generated Astro output, dependencies, environment files, and logs.

## Files Added Or Changed

- `.gitignore`
- `astro.config.mjs`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `vitest.config.mjs`
- `vitest.setup.js`
- `src/env.d.ts`
- `src/pages/index.mdx`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `src/components/ThemeSample.astro`
- `src/components/ReactCounter.jsx`
- `src/components/ReactCounter.test.jsx`
- `src/content/units/.gitkeep`
- `src/demos/.gitkeep`
- `src/lib/.gitkeep`

## Commands Run

```text
cmd.exe /c npm install
cmd.exe /c npm test
cmd.exe /c npm run build
cmd.exe /c npm audit --omit=dev
cmd.exe /c npm list astro @astrojs/mdx @astrojs/react vite esbuild --depth=1
cmd.exe /c npm list react react-dom typescript vitest jsdom @astrojs/check @testing-library/react @testing-library/user-event @testing-library/jest-dom @types/react @types/react-dom --depth=0
Start-Process ... npm run dev -- --host 127.0.0.1 --port 4321
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:4321/
```

## Verification

- `npm test` passed.
  - 1 test file passed.
  - 1 test passed.
- `npm run build` passed.
  - `astro check` reported 0 errors, 0 warnings, and 0 hints.
  - Astro built 1 static page.
- `npm run dev -- --host 127.0.0.1 --port 4321` started successfully.
- `http://127.0.0.1:4321/` responded with HTTP 200.
- User verified the local page:
  - `ThemeSample` rendered.
  - `ReactCounter` worked.
  - syntax-highlighted code block rendered.

## Known Limitations And Notes

- No content discovery, course index generation, notes routes, or slide routes exist yet. Those begin in later phases.
- No sample course modules have been added yet.
- `npm audit --omit=dev` reported current Astro/Vite/esbuild transitive advisories. The suggested fix was `npm audit fix --force`, which would perform a breaking downgrade, so dependencies were left on the current working Astro 6 stack.
- Astro telemetry printed its first-run notice during the initial build. No project setting was changed for telemetry.

## Recommended Starting Point For Phase 2

Begin by adding realistic sample module folders under `src/content/units/`, then implement convention-based discovery utilities in `src/lib/` with tests for ordering, route slug generation, numeric-prefix display cleanup, and first `# H1` title extraction.
