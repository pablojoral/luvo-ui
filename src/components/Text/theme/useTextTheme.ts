import { useMemo } from 'react';
import type { TextStyle } from 'react-native';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import { useText } from '../hooks/useText';
import type { FontColor, FontSize, FontWeight, LineHeight, TextAlign } from '../../../tokens/types';

interface UseTextThemeParams {
  readonly fontSize: FontSize;
  readonly color: FontColor;
  readonly fontWeight: FontWeight;
  readonly lineHeight?: LineHeight;
  readonly textAlign?: TextAlign;
}

export const useTextTheme = (params: UseTextThemeParams) => {
  const theme = useBaseTheme();
  const { rnFontFamily } = useText(params);

  const text: TextStyle = useMemo(
    () => ({
      fontFamily: rnFontFamily,
      fontSize: theme.fontSize[params.fontSize],
      color: theme.fontColor[params.color],
      ...(params.lineHeight !== undefined && { lineHeight: theme.lineHeight[params.lineHeight] }),
      ...(params.textAlign !== undefined && { textAlign: params.textAlign }),
    }),
    [rnFontFamily, theme, params.fontSize, params.color, params.lineHeight, params.textAlign],
  );

  return { styles: { text }, theme };
};
