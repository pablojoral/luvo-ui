import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useBaseTheme } from '../useBaseTheme';
import { DarkThemeConstants } from '../themes/DarkTheme';
import { DefaultThemeConstants } from '../themes/DefaultTheme';
import type { Theme } from '../types/Theme';

// useTheme is the primary hook for consuming the full theme in RN components.
// It merges the BaseTheme from context (spacing, colors, etc.) with:
//  - safe-area insets (topInset, bottomInset)
//  - fields that extend BaseTheme (navBarHeight, letterSpacing, zIndex, navigation)
//
// The extras are sourced from the same ThemeConstants object the BaseTheme was
// built from. We detect light vs dark by comparing a sentinel surface color.
export const useTheme = (): Theme => {
  const { top, bottom } = useSafeAreaInsets();
  const base = useBaseTheme();

  // Detect which variant is active by matching a sentinel that differs between
  // light and dark. Avoids a second context / prop drilling.
  const isDark =
    base.surfaceColor['surface-primary'] === DarkThemeConstants.surfaceColor['surface-primary'];

  const constants = isDark ? DarkThemeConstants : DefaultThemeConstants;

  return {
    ...base,
    navBarHeight: constants.navBarHeight,
    letterSpacing: constants.letterSpacing,
    zIndex: constants.zIndex,
    navigation: constants.navigation,
    topInset: top,
    bottomInset: bottom,
  };
};
