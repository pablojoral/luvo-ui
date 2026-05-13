import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../../../theme/useBaseTheme';

export const useSelectInputOptionTheme = (selected: boolean, isLast: boolean) => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: theme.spacing['spacing-md'],
      paddingHorizontal: theme.spacing['spacing-lg'],
      borderBottomWidth: isLast ? 0 : theme.borderWidth['border-width-xs'],
      borderBottomColor: theme.borderColor['border-secondary'],
    },
  });

  const containerStyle = useMemo(
    () => [styles.container, selected && { backgroundColor: theme.surfaceColor['surface-button'] }],
    [styles.container, selected, theme],
  );

  return { containerStyle };
};
