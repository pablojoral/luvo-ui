import { useEffect, useState } from 'react';
import type { AvailabilityStatus } from '../../AvailabilityTag/types';
import type { FontColor } from '../../../tokens/types';
import type { IconName } from '../../SvgIcon/types';
import type { MachineCardMachine, MachineStatus } from '../types';

function formatMMSS(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Maps luvo-mobile underscore convention to luvo-ui dash convention.
const statusMap: Record<MachineStatus, AvailabilityStatus> = {
  available: 'available',
  in_use: 'in-use',
  out_of_order: 'out-of-order',
  maintenance: 'maintenance',
  offline: 'out-of-order', // offline machines display as unavailable
};

export const useMachineCard = (machine: MachineCardMachine, onPress?: () => void) => {
  const iconName: IconName = machine.type === 'dryer' ? 'Wind' : 'Droplet';
  const availabilityStatus: AvailabilityStatus = statusMap[machine.status];
  const inUse = machine.status === 'in_use';
  const cycleSeconds = machine.cycleRemainingSeconds;

  const [remaining, setRemaining] = useState(cycleSeconds ?? 0);

  // Sync to server value when a WebSocket update arrives.
  useEffect(() => {
    setRemaining(cycleSeconds ?? 0);
  }, [cycleSeconds]);

  // Tick down once per second between WebSocket updates.
  useEffect(() => {
    if (!inUse || remaining <= 0) return;
    const timer = setTimeout(() => setRemaining(r => Math.max(0, r - 1)), 1000);
    return () => clearTimeout(timer);
  }, [inUse, remaining]);

  const showTimer = inUse && cycleSeconds != null;
  const remainingTime = showTimer ? formatMMSS(remaining) : '--:--';
  const chevronColor: FontColor = onPress ? 'font-primary' : 'font-disabled';

  return { iconName, availabilityStatus, remainingTime, showTimer, chevronColor };
};
