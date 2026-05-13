import type { FontColor } from '../../tokens/types';

export interface TextInputProps {
  readonly label?: string;
  readonly error?: string;
  readonly value?: string;
  readonly onChangeText?: (value: string) => void;
  readonly placeholder?: string;
  readonly secureTextEntry?: boolean;
  readonly editable?: boolean;
  readonly color?: FontColor;
  readonly placeholderColor?: FontColor;
  readonly maxLength?: number;
}
