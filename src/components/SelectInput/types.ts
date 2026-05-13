import type { SelectorOption } from '../PillSelector/types';

export interface SelectInputProps {
  readonly label?: string;
  readonly placeholder?: string;
  readonly value: string;
  readonly options: SelectorOption[];
  readonly onChange: (value: string) => void;
  readonly error?: string;
  readonly disabled?: boolean;
}
