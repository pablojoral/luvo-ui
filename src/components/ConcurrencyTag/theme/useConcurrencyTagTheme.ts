import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import type { FontColor } from '../../../tokens/types';

export const useConcurrencyTagTheme = (color: FontColor) => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing['spacing-xs'],
    },
  });

  const dotStyle: ViewStyle = useMemo(() => {
    const size = theme.spacing['spacing-xs'];
    return {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: theme.fontColor[color],
    };
  }, [color, theme]);

  return { styles, dotStyle };
};
