import type { FontColor, FontSize, FontWeight, LineHeight, TextAlign } from '../../tokens/types';

export interface TextProps {
  readonly children?: React.ReactNode;
  readonly fontSize?: FontSize;
  readonly color?: FontColor;
  readonly fontWeight?: FontWeight;
  readonly lineHeight?: LineHeight;
  readonly textAlign?: TextAlign;
}
