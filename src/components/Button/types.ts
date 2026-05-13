import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { ButtonSize, ButtonVariant } from '../../tokens/types';
import type { IconName } from '../SvgIcon/types';

export interface ButtonProps {
  readonly label?: string;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly iconName?: IconName;
  readonly onPress?: () => void;
  readonly fullWidth?: boolean;
  readonly alignLeft?: boolean;
  readonly disabled?: boolean;
  readonly submitting?: boolean;
  readonly stale?: boolean;
  readonly rounded?: boolean;
  /** RN-only: overrides the outer TouchableOpacity style. Web ignores this. */
  readonly style?: StyleProp<ViewStyle>;
  /** RN-only: overrides the label Text style. Web ignores this. */
  readonly textStyle?: StyleProp<TextStyle>;
}
