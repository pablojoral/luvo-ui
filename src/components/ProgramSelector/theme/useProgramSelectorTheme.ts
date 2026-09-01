import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

export const useProgramSelectorTheme = (selected: boolean) => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      gap: theme.spacing['spacing-sm'],
    },
    cardContent: {
      alignItems: 'center',
      gap: theme.spacing['spacing-xxxs'],
    },
  });

  const cardStyle = useMemo(
    () => ({
      flex:            1,
      alignItems:      'center' as const,
      justifyContent:  'center' as const,
      paddingVertical: theme.spacing['spacing-md'],
      paddingHorizontal: theme.spacing['spacing-xs'],
      borderRadius:    theme.cornerRad['corner-rad-lg'],
      borderWidth:     theme.borderWidth['border-width-sm'],
      borderColor:     selected
        ? theme.surfaceColor['surface-invert']
        : theme.borderColor['border-secondary'],
      backgroundColor: selected
        ? theme.surfaceColor['surface-background']
        : theme.surfaceColor['surface-primary'],
    }),
    [selected, theme],
  );

  return { styles, cardStyle };
};
