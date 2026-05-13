import React from 'react';
import { Pressable, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Text } from '../Text/Text';
import { useAnimatedStyles } from './hooks/useAnimatedStyles';
import { usePillSelectorTheme } from './theme/usePillSelectorTheme';
import type { PillSelectorProps } from './types';

export const PillSelector = ({
  options,
  value,
  onChange,
  backgroundColor = 'surface-primary',
  thumbColor = 'surface-invert',
  ...props
}: PillSelectorProps) => {
  const { styles } = usePillSelectorTheme({ backgroundColor, thumbColor });
  const { thumbStyle, segmentWidthStyle, onLayout, handlePress } = useAnimatedStyles({
    options,
    value,
    onChange,
  });

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container} onLayout={onLayout} {...props}>
        {/* Thumb */}
        <Animated.View style={[styles.thumb, thumbStyle, segmentWidthStyle]} />

        {/* Segments */}
        <View style={styles.row}>
          {options.map((o, i) => (
            <Pressable
              key={o.value}
              style={[styles.segment, segmentWidthStyle]}
              onPress={() => handlePress(i)}
            >
              <Text fontSize="font-size-sm" fontWeight="medium">
                {o.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};
