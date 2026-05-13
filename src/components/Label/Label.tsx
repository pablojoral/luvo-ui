import React from 'react';
import { View } from 'react-native';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { Text } from '../Text/Text';
import { useLabelTheme } from './theme/useLabelTheme';
import type { LabelProps } from './types';

export const Label = ({
  iconName,
  iconSize = 'icon-size-sm',
  color = 'font-primary',
  fontSize = 'font-size-sm',
  numberOfLines,
  children,
  style,
}: LabelProps) => {
  const { styles } = useLabelTheme();

  return (
    <View style={[styles.container, style]}>
      <SvgIcon name={iconName} size={iconSize} color={color} />
      <Text fontSize={fontSize} color={color} style={styles.text} numberOfLines={numberOfLines}>
        {children}
      </Text>
    </View>
  );
};
