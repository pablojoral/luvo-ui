import React from 'react';
import { View } from 'react-native';
import { Text } from '../Text/Text';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { useTagTheme } from './theme/useTagTheme';
import type { TagProps } from './types';

export const Tag = ({
  style,
  surfaceColor = 'surface-background',
  borderColor = 'border-transparent',
  fullWidth = false,
  disabled = false,
  iconName,
  iconSize = 'icon-size-xs',
  ...props
}: TagProps) => {
  const { containerStyle } = useTagTheme({
    surfaceColor,
    borderColor,
    fullWidth,
    disabled,
  });

  return (
    <View style={[containerStyle, style]}>
      {iconName ? <SvgIcon name={iconName} size={iconSize} color={props.color} /> : null}
      {props.children ? <Text {...props} /> : null}
    </View>
  );
};
