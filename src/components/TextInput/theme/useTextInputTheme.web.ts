import type { CSSProperties } from 'react';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import { toPx } from '../../../web/cssAdapter';
import type { FontColor } from '../../../tokens/types';

interface Params {
  readonly error?: boolean;
  readonly color?: FontColor;
  readonly placeholderColor?: FontColor;
}

export const useTextInputTheme = ({
  error = false,
  color = 'font-primary',
}: Params = {}) => {
  const theme = useBaseTheme();

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: toPx(theme.spacing['spacing-xxs']),
  };

  const inputWrapperStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: toPx(theme.spacing['spacing-xxxxl']),
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: toPx(theme.cornerRad['corner-rad-md']),
    backgroundColor: theme.surfaceColor['surface-primary'],
    borderColor: error ? theme.borderColor['border-error'] : theme.borderColor['border-primary'],
    paddingLeft: toPx(theme.spacing['spacing-sm']),
    paddingRight: toPx(theme.spacing['spacing-sm']),
  };

  const inputStyle: CSSProperties = {
    flex: 1,
    fontFamily: theme.fontFamily.poppins,
    fontSize: toPx(theme.fontSize['font-size-md']),
    color: theme.fontColor[color],
    border: 'none',
    outline: 'none',
    background: 'transparent',
  };

  const footerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  };

  const eyeButtonStyle: CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    paddingLeft: toPx(theme.spacing['spacing-xs']),
    color: theme.fontColor['font-placeholder'],
    fontSize: toPx(theme.fontSize['font-size-xl']),
    display: 'flex',
    alignItems: 'center',
  };

  return { containerStyle, inputWrapperStyle, inputStyle, footerStyle, eyeButtonStyle, theme };
};
