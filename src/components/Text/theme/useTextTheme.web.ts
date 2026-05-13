import type { CSSProperties } from 'react';
import { useBaseTheme } from '../../../theme/useBaseTheme';
import { useText } from '../hooks/useText';
import { toPx } from '../../../web/cssAdapter';
import type { FontColor, FontSize, FontWeight, LineHeight, TextAlign } from '../../../tokens/types';

interface UseTextThemeWebParams {
  readonly fontSize: FontSize;
  readonly color: FontColor;
  readonly fontWeight: FontWeight;
  readonly lineHeight?: LineHeight;
  readonly textAlign?: TextAlign;
}

export const useTextTheme = (params: UseTextThemeWebParams) => {
  const theme = useBaseTheme();
  const { cssFontWeight } = useText(params);

  const style: CSSProperties = {
    fontFamily: theme.fontFamily.poppins,
    fontWeight: cssFontWeight,
    fontSize: toPx(theme.fontSize[params.fontSize]),
    color: theme.fontColor[params.color],
    ...(params.lineHeight !== undefined && { lineHeight: toPx(theme.lineHeight[params.lineHeight]) }),
    ...(params.textAlign !== undefined && { textAlign: params.textAlign }),
  };

  return { style, theme };
};
