import { useMemo } from 'react';
import type { ViewStyle } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import type { IconSize, SurfaceColor } from '../../../tokens/types';

interface UseIconButtonThemeParams {
  readonly iconSize: IconSize;
  readonly surfaceColor: SurfaceColor;
}

export const useIconButtonTheme = ({ iconSize, surfaceColor }: UseIconButtonThemeParams) => {
  const theme = useBaseTheme();

  const containerStyle: ViewStyle = useMemo(() => {
    const size = theme.iconSize[iconSize] + 16;
    return {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: theme.surfaceColor[surfaceColor],
      alignItems: 'center',
      justifyContent: 'center',
      ...theme.shadowCard,
    };
  }, [iconSize, surfaceColor, theme]);

  return { containerStyle };
};
