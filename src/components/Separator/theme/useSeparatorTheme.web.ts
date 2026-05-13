import { useMemo } from 'react';
import type { CSSProperties } from 'react';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import { toPx } from '../../../web/cssAdapter';

export const useSeparatorTheme = (direction: 'horizontal' | 'vertical') => {
  const theme = useBaseTheme();

  const style: CSSProperties = useMemo(
    () =>
      direction === 'vertical'
        ? {
            display: 'inline-block',
            width: toPx(theme.spacing['spacing-sm']),
            alignSelf: 'stretch',
          }
        : {
            display: 'block',
            width: '100%',
            height: toPx(theme.spacing['spacing-sm']),
          },
    [direction, theme],
  );

  return { style };
};
