import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { Text } from '../Text/Text';
import { useButtonTheme } from './theme/useButtonTheme';
import { fontSizeMap, fontWeightMap, textColorMap } from './hooks/useButton';
import type { ButtonProps } from './types';

export const Button = ({
  label,
  variant = 'primary',
  size = 'md',
  onPress,
  disabled,
  submitting,
  fullWidth,
  rounded,
}: ButtonProps) => {
  const { containerStyle, contentContainerStyle, contentStyle, labelStyle } = useButtonTheme({
    variant,
    size,
    fullWidth,
    rounded,
  });

  return (
    <TouchableOpacity
      disabled={disabled ?? submitting}
      onPress={onPress}
      style={containerStyle}
    >
      <View style={contentContainerStyle}>
        {submitting ? (
          <ActivityIndicator color={textColorMap[variant]} size="small" />
        ) : (
          <View style={contentStyle}>
            {label ? (
              <Text
                fontSize={fontSizeMap[size]}
                color={textColorMap[variant]}
                fontWeight={fontWeightMap[variant][size]}
                style={labelStyle}
              >
                {label}
              </Text>
            ) : null}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
