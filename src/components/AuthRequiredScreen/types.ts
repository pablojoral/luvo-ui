import type React from 'react';

export interface AuthRequiredScreenProps {
  /** Optional subtitle override — falls back to `defaultSubtitle`. */
  readonly subtitle?: string;
  /** Default subtitle shown when `subtitle` is not provided. */
  readonly defaultSubtitle: string;
  readonly title: string;
  readonly signInLabel: string;
  readonly onSignIn: () => void;
  /**
   * Optional logo / illustration rendered above the title.
   * Consumers pass their own branded image. No logo is shown if omitted.
   */
  readonly logo?: React.ReactNode;
}
