import { useMemo } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import { POPPINS_FAMILY } from '../../Text/hooks/useText';
import type { FontColor } from '../../../tokens/types';

interface Params {
  readonly error?: boolean;
  readonly color?: FontColor;
  readonly placeholderColor?: FontColor;
}

export const useTextInputTheme = ({
  error = false,
  color = 'font-primary',
  placeholderColor = 'font-placeholder',
}: Params = {}) => {
  const theme = useBaseTheme();

  const containerStyle: ViewStyle = useMemo(
    () => ({
      width: '100%',
      gap: theme.spacing['spacing-xxs'],
    }),
    [theme],
  );

  const inputWrapperStyle: ViewStyle = useMemo(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: theme.spacing['spacing-xxxxl'],
      borderWidth: 1,
      borderRadius: theme.cornerRad['corner-rad-md'],
      backgroundColor: theme.surfaceColor['surface-primary'],
      borderColor: error ? theme.borderColor['border-error'] : theme.borderColor['border-primary'],
      paddingHorizontal: theme.spacing['spacing-sm'],
    }),
    [error, theme],
  );

  const inputStyle: TextStyle = useMemo(
    () => ({
      flex: 1,
      fontFamily: POPPINS_FAMILY.regular,
      fontSize: theme.fontSize['font-size-md'],
      color: theme.fontColor[color],
    }),
    [color, theme],
  );

  // These two are structurally static — no token values
  const footerStyle: ViewStyle = { flexDirection: 'row', justifyContent: 'flex-end' };
  const errorTextStyle: TextStyle = { flex: 1 };

  const styles = {
    container: containerStyle,
    inputWrapper: inputWrapperStyle,
    input: inputStyle,
    footer: footerStyle,
    errorText: errorTextStyle,
  };

  return { styles, placeholderTextColor: theme.fontColor[placeholderColor] };
};
