import { useBaseTheme } from '../useBaseTheme';
import { DarkThemeConstants } from '../themes/DarkTheme';
import { DefaultThemeConstants } from '../themes/DefaultTheme';
import type { Theme } from '../types/Theme';

// Web variant: safe-area insets are always 0 (no native notch/home indicator).
export const useTheme = (): Theme => {
  const base = useBaseTheme();

  const isDark =
    base.surfaceColor['surface-primary'] === DarkThemeConstants.surfaceColor['surface-primary'];

  const constants = isDark ? DarkThemeConstants : DefaultThemeConstants;

  return {
    ...base,
    navBarHeight: constants.navBarHeight,
    letterSpacing: constants.letterSpacing,
    zIndex: constants.zIndex,
    navigation: constants.navigation,
    topInset: 0,
    bottomInset: 0,
  };
};
