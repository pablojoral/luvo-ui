import type React from 'react';

export interface LoadErrorStateProps {
  readonly message: string;
  readonly title: string;
  readonly retryLabel: string;
  readonly onRetry: () => void;
  /**
   * Optional logo / illustration rendered above the title.
   * Consumers pass their own branded image. No logo is shown if omitted.
   */
  readonly logo?: React.ReactNode;
}
