import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

export const useAuthModeToggleTheme = () => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing['spacing-xxxs'],
    },
  });

  return { styles };
};
