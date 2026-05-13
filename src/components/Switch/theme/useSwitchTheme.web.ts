import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import { toPx } from '../../../web/cssAdapter';

const TRACK_WIDTH = 48;
const TRACK_HEIGHT = 28;
const THUMB_SIZE = 22;
const THUMB_MARGIN = 3;

export const THUMB_TRAVEL = TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2;

export const useSwitchTheme = (value: boolean, disabled: boolean) => {
  const theme = useBaseTheme();

  const trackStyle: CSSProperties = useMemo(
    () => ({
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: toPx(TRACK_WIDTH),
      height: toPx(TRACK_HEIGHT),
      borderRadius: toPx(theme.cornerRad['corner-rad-full']),
      backgroundColor: value ? theme.surfaceColor['surface-invert'] : theme.surfaceColor['surface-background'],
      padding: toPx(THUMB_MARGIN),
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background-color 200ms ease',
      border: 'none',
      boxSizing: 'border-box',
    }),
    [value, disabled, theme],
  );

  const thumbStyle: CSSProperties = useMemo(
    () => ({
      width: toPx(THUMB_SIZE),
      height: toPx(THUMB_SIZE),
      borderRadius: toPx(theme.cornerRad['corner-rad-full']),
      backgroundColor: theme.borderColor['border-invert'],
      transform: `translateX(${value ? toPx(THUMB_TRAVEL) : '0px'})`,
      transition: 'transform 200ms ease',
      flexShrink: 0,
    }),
    [value, theme],
  );

  return { trackStyle, thumbStyle };
};
