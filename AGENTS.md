# AGENTS.md

This file is for coding agents working in `C:\Omair\Projects\omair-portfolio`.
It documents the current repository conventions and safe defaults.

## 1) Project Snapshot

- Framework: Nuxt 4 (`nuxt@^4.3.1`) with Vue 3 + TypeScript.
- UI stack: Tailwind CSS v4, shadcn-nuxt, Reka UI, Lucide/Tabler icons.
- Validation/forms: `vee-validate`, `zod`, `@vee-validate/zod`.
- State: Pinia module is installed (`@pinia/nuxt`).
- Utilities: VueUse (`@vueuse/core`, `@vueuse/nuxt`).
- Package manager: npm (`package-lock.json` present).

## 2) Source Layout

- App root: `app/` (Nuxt app directory mode).
- Layouts: `app/layouts/`.
- Pages/routes: `app/pages/`.
- Components: `app/components/`.
- UI primitives: `app/components/ui/`.
- Shared helpers: `app/lib/`, `app/types/`, `app/utils/`.
- Styling entry: `app/assets/css/tailwind.css`.
- Nuxt config: `nuxt.config.ts`.
- TS project refs: `tsconfig.json` (references `.nuxt/*` configs).

## 3) Commands

Run commands from repository root.

### Core commands (from `package.json`)

- Install deps: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Static generate: `npm run generate`
- Preview build: `npm run preview`
- Nuxt prepare (auto on install): `npm run postinstall`

### Type checking

- Full typecheck: `npx nuxi typecheck`

### Lint/format status

- No lint script is currently defined in `package.json`.
- No Prettier config found (`.prettierrc*`, `prettier.config.*`).
- No ESLint config found (`.eslintrc*`, `eslint.config.*`).
- If you add linting, prefer adding npm scripts instead of ad-hoc commands.

### Test status

- No test runner config is currently present (no Vitest/Jest/Playwright config).
- No test script exists in `package.json`.
- No `*.spec.*` / `*.test.*` files detected in app code.

### Running a single test (when tests are added)

If Vitest is adopted (recommended for this stack), use:

- Run all tests: `npx vitest run`
- Run one file: `npx vitest run path/to/file.spec.ts`
- Run one named test: `npx vitest run path/to/file.spec.ts -t "test name"`
- Watch one file: `npx vitest path/to/file.spec.ts`

If Playwright is added for E2E, use:

- One spec file: `npx playwright test tests/e2e/example.spec.ts`
- One test by title: `npx playwright test -g "title text"`

## 4) Cursor/Copilot Rules Check

- `.cursor/rules/`: not found.
- `.cursorrules`: not found.
- `.github/copilot-instructions.md`: not found.
- Therefore, no extra editor-agent rule files are currently enforced.
- Re-check these paths before major automation if repo structure changes.

## 5) Code Style: High-Level

- Prefer Vue SFCs with `<script setup lang="ts">`.
- Keep TypeScript enabled for all new logic files.
- Use Composition API patterns; avoid Options API for new code.
- Follow existing file-local style when editing old files.
- Keep components focused; split large feature logic into smaller units.

## 6) Imports and Module Boundaries

- Use alias imports for app internals: `@/`.
- Available aliases include `@/components`, `@/lib`, `@/composables`.
- Prefer absolute alias imports over deep relative paths.
- Order imports in this sequence:
  1. Type-only imports (`import type ...`).
  2. Vue/Nuxt core imports.
  3. Third-party libraries.
  4. Internal alias imports (`@/...`).
  5. Relative imports (`./...`, `../...`).
- Separate import groups with one blank line.
- Prefer named exports from `index.ts` barrels for UI primitives.

## 7) Formatting Conventions

- Match existing formatting in the file you touch.
- Keep line length reasonable; avoid overly wrapped templates.
- Do not introduce semicolons into files that consistently omit them.
- Keep template markup readable with consistent indentation.
- Keep one logical statement per line in complex reactive setups.
- Avoid trailing whitespace.

## 8) TypeScript Conventions

- Prefer explicit interfaces/types for props and domain models.
- Use primitive `string`/`number`/`boolean` (avoid `String`/`Number`).
- Use `import type` whenever importing only types.
- Avoid `any`; use unions/generics/unknown with narrowing.
- Prefer narrow, intentional unions over broad nullable unions.
- Keep shared domain types in `app/types/`.
- Co-locate component-only types near the component.

## 9) Vue/Nuxt Conventions

- Use `definePageMeta` in page files for layout/meta needs.
- Use `withDefaults(defineProps<...>(), ...)` for defaulted props.
- Keep page components thin; move reusable UI into `app/components/`.
- Prefer composables for reusable stateful logic once repeated.
- Use Nuxt auto-imports where conventional, but stay explicit when clarity helps.

## 10) Naming Conventions

- UI primitive components: PascalCase filenames (existing pattern in `ui/*`).
- Shared/feature component filenames currently vary; keep existing folder style.
- For new non-UI shared components, prefer PascalCase for consistency.
- Page route folders/files: lowercase and route-oriented naming.
- Variables/functions: `camelCase`.
- Types/interfaces: `PascalCase`.
- Constants: `UPPER_SNAKE_CASE` only for true constants.

## 11) Styling and UI Rules

- Use Tailwind utility classes as first choice.
- Use `cn()` from `@/lib/utils` to merge conditional classes.
- Prefer `cva()` for variant-based component styles.
- Reuse design tokens defined in `app/assets/css/tailwind.css`.
- Avoid hardcoded colors when a token/utility exists.
- Keep dark-mode compatibility in mind (`.dark` variables are configured).

## 12) Validation, Forms, and Data Safety

- Prefer schema validation with Zod for form payloads.
- Use `vee-validate` form primitives already present in repo.
- Keep validation messages user-friendly and actionable.
- Normalize form values before submit when needed.
- Do not log sensitive user data.

## 13) Error Handling Guidelines

- Wrap async operations in `try/catch`.
- Never swallow errors silently.
- Surface user-safe messages in UI for recoverable failures.
- Log technical context in development paths only.
- Fail fast on invalid assumptions; validate inputs early.
- Return typed error states instead of ambiguous falsy values.

## 14) Agent Workflow Expectations

- Before editing, scan nearby files for local conventions.
- Make minimal, targeted changes; avoid unrelated refactors.
- If adding new tooling (lint/test), also add scripts in `package.json`.
- Prefer incremental PR-sized changes over large rewrites.
- If rules files appear later (`.cursor` / Copilot), update this document.
