export interface SocialAuthProps {
  readonly onSignIn: (provider: 'google' | 'apple') => void;
  readonly disabled: boolean;
  readonly submitting: boolean;
  readonly showApple: boolean;
  readonly error?: string;
  readonly dividerLabel: string;
  readonly googleLabel: string;
  readonly appleLabel: string;
}
