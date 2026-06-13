import { StyleSheet } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import type { SkeletonProps } from '../types';

export const useSkeletonTheme = ({
  width = '100%',
  height = 16,
  radius = 'corner-rad-md',
}: SkeletonProps) => {
  const theme = useBaseTheme();

  const styles = StyleSheet.create({
    base: {
      width,
      height,
      borderRadius: theme.cornerRad[radius],
      backgroundColor: theme.surfaceColor['surface-tertiary-subtle'],
      overflow: 'hidden',
    },
    highlight: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.surfaceColor['surface-tertiary'],
      opacity: 0.6,
    },
  });

  return { styles };
};
