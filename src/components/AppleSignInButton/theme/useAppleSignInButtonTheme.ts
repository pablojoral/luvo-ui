import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

export const useAppleSignInButtonTheme = () => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    button: {
      borderRadius: theme.cornerRad['corner-rad-full'],
      backgroundColor: '#000000',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing['spacing-xs'],
      paddingVertical: theme.spacing['spacing-sm'],
      paddingHorizontal: theme.spacing['spacing-md'],
    },
  });

  return { styles };
};
