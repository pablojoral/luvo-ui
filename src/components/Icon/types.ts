import type { FontColor, FontSize } from '../../tokens/types';

export type IconName =
  | 'qr-code'
  | 'qr-code-outline'
  | 'shirt'
  | 'shirt-outline'
  | 'time'
  | 'time-outline'
  | 'information-circle'
  | 'information-circle-outline'
  | 'person'
  | 'person-outline'
  | 'eye-outline'
  | 'eye-off-outline';

export interface IconProps {
  readonly name: IconName;
  readonly size?: FontSize;
  readonly color?: FontColor;
}
