import { useEffect } from 'react';
import {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const DURATION_MS = 1200;

export const useSkeleton = (containerWidth: number) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: DURATION_MS, easing: Easing.inOut(Easing.ease) }),
      -1,
      false,
    );
    return () => cancelAnimation(progress);
  }, [progress]);

  // Highlight sweeps from off-left (-width) to off-right (+width) of the block.
  const highlightStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -containerWidth + progress.value * 2 * containerWidth }],
  }));

  return { highlightStyle };
};
