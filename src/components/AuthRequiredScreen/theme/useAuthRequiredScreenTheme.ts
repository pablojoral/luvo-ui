import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

export const useAuthRequiredScreenTheme = () => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: theme.spacing['spacing-xl'],
      // navBarHeight is an RN-only extended field — not in BaseTheme.
      // Consumers apply nav bar insets in their own layout wrapper.
      paddingBottom: theme.spacing['spacing-xl'],
      backgroundColor: theme.surfaceColor['surface-invert'],
    },
    contentContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing['spacing-md'],
      paddingHorizontal: theme.spacing['spacing-xl'],
    },
  });

  return { styles, theme };
};
