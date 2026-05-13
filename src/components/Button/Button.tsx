import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { Text } from '../Text/Text';
import { useButtonTheme } from './theme/useButtonTheme';
import { fontSizeMap, fontWeightMap, iconSizeMap, textColorMap } from './hooks/useButton';
import type { ButtonProps } from './types';

export const Button = ({
  label,
  variant = 'primary',
  size = 'md',
  iconName,
  onPress,
  style,
  textStyle,
  fullWidth,
  alignLeft,
  disabled,
  submitting,
  stale,
  rounded,
}: ButtonProps) => {
  const { containerStyle, contentContainerStyle, contentStyle, labelStyle } = useButtonTheme({
    variant,
    size,
    fullWidth,
    rounded,
    alignLeft,
  });

  return (
    <TouchableOpacity
      disabled={disabled || stale || submitting}
      onPress={onPress}
      style={[containerStyle, style]}
    >
      <View style={contentContainerStyle}>
        {submitting ? (
          <ActivityIndicator color={textColorMap[variant]} size="small" />
        ) : (
          <View style={contentStyle}>
            {iconName ? (
              <SvgIcon name={iconName} size={iconSizeMap[size]} color={textColorMap[variant]} />
            ) : null}
            {label ? (
              <Text
                fontSize={fontSizeMap[size]}
                color={textColorMap[variant]}
                fontWeight={fontWeightMap[variant][size]}
                style={[labelStyle, textStyle]}
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
