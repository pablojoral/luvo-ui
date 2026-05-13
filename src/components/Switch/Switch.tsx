import React from 'react';
import { Animated, Pressable } from 'react-native';
import { useSwitchAnimation } from './hooks/useSwitchAnimation';
import { useSwitchTheme } from './theme/useSwitchTheme';
import type { SwitchProps } from './types';

export const Switch = ({ value, onValueChange, disabled = false }: SwitchProps) => {
  const { trackOverlayStyle, thumbStyle, trackStyle, thumbTravel } = useSwitchTheme(disabled);
  const { translateX, trackOpacity } = useSwitchAnimation(value, thumbTravel);

  return (
    <Pressable
      onPress={() => !disabled && onValueChange(!value)}
      style={trackStyle}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
    >
      <Animated.View style={[trackOverlayStyle, { opacity: trackOpacity }]} />
      <Animated.View style={[thumbStyle, { transform: [{ translateX }] }]} />
    </Pressable>
  );
};
