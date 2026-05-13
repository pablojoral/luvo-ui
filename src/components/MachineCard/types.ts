import type { AvailabilityStatus } from '../AvailabilityTag/types';
import type { MachineStatus, MachineType } from '../../tokens/machineTypes';

export type { MachineStatus, MachineType };

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
