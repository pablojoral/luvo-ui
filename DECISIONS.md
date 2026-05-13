# Architectural Decisions — luvo-ui

Append-only log. Never edit past entries — add a superseding entry instead.
Before recommending a design change in this project, grep here for the area you're touching.

## Index

| # | Date | Title | Status |
|---|------|-------|--------|
| ADR-001 | 2026-05-14 | `@luvo/ui` becomes canonical source for all shared UI components | Accepted |
| ADR-002 | 2026-05-14 | `@luvo/ui` absorbs full theme (DefaultTheme, DarkTheme, useTheme) and all shared components | Accepted |

## Entries

<!--
TEMPLATE for new entries — copy the block below, drop the comment markers, fill in.

### ADR-XXX: <title>
**Date:** YYYY-MM-DD
**Status:** Accepted | Superseded by ADR-YYY

**Context:**
What situation or constraint prompted this decision?

**Decision:**
What was decided and why?

**Rejected alternatives:**
What else was considered and why it was ruled out?

**Consequences:**
What does this enable, constrain, or defer?
-->

### ADR-001: `@luvo/ui` becomes canonical source for all shared UI components
**Date:** 2026-05-14
**Status:** Accepted

**Context:**
`luvo-mobile` had local component implementations of `Text`, `Button`, `ActivityIndicator`, `Separator`, `TextInput`, and `Switch` under `src/components/`. A new Luvo admin web app needs to share the same design system components. `@luvo/ui` existed as a shared package (GitHub: `pablojoral/luvo-ui`) but had incomplete prop coverage — missing `iconName`, `alignLeft`, `onBlur`, `onFocus`, `autoCapitalize`, `keyboardType`, `multiline`, `style`, and `textStyle` on various components.

**Decision:**
`@luvo/ui` is the canonical, authoritative source for all shared UI components. The full prop surface, platform splits, headless hooks, and theme hooks from `luvo-mobile`'s existing implementations were ported into `@luvo/ui` to achieve parity. Components in `luvo-mobile` are now thin re-export shims pointing to `@luvo/ui`. When props need to change, the change goes into `@luvo/ui` first; consuming apps then update their SHA pin. References: luvo-ui PR #2 (`https://github.com/pablojoral/luvo-ui/pull/2`), luvo-mobile PR #54 (`https://github.com/pablojoral/luvo-mobile/pull/54`). See also: luvo-mobile `DECISIONS.md` entry 2026-05-14 (ADR-011).

**Rejected alternatives:**
- Keeping components duplicated in each app: drift risk across mobile and web implementations defeats the purpose of a shared package.
- Adapting `luvo-mobile` call sites to a reduced `@luvo/ui` API: would require extensive refactoring of all existing consumers with no benefit — the correct fix was to bring `@luvo/ui` up to the mobile prop surface.

**Consequences:**
- Any prop surface change to the 6 shared components (`Text`, `Button`, `ActivityIndicator`, `Separator`, `TextInput`, `Switch`) requires a PR here in `luvo-ui` first, followed by a SHA bump in each consuming app.
- The admin app can consume `@luvo/ui` directly with the same component API `luvo-mobile` uses — no per-app adaptation needed.
- Mobile-only components (`BottomSheet`, `ScreenHeader`, `SvgIcon`, etc.) remain in their respective apps and are explicitly out of scope for this package per luvo-mobile ADR-010.

---

### ADR-002: `@luvo/ui` absorbs full theme (DefaultTheme, DarkTheme, useTheme) and all shared components
**Date:** 2026-05-14
**Status:** Accepted

**Context:**
luvo-ui previously only exported `BaseTheme` + `useBaseTheme` and 6 base components. The admin app needs to share the full component+theme surface with luvo-mobile. luvo-mobile's theme included `MobileThemeExtras` (safe-area insets, nav bar height, z-index) that `useTheme` exposes — splitting these across the package boundary would force the admin app to reconstruct mobile-only tokens it does not need, or fall back to an incomplete `BaseTheme`.

**Decision:**
luvo-ui now owns the full theme: `DefaultTheme`, `DarkTheme`, `useTheme` (primary hook), and all theme types. `useTheme` is the primary exported hook; `useBaseTheme` remains for backward compatibility but is treated as internal. `react-native-safe-area-context` is added as an optional peer dep (required for `topInset`/`bottomInset`). The web variant of `useTheme` returns `topInset = bottomInset = 0` (no native safe-area dependency). All components from luvo-mobile are ported into this package, excluding `WsStatusIndicator` and `LoadErrorState`. `LoadErrorState` is explicitly excluded from luvo-ui exports. PR ref: luvo-ui PR #2 (`https://github.com/pablojoral/luvo-ui/pull/2`). See also: luvo-mobile `DECISIONS.md` entry ADR-012 (2026-05-14).

**Rejected alternatives:**
- Keep theme split (`BaseTheme` in luvo-ui, `MobileThemeExtras` in luvo-mobile): rejected because the admin app needs the same full token set, and a split forces all consumers to assemble their own theme from two sources.

**Consequences:**
- All `@luvo/ui` consumers get the full token set; mobile-only tokens (insets) are `0` on web, which is acceptable.
- Any future token additions go into luvo-ui and are bumped in all consuming apps — there is no longer a local theme to patch per-app.
