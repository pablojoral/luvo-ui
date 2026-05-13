import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import type { SurfaceColor } from '../../../tokens/types';

interface PillSelectorThemeParams {
  readonly backgroundColor: SurfaceColor;
  readonly thumbColor: SurfaceColor;
}

export const usePillSelectorTheme = ({ backgroundColor, thumbColor }: PillSelectorThemeParams) => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    outerContainer: {
      borderRadius: theme.cornerRad['corner-rad-full'],
      backgroundColor: theme.surfaceColor[backgroundColor],
      padding: theme.spacing['spacing-xxs'],
      borderWidth: theme.borderWidth['border-width-xs'],
      borderColor: theme.borderColor['border-invert'],
    },
    container: {
      position: 'relative',
      justifyContent: 'center',
    },
    thumb: {
      position: 'absolute',
      height: '100%',
      backgroundColor: theme.surfaceColor[thumbColor],
      borderRadius: theme.cornerRad['corner-rad-full'],
    },
    row: {
      flexDirection: 'row',
    },
    segment: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: theme.spacing['spacing-sm'],
    },
  });

  return { styles, theme };
};
