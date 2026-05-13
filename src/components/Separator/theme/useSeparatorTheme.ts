import { useMemo } from 'react';
import type { ViewStyle } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

export const useSeparatorTheme = (direction: 'horizontal' | 'vertical') => {
  const theme = useBaseTheme();

  const style: ViewStyle = useMemo(
    () =>
      direction === 'vertical'
        ? {
            width: theme.spacing['spacing-sm'],
          }
        : {
            height: theme.spacing['spacing-sm'],
          },
    [direction, theme],
  );

  return { style };
};
