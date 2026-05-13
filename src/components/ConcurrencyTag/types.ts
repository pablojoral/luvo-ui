export interface ConcurrencyTagProps {
  readonly available: number;
  readonly total: number;
  /** Labels for each concurrency level. All four keys are required. */
  readonly labels: {
    readonly low: string;
    readonly medium: string;
    readonly high: string;
    readonly none: string;
  };
}
