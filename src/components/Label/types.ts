import type { StyleProp, ViewStyle } from 'react-native';
import type { FontColor, FontSize, IconSize } from '../../tokens/types';
import type { IconName } from '../SvgIcon/types';

export interface LabelProps {
  readonly iconName: IconName;
  readonly iconSize?: IconSize;
  readonly color?: FontColor;
  readonly fontSize?: FontSize;
  readonly numberOfLines?: number;
  readonly children: string;
  readonly style?: StyleProp<ViewStyle>;
}
