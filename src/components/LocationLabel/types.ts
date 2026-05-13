import type { StyleProp, ViewStyle } from 'react-native';

export interface LocationLabelProps {
  readonly location: string;
  readonly numberOfLines?: number;
  readonly style?: StyleProp<ViewStyle>;
}
