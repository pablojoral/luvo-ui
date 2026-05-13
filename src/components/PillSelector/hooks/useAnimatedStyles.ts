import { useCallback, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import type { SelectorOption } from '../types';

interface UseAnimatedStylesParams {
  readonly options: SelectorOption[];
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export const useAnimatedStyles = ({ options, value, onChange }: UseAnimatedStylesParams) => {
  const [containerW, setContainerW] = useState(0);
  const index = Math.max(
    0,
    options.findIndex(o => o.value === value),
  );
  const segmentW = containerW > 0 ? containerW / options.length : 0;

  // translateX holds the current index (0, 1, 2…), multiplied by segmentW in the style
  const translateX = useSharedValue(index);
  const progress = useDerivedValue(() => translateX.value);

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(progress.value * segmentW) }],
  }));
  const segmentWidthStyle = containerW > 0 ? { width: segmentW } : {};

  const onLayout = (e: LayoutChangeEvent) => {
    setContainerW(e.nativeEvent.layout.width);
    translateX.value = index;
  };

  const handlePress = useCallback(
    (i: number) => {
      translateX.value = withSpring(i);
      if (i !== index) onChange(options[i]!.value);
    },
    [index, options, onChange, translateX],
  );

  return {
    thumbStyle,
    segmentWidthStyle,
    onLayout,
    handlePress,
  };
};
