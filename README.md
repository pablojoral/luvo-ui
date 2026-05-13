# @luvo/ui

Luvo shared design system and base UI primitives for React Native and web.

---

## Install

```sh
npm install @luvo/ui
```

> **Peer dependencies:** `react ^19`, `react-native ^0.84` (optional — only needed for RN targets), `react-native-svg ^15` (optional).

---

## Setup

Wrap your app root in `ThemeProvider`:

```tsx
import { ThemeProvider, defaultTheme } from '@luvo/ui';

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    {/* ... */}
  </ThemeProvider>
);
```

Swap in `darkTheme` for dark mode:

```tsx
import { ThemeProvider, darkTheme } from '@luvo/ui';

<ThemeProvider theme={darkTheme}>…</ThemeProvider>
```

---

## Theme extension

Spread `defaultTheme` and override specific token groups:

```ts
import { defaultTheme, Colors } from '@luvo/ui';
import type { BaseTheme } from '@luvo/ui';

const brandTheme: BaseTheme = {
  ...defaultTheme,
  fontColor: {
    ...defaultTheme.fontColor,
    'font-highlight': Colors['colors-lavender-600'],
  },
};
```

---

## Components

| Component | Key props |
|---|---|
| `Text` | `fontSize`, `color`, `fontWeight`, `lineHeight`, `textAlign` |
| `Button` | `label`, `variant`, `size`, `onPress`, `disabled`, `submitting`, `fullWidth`, `rounded` |
| `ActivityIndicator` | `color` (FontColor token or raw string), `size` (`'small'` \| `'large'`) |
| `Separator` | `direction` (`'horizontal'` \| `'vertical'`, default `'horizontal'`) |
| `TextInput` | `label`, `error`, `value`, `onChangeText`, `placeholder`, `secureTextEntry`, `editable`, `maxLength`, `color`, `placeholderColor` |
| `Switch` | `value`, `onValueChange`, `disabled` |

All `color` props accept a key from `BaseTheme['fontColor']`, not a raw hex string.

---

## Web entry point

When targeting a web bundler that does not auto-resolve `.web.tsx` platform extensions (Vite, plain Webpack), import from the explicit web path:

```ts
import { Text, Button } from '@luvo/ui/web';
```

Metro and React Native bundlers use the default `@luvo/ui` entry, which resolves `.native` / `.tsx` variants automatically.

---

## How to add a component

Follow the platform-split convention:

1. **Create the folder** — `src/components/<Name>/`
2. **Write `types.ts`** — export `<Name>Props` interface; no `any`, no inline types.
3. **Write `hooks/use<Name>.ts`** — all logic, derived values, event handlers. No platform imports (`react-native`, DOM).
4. **Write `theme/use<Name>Theme.ts`** — RN style hook: `StyleSheet.create` for static, `useMemo` for dynamic. Calls `useBaseTheme()`.
5. **Write `theme/use<Name>Theme.web.ts`** — web style hook: returns plain `CSSProperties` objects. Uses `toPx`/`toCssColor` from `src/web/cssAdapter`.
6. **Write `<Name>.tsx`** (RN) and **`<Name>.web.tsx`** (web) — JSX only, calls the matching theme hook.
7. **Write `index.ts`** — re-exports component and props type.
8. **Register** — add named export to both `src/index.ts` and `src/index.web.ts`.

**Hard rules:**
- All design values come from `useBaseTheme()` — no raw hex or pixel literals in style code.
- Zero `useTranslation` calls inside the package — all user-facing strings are props.
- Named exports only — no `export default`.
- No `any` in props or hook return types.

---

## i18n

This package ships zero `useTranslation` calls. All user-facing strings (labels, error messages, placeholder text) enter as component props. Translate in the consuming app before passing them in.
