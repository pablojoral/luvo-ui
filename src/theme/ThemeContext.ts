import { createContext } from 'react';
import { defaultTheme } from '../tokens/defaultTheme';
import type { BaseTheme } from '../tokens/types';

// Default value is the light theme so consumers that forget to add
// ThemeProvider still get sensible styles rather than a crash.
export const ThemeContext = createContext<BaseTheme>(defaultTheme);
