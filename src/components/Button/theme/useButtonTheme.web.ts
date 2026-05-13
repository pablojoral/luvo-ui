import { useMemo } from 'react';
import type { CSSProperties } from 'react';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import {
  borderColorMap,
  spacingMap,
  surfaceColorMap,
} from '../hooks/useButton';
import { toPx } from '../../../web/cssAdapter';
import type { ButtonSize, ButtonVariant } from '../../../tokens/types';

interface UseButtonThemeWebParams {
  readonly variant: ButtonVariant;
  readonly size: ButtonSize;
  readonly rounded?: boolean;
  readonly fullWidth?: boolean;
  readonly disabled?: boolean;
}

export const useButtonTheme = ({ variant, size, rounded, fullWidth, disabled }: UseButtonThemeWebParams) => {
  const theme = useBaseTheme();

  const containerStyle: CSSProperties = useMemo(
    () => (fullWidth ? { display: 'flex', flex: 1 } : { display: 'inline-flex' }),
    [fullWidth],
  );

  const buttonStyle: CSSProperties = useMemo(() => ({
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: toPx(rounded ? theme.cornerRad['corner-rad-full'] : theme.cornerRad['corner-rad-lg']),
    backgroundColor: theme.surfaceColor[surfaceColorMap[variant]],
    borderColor: theme.borderColor[borderColorMap[variant]],
    padding: toPx(theme.spacing[spacingMap[variant][size]]),
    gap: toPx(theme.spacing['spacing-xs']),
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : undefined,
  }), [rounded, variant, size, fullWidth, disabled, theme]);

  return { containerStyle, buttonStyle };
};
