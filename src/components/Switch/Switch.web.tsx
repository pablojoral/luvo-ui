import React from 'react';
import { useSwitchTheme } from './theme/useSwitchTheme.web';
import type { SwitchProps } from './types';

export const Switch = ({ value, onValueChange, disabled = false }: SwitchProps) => {
  const { trackStyle, thumbStyle } = useSwitchTheme(value, disabled);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      aria-disabled={disabled}
      onClick={() => !disabled && onValueChange(!value)}
      style={trackStyle}
    >
      <span style={thumbStyle} />
    </button>
  );
};
