# Project Agent Guide

## Scope
- Single-page Vite + React + TypeScript portfolio with styled-components.
- Two views: portfolio sections and App Icons subpage.
- Styling is tokenized in the design system and applied via styled-components.

## Key Architecture
- Entry: index.tsx (ThemeProvider + GlobalStyle + App).
- App view state + hash navigation: App.tsx.
- Sections: components/Hero.tsx, components/WorkGallery.tsx, components/About.tsx, components/Footer.tsx.
- Subpage: components/AppIconsSplashScreens.tsx (react-slick carousel).
- Tokens: design-system/tokens.ts, theme.ts, globalStyles.ts.
- Data: constants.ts (projects, skills, socials).
- i18n: i18n.tsx (useLanguage hook + translations).

## How Navigation Works
- Hash anchors map to SectionId in types.ts.
- AppIcons view uses #app-icons (AppView.APP_ICONS) and is not a section anchor.
- When switching views, App.tsx manages smooth scrolling and state updates.

## Styling Rules
- Do not add Tailwind classes or inline styles unless explicitly asked.
- Use styled-components + tokens (colors, spacing, radii, typography).
- Keep typography on the strict modular scale defined in design-system/tokens.ts.

## Editing Guidelines (high-signal)
- Prefer small, complete changes that keep UI and behavior consistent.
- Reuse existing tokens, patterns, and component structure.
- Avoid new dependencies unless necessary; if added, update package.json and package-lock.json.
- Keep translations in i18n.tsx; avoid hardcoding new copy when a translation is expected.
- Use utils/assetUrl.ts for any local assets to ensure Vite bundles them correctly (especially on GitHub Pages).

## Carousel (App Icons)
- Uses react-slick center mode and slick-carousel styles.
- Arrow buttons are custom in AppIconsSplashScreens.tsx.
- If updating carousel behavior, keep centerMode and responsive breakpoints aligned with current settings.

## Common Changes
- Add new section: create styled component under components/, add to App.tsx and SectionId.
- Add project card: update constants.ts PROJECTS list; WorkGallery reads from it.
- Change tokens: update design-system/tokens.ts and verify components render properly.

## Best Prompting Practices (adapted)
- State the goal, exact files to change (if known), and any constraints.
- Provide examples or screenshots if visual output is important.
- If you want a change across many components, say so explicitly.
- If behavior should not change, say “style-only change” to avoid logic edits.

## Tests / Checks
- Local dev: npm run dev
- Build check: npm run build

## Files to Avoid Editing Without Intent
- services/geminiService.ts and components/ChatWidget.tsx are placeholders.
