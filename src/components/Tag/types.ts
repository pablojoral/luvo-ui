import type { StyleProp, ViewStyle } from 'react-native';
import type { TextProps } from '../Text/types';
import type { BorderColor, IconSize, SurfaceColor } from '../../tokens/types';
import type { IconName } from '../SvgIcon/types';

export interface TagProps extends TextProps {
  readonly surfaceColor?: SurfaceColor;
  readonly borderColor?: BorderColor;
  readonly style?: StyleProp<ViewStyle>;
  readonly fullWidth?: boolean;
  readonly disabled?: boolean;
  readonly iconName?: IconName;
  readonly iconSize?: IconSize;
}
