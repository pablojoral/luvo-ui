import type { ButtonSize, ButtonVariant } from '../../tokens/types';

export interface ButtonProps {
  readonly label?: string;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly onPress?: () => void;
  readonly disabled?: boolean;
  readonly submitting?: boolean;
  readonly fullWidth?: boolean;
  readonly rounded?: boolean;
}
