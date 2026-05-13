import React from 'react';
import { ThemeContext } from './ThemeContext';
import type { BaseTheme } from '../tokens/types';

interface ThemeProviderProps {
  readonly theme: BaseTheme;
  readonly children: React.ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
