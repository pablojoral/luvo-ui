import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

export const useErrorScreenTheme = () => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      // topInset and bottomInset are RN-only extended fields — not in BaseTheme.
      // Consumers apply safe-area insets in their own layout wrapper.
      paddingTop: theme.spacing['spacing-xl'],
      paddingBottom: theme.spacing['spacing-xl'],
      paddingHorizontal: theme.spacing['spacing-xl'],
      backgroundColor: theme.surfaceColor['surface-background'],
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing['spacing-md'],
    },
  });

  return { styles, theme };
};
