import type { FontColor, SurfaceColor } from '../../../tokens/types';
import type { AvailabilityStatus } from '../types';

const fontColorMap: Record<AvailabilityStatus, FontColor> = {
  'available':    'font-status-available',
  'in-use':       'font-status-in-use',
  'out-of-order': 'font-status-out-of-order',
  'maintenance':  'font-status-maintenance',
};

const backgroundColorMap: Record<AvailabilityStatus, SurfaceColor> = {
  'available':    'surface-status-available',
  'in-use':       'surface-status-in-use',
  'out-of-order': 'surface-status-out-of-order',
  'maintenance':  'surface-status-maintenance',
};

interface UseAvailabilityTagParams {
  readonly status: AvailabilityStatus;
  readonly labels: Record<AvailabilityStatus, string>;
}

export const useAvailabilityTag = ({ status, labels }: UseAvailabilityTagParams) => {
  return {
    label: labels[status],
    color: fontColorMap[status],
    surfaceColor: backgroundColorMap[status],
  };
};
