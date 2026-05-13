import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

export const useSafeScreenHeaderTheme = () => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    wrapper: {
      // topInset is a luvo-mobile extended theme field; consuming apps should apply
      // SafeAreaView or their own inset padding above this component.
      paddingTop: theme.spacing['spacing-xl'],
      backgroundColor: theme.surfaceColor['surface-primary'],
    },
  });

  return { styles };
};
