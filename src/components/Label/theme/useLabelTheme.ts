import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

export const useLabelTheme = () => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing['spacing-xxs'],
    },
    text: {
      flex: 1,
      flexShrink: 1,
    },
  });

  return { styles };
};
