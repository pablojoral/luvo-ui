import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useBaseTheme } from '../../../theme/useBaseTheme';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

export const useLaundryMapMarkerTheme = () => {
  const theme = useBaseTheme();

  const wrapperStyle = useMemo(
    () => [styles.wrapper, { padding: theme.spacing['spacing-sm'], ...theme.shadowFloating }],
    [theme],
  );

  return { styles, wrapperStyle, theme };
};
