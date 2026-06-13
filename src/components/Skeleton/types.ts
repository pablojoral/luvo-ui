import type { ViewStyle } from 'react-native';
import type { CornerRad } from '../../tokens/types';

export interface SkeletonProps {
  /** Block width — number (px) or percentage string. Defaults to '100%'. */
  readonly width?: number | `${number}%`;
  /** Block height in px. Defaults to 16. */
  readonly height?: number;
  /** Corner radius token. Defaults to 'corner-rad-md'. */
  readonly radius?: CornerRad;
  /** Extra style for margins/positioning. */
  readonly style?: ViewStyle;
}
