import React, { memo } from 'react';
import { useSeparatorTheme } from './theme/useSeparatorTheme.web';
import type { SeparatorProps } from './types';

export const Separator = memo(({ direction = 'horizontal' }: SeparatorProps) => {
  const { style } = useSeparatorTheme(direction);

  // <hr> carries native horizontal rule semantics for horizontal; for vertical we
  // use a <div role="separator"> to preserve correct ARIA direction.
  if (direction === 'horizontal') {
    return <hr style={{ ...style, border: 'none' }} aria-orientation="horizontal" />;
  }

  return <div role="separator" aria-orientation="vertical" style={style} />;
});
