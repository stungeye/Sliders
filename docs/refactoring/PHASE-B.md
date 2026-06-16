# Phase B Refactoring Context

Date: 2026-06-15

## Status

Phase B documentation alignment was implemented and is ready for user verification.

## Decisions Made

- Kept the existing plural implementation-plan filename, `IMPLEMENTATION_PLANS.md`, and documented that filename explicitly in the README instead of renaming the file.
- Updated user-facing project language from planned/foundation wording to completed static MVP wording.
- Documented the Phase A authoring and implementation contracts:
  - module files are direct `.mdx` children of unit folders
  - nested unit subfolders are for assets
  - modules do not require frontmatter or local imports
  - MVP heading support assumes plain text `#` and `##` headings
  - registered demos use simple PascalCase MDX tags
  - unregistered uppercase MDX component tags fail validation
- Replaced stale implementation-question language with final MVP decisions around Astro MDX rendering, explicit demo registration, custom TOC generation, fixed light theme tokens, React, slide DOM grouping, and manual slide overflow discipline.
- Clarified the current demo runtime guidance without resolving Phase C: demos embedded through MDX currently render deterministic static markup, and production browser interaction is attached through registered client enhancement unless a route intentionally hydrates a demo.
- Corrected the demo guide's slide-controller reference from the non-existent `src/lib/slideNavigation.js` to `src/lib/slideDeckController.js`.

## Files Changed

- `README.md`
- `docs/DEMO_AGENT_GUIDE.md`
- `docs/implementation/IMPLEMENTATION_PLANS.md`
- `docs/implementation/PHASE-05.md`
- `docs/implementation/SPEC.md`
- `docs/refactoring/CODE_REVIEW_RECOMMENDATIONS.md`
- `docs/refactoring/PHASE-B.md`

## Checks Performed

- `git diff --check`
- `rg "Open Implementation Questions|src/content/units/\*\*/\*\*/\*\.mdx|src/content/units/\*\*/\*\.mdx|src/lib/slideNavigation\.js|Planned Source Layout|Planned URLs|foundation for the MVP|React state for values|Prefer React state" README.md docs/implementation docs/DEMO_AGENT_GUIDE.md`
- `cmd.exe /c npm run build`

## Known Limitations

- Phase B intentionally did not change runtime code.
- The Grid Explorer split runtime model remains a Phase C task. The demo guide documents the current production behavior and cautions future agents not to rely on unhydrated React event handlers.
- The recommendation document still contains the original DOC issue descriptions for historical context, even though the target documents have now been updated.
