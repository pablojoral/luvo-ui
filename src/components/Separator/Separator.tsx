import React, { memo } from 'react';
import { View } from 'react-native';
import { useSeparatorTheme } from './theme/useSeparatorTheme';
import type { SeparatorProps } from './types';

export const Separator = memo(({ direction = 'horizontal' }: SeparatorProps) => {
  const { style } = useSeparatorTheme(direction);
  return <View style={style} />;
});
