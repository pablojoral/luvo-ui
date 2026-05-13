import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { useIconButtonTheme } from './theme/useIconButtonTheme';
import type { IconButtonProps } from './types';

export const IconButton = ({
  iconName,
  iconSize = 'icon-size-xl',
  iconColor = 'font-primary',
  surfaceColor = 'surface-button',
  style,
  ...props
}: IconButtonProps) => {
  const { containerStyle } = useIconButtonTheme({ iconSize, surfaceColor });

  return (
    <TouchableOpacity activeOpacity={0.8} {...props} style={[containerStyle, style]}>
      <SvgIcon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};
