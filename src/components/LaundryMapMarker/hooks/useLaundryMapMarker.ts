import type { LaundryMarkerData } from '../types';

interface Options {
  laundry: LaundryMarkerData;
  showAvailability: boolean;
}

function getAvailableMachines(laundry: LaundryMarkerData) {
  const total = laundry.machines?.length ?? 0;
  const available = laundry.machines?.filter(m => m.status === 'available').length ?? 0;
  const occupied = Math.max(0, total - available);
  return { total, available, occupied };
}

export const useLaundryMapMarker = ({ laundry, showAvailability }: Options) => {
  const { total, available, occupied } = getAvailableMachines(laundry);

  const value = showAvailability ? available : occupied;
  const ratio = total > 0 ? value / total : 0;

  const toNumber = (x: string | null) => (x ? parseFloat(x) : 0);
  const coords: [number, number] = [
    toNumber(laundry.location.longitude),
    toNumber(laundry.location.latitude),
  ];

  const accessibilityLabel = `Laundry ${showAvailability ? 'availability' : 'occupation'} ${value} of ${total}`;

  return { ratio, coords, accessibilityLabel };
};
