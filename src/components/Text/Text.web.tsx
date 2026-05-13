import React from 'react';
import { useTextTheme } from './theme/useTextTheme.web';
import type { TextProps } from './types';

export const Text = ({
  children,
  fontSize = 'font-size-md',
  color = 'font-primary',
  fontWeight = 'regular',
  lineHeight,
  textAlign,
}: TextProps) => {
  const { style } = useTextTheme({ fontSize, color, fontWeight, lineHeight, textAlign });

  return <span style={style}>{children}</span>;
};
