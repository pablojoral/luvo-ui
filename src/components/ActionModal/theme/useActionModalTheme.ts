import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

// Inline color constants to avoid importing from luvo-mobile
const COLOR_RED_50 = '#fbeef0';
const COLOR_RED_600 = '#FF3B3B';

export const useActionModalTheme = (variant: 'destructive' | 'neutral' = 'neutral') => {
  const theme = useBaseTheme();

  const isDestructive = variant === 'destructive';

  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: theme.overlayColor.modal,
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing['spacing-xl'],
    },
    card: {
      backgroundColor: theme.surfaceColor['surface-primary'],
      borderRadius: theme.cornerRad['corner-rad-xxxl'],
      padding: theme.spacing['spacing-xl'],
      width: '100%',
      maxWidth: theme.componentSize.cardMaxWidth,
      alignItems: 'center',
      ...theme.shadowFloating,
    },
    iconContainer: {
      width: theme.componentSize.iconContainer,
      height: theme.componentSize.iconContainer,
      borderRadius: theme.cornerRad['corner-rad-full'],
      backgroundColor: isDestructive
        ? COLOR_RED_50
        : theme.surfaceColor['surface-background'],
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing['spacing-md'],
    },
    title: {
      textAlign: 'center',
      marginBottom: theme.spacing['spacing-xs'],
    },
    body: {
      textAlign: 'center',
      marginBottom: theme.spacing['spacing-xl'],
    },
    actions: {
      width: '100%',
      gap: theme.spacing['spacing-xs'],
    },
    confirmButton: {
      width: '100%',
      backgroundColor: isDestructive
        ? COLOR_RED_600
        : theme.surfaceColor['surface-invert'],
      borderRadius: theme.cornerRad['corner-rad-lg'],
      paddingVertical: theme.spacing['spacing-md'],
      alignItems: 'center',
    },
    cancelButton: {
      width: '100%',
      borderRadius: theme.cornerRad['corner-rad-lg'],
      paddingVertical: theme.spacing['spacing-sm'],
      alignItems: 'center',
    },
  });

  return { styles };
};
