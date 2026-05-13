export interface TimeTagProps {
  readonly seconds: number;
  readonly extended?: boolean;
  /** Label prepended to the time when `extended` is true (e.g. "Ends in"). */
  readonly endsInLabel?: string;
}
