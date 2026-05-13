import type { ViewProps } from 'react-native';
import type { SurfaceColor } from '../../tokens/types';

export type SelectorOption = { label: string; value: string };

export interface PillSelectorProps extends ViewProps {
  readonly options: SelectorOption[];
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly backgroundColor?: SurfaceColor;
  readonly thumbColor?: SurfaceColor;
}
