import type { FontColor, FontSize, FontWeight, LineHeight, TextAlign } from '../../../tokens/types';

// iOS ignores fontWeight on custom fonts — explicit PostScript family names are required.
// These names must match what is embedded in each Poppins TTF file.
export const POPPINS_FAMILY: Record<FontWeight, string> = {
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semibold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
  extrabold: 'Poppins-ExtraBold',
};

// CSS font-weight values that correspond to each FontWeight key.
export const CSS_FONT_WEIGHT: Record<FontWeight, number> = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

interface UseTextParams {
  readonly fontSize: FontSize;
  readonly color: FontColor;
  readonly fontWeight: FontWeight;
  readonly lineHeight?: LineHeight;
  readonly textAlign?: TextAlign;
}

interface UseTextResult {
  readonly fontSize: FontSize;
  readonly color: FontColor;
  readonly fontWeight: FontWeight;
  readonly lineHeight: LineHeight | undefined;
  readonly textAlign: TextAlign | undefined;
  readonly rnFontFamily: string;
  readonly cssFontWeight: number;
}

export const useText = ({
  fontSize,
  color,
  fontWeight,
  lineHeight,
  textAlign,
}: UseTextParams): UseTextResult => {
  return {
    fontSize,
    color,
    fontWeight,
    lineHeight,
    textAlign,
    rnFontFamily: POPPINS_FAMILY[fontWeight],
    cssFontWeight: CSS_FONT_WEIGHT[fontWeight],
  };
};
