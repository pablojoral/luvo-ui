import React, { useState } from 'react';
import { View, type LayoutChangeEvent } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSkeleton } from './hooks/useSkeleton';
import { useSkeletonTheme } from './theme/useSkeletonTheme';
import type { SkeletonProps } from './types';

export const Skeleton = (props: SkeletonProps) => {
  const { styles } = useSkeletonTheme(props);
  const [width, setWidth] = useState(0);
  const { highlightStyle } = useSkeleton(width);

  const onLayout = (e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width);

  return (
    <View style={[styles.base, props.style]} onLayout={onLayout}>
      <Animated.View style={[styles.highlight, highlightStyle]} />
    </View>
  );
};
