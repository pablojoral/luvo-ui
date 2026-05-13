import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

export const useSettingsMenuTheme = () => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    container: {
      gap: theme.spacing['spacing-md'],
    },
  });

  return { styles, theme };
};
