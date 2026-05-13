import React from 'react';
import { View } from 'react-native';
import { Dot } from './components/Dot';
import { useStepIndicatorTheme } from './theme/useStepIndicatorTheme';
import type { StepIndicatorProps } from './types';

export const StepIndicator = ({ total, current }: StepIndicatorProps) => {
  const { styles } = useStepIndicatorTheme();

  if (total <= 1) return null;

  return (
    <View style={styles.row}>
      {Array.from({ length: total }).map((_, i) => (
        <Dot key={i} active={i === current} />
      ))}
    </View>
  );
};
