export { ThemeContext } from './ThemeContext';
export { ThemeProvider } from './ThemeProvider';
export { useBaseTheme } from './useBaseTheme';
export { useTheme } from './hooks/useTheme';
export { DefaultThemeConstants as DefaultTheme } from './themes/DefaultTheme';
export { DarkThemeConstants as DarkTheme } from './themes/DarkTheme';
// Only export types that are NEW in this theme layer (not already in ./tokens).
// Types like SpacingTheme, SurfaceColor, FontColor etc. already come from ./tokens.
export type {
  Theme,
  ThemeConstants,
  ShadowBoxTheme,
  ShadowCardTheme,
  ShadowFloatingTheme,
  ShadowBottomNavTheme,
  LetterSpacingTheme,
  ZIndexTheme,
  ShadowBox,
  TagVariant,
} from './types/Theme';
