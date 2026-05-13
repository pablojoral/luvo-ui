import React from 'react';
import { Text as RNText } from 'react-native';
import type { TextProps as RNTextProps } from 'react-native';
import { useTextTheme } from './theme/useTextTheme';
import type { TextProps } from './types';

interface TextComponentProps extends TextProps {
  readonly style?: RNTextProps['style'];
  readonly numberOfLines?: number;
}

export const Text = ({
  children,
  fontSize = 'font-size-md',
  color = 'font-primary',
  fontWeight = 'regular',
  lineHeight,
  textAlign,
  style,
  numberOfLines,
}: TextComponentProps) => {
  const { styles } = useTextTheme({ fontSize, color, fontWeight, lineHeight, textAlign });

  return (
    <RNText style={[styles.text, style]} numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
};
