import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../../../theme/useBaseTheme';

export const useSettingsMenuItemTheme = () => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing['spacing-md'],
      paddingVertical: theme.spacing['spacing-xs'],
      paddingHorizontal: theme.spacing['spacing-sm'],
    },
    label: {
      flex: 1,
    },
  });

  return { styles, theme };
};
