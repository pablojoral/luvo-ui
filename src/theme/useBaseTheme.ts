import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import type { BaseTheme } from '../tokens/types';

export const useBaseTheme = (): BaseTheme => useContext(ThemeContext);
