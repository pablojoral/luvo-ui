import type { FontColor } from '../../../tokens/types';

type ConcurrencyLevel = 'low' | 'medium' | 'high' | 'none';

const fontColorMap: Record<ConcurrencyLevel, FontColor> = {
  low:    'font-success',
  medium: 'font-warning',
  high:   'font-error',
  none:   'font-disabled',
};

function getLevel(available: number, total: number): ConcurrencyLevel {
  if (total === 0 || available === 0) return 'none';
  const ratio = available / total;
  if (ratio >= 0.66) return 'low';
  if (ratio >= 0.33) return 'medium';
  return 'high';
}

interface UseConcurrencyTagParams {
  readonly available: number;
  readonly total: number;
  readonly labels: Record<ConcurrencyLevel, string>;
}

export const useConcurrencyTag = ({ available, total, labels }: UseConcurrencyTagParams) => {
  const level = getLevel(available, total);
  return {
    label: labels[level],
    color: fontColorMap[level],
  };
};
