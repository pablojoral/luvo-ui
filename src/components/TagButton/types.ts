import type { StyleProp, ViewStyle } from 'react-native';
import type { TextProps } from '../Text/types';
import type { BorderColor, SurfaceColor } from '../../tokens/types';
import type { IconName } from '../SvgIcon/types';

export interface TagButtonProps extends TextProps {
  readonly onPress: () => void;
  readonly surfaceColor?: SurfaceColor;
  readonly borderColor?: BorderColor;
  readonly style?: StyleProp<ViewStyle>;
  readonly fullWidth?: boolean;
  readonly disabled?: boolean;
  readonly loading?: boolean;
  readonly iconName?: IconName;
}
