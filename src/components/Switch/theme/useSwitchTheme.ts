import { useMemo } from 'react';
import type { ViewStyle } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';

const TRACK_WIDTH = 48;
const TRACK_HEIGHT = 28;
const THUMB_SIZE = 22;
const THUMB_MARGIN = 3;

export const THUMB_TRAVEL = TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2;

export const useSwitchTheme = (disabled: boolean) => {
  const theme = useBaseTheme();

  const trackOverlayStyle: ViewStyle = useMemo(
    () => ({
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: theme.surfaceColor['surface-invert'],
    }),
    [theme],
  );

  const thumbStyle: ViewStyle = useMemo(
    () => ({
      width: THUMB_SIZE,
      height: THUMB_SIZE,
      borderRadius: theme.cornerRad['corner-rad-full'],
      backgroundColor: theme.borderColor['border-invert'],
    }),
    [theme],
  );

  const trackStyle: ViewStyle = useMemo(
    () => ({
      width: TRACK_WIDTH,
      height: TRACK_HEIGHT,
      borderRadius: theme.cornerRad['corner-rad-full'],
      backgroundColor: theme.surfaceColor['surface-background'],
      justifyContent: 'center',
      padding: THUMB_MARGIN,
      overflow: 'hidden',
      opacity: disabled ? 0.4 : 1,
    }),
    [disabled, theme],
  );

  return { trackOverlayStyle, thumbStyle, trackStyle, thumbTravel: THUMB_TRAVEL };
};
