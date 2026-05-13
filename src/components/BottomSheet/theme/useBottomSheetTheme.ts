import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

// Inlined from luvo-mobile Colors constants — not design tokens
const COLOR_SEMI_TRANSPARENT = 'rgba(0, 0, 0, 0.5)';
const COLOR_GREY_100 = '#d5d6d7';

export const useBottomSheetTheme = () => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    backdrop: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: COLOR_SEMI_TRANSPARENT,
    },
    backdropPress: {
      flex: 1,
    },
    sheet: {
      backgroundColor: theme.surfaceColor['surface-primary'],
      borderTopLeftRadius: theme.cornerRad['corner-rad-xxxl'],
      borderTopRightRadius: theme.cornerRad['corner-rad-xxxl'],
      paddingTop: theme.spacing['spacing-sm'],
      paddingBottom: theme.spacing['spacing-xxl'] + theme.spacing['spacing-xs'],
      gap: theme.spacing['spacing-md'],
    },
    handle: {
      width: theme.spacing['spacing-xxxl'],
      height: theme.spacing['spacing-xxs'],
      borderRadius: theme.spacing['spacing-xxs'] / 2,
      backgroundColor: COLOR_GREY_100,
      alignSelf: 'center',
    },
    title: {
      textAlign: 'center',
      paddingHorizontal: theme.spacing['spacing-lg'],
    },
  });

  return { styles };
};
