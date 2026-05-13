import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import type { IconSize } from '../../../tokens/types';

export const useLoaderTheme = (size: IconSize) => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return { styles, iconSize: theme.iconSize[size] };
};
