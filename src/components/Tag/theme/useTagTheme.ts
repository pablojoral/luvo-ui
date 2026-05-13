import { useMemo } from 'react';
import type { ViewStyle } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import type { BorderColor, SurfaceColor } from '../../../tokens/types';

interface TagThemeParams {
  readonly surfaceColor: SurfaceColor;
  readonly borderColor: BorderColor;
  readonly fullWidth: boolean;
  readonly disabled: boolean;
}

export const useTagTheme = ({ surfaceColor, borderColor, fullWidth, disabled }: TagThemeParams) => {
  const theme = useBaseTheme();

  const containerStyle: ViewStyle = useMemo(() => {
    return {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing['spacing-xxs'],
      borderWidth: 1,
      borderRadius: theme.cornerRad['corner-rad-full'],
      backgroundColor: disabled ? theme.surfaceColor['surface-disabled'] : theme.surfaceColor[surfaceColor],
      borderColor: disabled ? theme.borderColor['border-disabled'] : theme.borderColor[borderColor],
      paddingVertical: theme.spacing['spacing-xs'],
      paddingHorizontal: theme.spacing['spacing-md'],
      ...(fullWidth ? { flexGrow: 1, flexShrink: 1 } : { alignSelf: 'center' }),
    };
  }, [theme, surfaceColor, borderColor, fullWidth, disabled]);

  return { containerStyle };
};
