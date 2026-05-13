import type { FontColor } from '../../tokens/types';

export interface ActivityIndicatorProps {
  /** Token key from fontColor, or any raw CSS/RN color string. */
  readonly color?: FontColor | string;
  readonly size?: 'small' | 'large';
}
