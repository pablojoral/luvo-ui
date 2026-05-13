import React, { memo } from 'react';
import { View, StyleSheet, AccessibilityProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import type { FontColor, IconSize } from '../../tokens/types';
import { useBaseTheme } from '../../theme/useBaseTheme';
import { IconName, icons } from './types';

export type SvgIconProps = Omit<SvgProps, 'width' | 'height'> & {
  name: IconName;
  size?: IconSize;
  color?: FontColor;
  style?: import('react-native').ViewStyle;
} & AccessibilityProps;

const SvgIconComponent: React.FC<SvgIconProps> = ({
  name,
  size = 'icon-size-xl',
  color = 'font-primary',
  style,
  accessibilityLabel,
  accessible = true,
  ...rest
}) => {
  const Icon = icons[name];

  const theme = useBaseTheme();

  const sizeValue = theme.iconSize[size] ?? theme.iconSize['icon-size-xl'];
  const colorValue = color ? theme.fontColor[color] : undefined;

  if (!Icon) {
    if (__DEV__) {
      console.warn(`[SvgIcon] Unknown icon name: "${name}"`);
    }
    return <View style={[styles.placeholder, { width: sizeValue, height: sizeValue }, style]} />;
  }

  return (
    <View
      style={[styles.container, { width: sizeValue, height: sizeValue }, style]}
      accessibilityLabel={accessibilityLabel ?? name}
      accessible={accessible}
      accessibilityRole="image"
    >
      <Icon width={sizeValue} height={sizeValue} color={colorValue} {...rest} />
    </View>
  );
};

// Purely structural layout — no design tokens needed, see luvo-mobile styling rule §5 exemption.
const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  placeholder: { opacity: 0 },
});

export const SvgIcon = memo(SvgIconComponent);
