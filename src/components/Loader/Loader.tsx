import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SvgImage } from '../SvgImage/SvgImage';
import { useLoader } from './hooks/useLoader';
import { useLoaderTheme } from './theme/useLoaderTheme';
import type { LoaderProps } from './types';

export const Loader = ({ size = 'icon-size-xxxxxxl' }: LoaderProps) => {
  const { avatar, animatedStyle } = useLoader();
  const { styles, iconSize } = useLoaderTheme(size);

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        {avatar && <SvgImage name={avatar.imageName} height={iconSize} width={iconSize} />}
      </Animated.View>
    </View>
  );
};
