import type { TouchableOpacityProps } from 'react-native';
import type { FontColor, IconSize, SurfaceColor } from '../../tokens/types';
import type { IconName } from '../SvgIcon/types';

export interface IconButtonProps extends TouchableOpacityProps {
  readonly iconName: IconName;
  readonly iconSize?: IconSize;
  readonly iconColor?: FontColor;
  readonly surfaceColor?: SurfaceColor;
}
