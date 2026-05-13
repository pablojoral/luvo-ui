/** Generic machine/resource availability status — no luvo-specific model dependency. */
export type AvailabilityStatus = 'available' | 'in-use' | 'out-of-order' | 'maintenance';

export interface AvailabilityTagProps {
  readonly status: AvailabilityStatus;
  /** Label to display for each status. All four keys are required. */
  readonly labels: {
    readonly available: string;
    readonly 'in-use': string;
    readonly 'out-of-order': string;
    readonly maintenance: string;
  };
}
