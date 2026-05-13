// Pure utility functions for converting design token values to CSS strings.
// No React imports — safe to use in any web context.

/** Converts a pixel number to a CSS `px` string. */
export const toPx = (n: number): string => `${n}px`;

/**
 * Identity function for color strings.
 * Luvo colors are already valid CSS color strings (hex, rgba, 'transparent').
 * The function exists to make intent explicit at call sites.
 */
export const toCssColor = (s: string): string => s;
