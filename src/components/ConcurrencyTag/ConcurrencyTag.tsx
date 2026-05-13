import React from 'react';
import { View } from 'react-native';
import { Text } from '../Text/Text';
import { useConcurrencyTag } from './hooks/useConcurrencyTag';
import { useConcurrencyTagTheme } from './theme/useConcurrencyTagTheme';
import type { ConcurrencyTagProps } from './types';

export const ConcurrencyTag = ({ available, total, labels }: ConcurrencyTagProps) => {
  const { label, color } = useConcurrencyTag({ available, total, labels });
  const { styles, dotStyle } = useConcurrencyTagTheme(color);

  return (
    <View style={styles.row}>
      <View style={dotStyle} />
      <Text fontSize="font-size-sm" color={color}>{label}</Text>
    </View>
  );
};
