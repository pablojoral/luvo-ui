import { useBaseTheme } from '../../../theme/useBaseTheme';
import type { FontColor } from '../../../tokens/types';

interface UseActivityIndicatorParams {
  readonly color: FontColor | string;
}

export const useActivityIndicator = ({ color }: UseActivityIndicatorParams) => {
  const theme = useBaseTheme();

  // Resolve a FontColor token key to its hex value; fall through for raw strings.
  const resolvedColor = color in theme.fontColor
    ? theme.fontColor[color as FontColor]
    : color;

  return { resolvedColor };
};
