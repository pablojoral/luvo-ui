import { useMemo } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import {
  borderColorMap,
  spacingMap,
  surfaceColorMap,
  textDecorationMap,
} from '../hooks/useButton';
import type { ButtonSize, ButtonVariant } from '../../../tokens/types';

interface UseButtonThemeParams {
  readonly variant: ButtonVariant;
  readonly size: ButtonSize;
  readonly rounded?: boolean;
  readonly fullWidth?: boolean;
  readonly alignLeft?: boolean;
}

export const useButtonTheme = ({ variant, size, rounded, fullWidth, alignLeft }: UseButtonThemeParams) => {
  const theme = useBaseTheme();

  const contentContainerStyle: ViewStyle = useMemo(() => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: alignLeft ? 'flex-start' : 'center',
    borderWidth: 1,
    borderRadius: rounded ? theme.cornerRad['corner-rad-full'] : theme.cornerRad['corner-rad-lg'],
    backgroundColor: theme.surfaceColor[surfaceColorMap[variant]],
    borderColor: theme.borderColor[borderColorMap[variant]],
    padding: theme.spacing[spacingMap[variant][size]],
  }), [rounded, variant, size, alignLeft, theme]);

  const contentStyle: ViewStyle = useMemo(() => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing['spacing-xs'],
  }), [theme]);

  const containerStyle: ViewStyle = useMemo(
    () => (fullWidth ? { flexGrow: 1, flexShrink: 1 } : {}),
    [fullWidth],
  );

  // textDecorationLine is a Text-specific style not in TextProps — passed as style override
  const labelStyle: TextStyle | undefined = useMemo(() => {
    const decoration = textDecorationMap[variant];
    return decoration ? { textDecorationLine: decoration } : undefined;
  }, [variant]);

  return { containerStyle, contentContainerStyle, contentStyle, labelStyle };
};
