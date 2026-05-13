import type { AvailabilityStatus } from '../AvailabilityTag/types';

export type MachineStatus = 'available' | 'in_use' | 'out_of_order' | 'maintenance';
export type MachineType = 'washing_machine' | 'dryer';

export interface MachineCardMachine {
  id: number;
  name: string;
  type: MachineType;
  status: MachineStatus;
  /** Seconds remaining in the current cycle — present only when status === 'in_use'. */
  cycleRemainingSeconds?: number;
  /** Human-readable capacity string (e.g. "10 Kgs"). Omit when unknown. */
  capacity?: string;
}

export interface MachineCardLabels {
  /** Labels for the AvailabilityTag — all four keys required. */
  readonly availability: Record<AvailabilityStatus, string>;
}

export interface MachineCardProps {
  readonly machine: MachineCardMachine;
  readonly labels: MachineCardLabels;
  readonly onPress?: () => void;
}
