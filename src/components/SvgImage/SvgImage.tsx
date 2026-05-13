import React, { memo } from 'react';
import { AccessibilityProps, StyleSheet, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { ImageName, images } from './images';

export type SvgImageProps = SvgProps & {
  name: ImageName;
  height?: number;
  color?: string;
  style?: import('react-native').ViewStyle;
} & AccessibilityProps;

const SvgImageComponent: React.FC<SvgImageProps> = ({
  name,
  height,
  width,
  color,
  style,
  accessibilityLabel,
  accessible = true,
  ...rest
}) => {
  const Image = images[name];

  // If only one dimension is provided, leave the other undefined so
  // react-native-svg infers it from the SVG's viewBox (aspect ratio preserved).
  // If neither is provided, fall back to height=24.
  const resolvedHeight = height ?? (width !== undefined ? undefined : 24);
  const resolvedWidth = width;

  if (!Image) {
    if (__DEV__) {
      console.warn(`[SvgImage] Unknown image name: "${name}"`);
    }
    return <View style={[styles.placeholder, style]} />;
  }

  return (
    <View
      style={styles.container}
      accessibilityLabel={accessibilityLabel ?? name}
      accessible={accessible}
      accessibilityRole="image"
    >
      <Image height={resolvedHeight} width={resolvedWidth} color={color} {...rest} />
    </View>
  );
};

// Purely structural layout — no design tokens needed, see luvo-mobile styling rule §5 exemption.
const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  placeholder: { opacity: 0 },
});

export const SvgImage = memo(SvgImageComponent);
