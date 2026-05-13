export interface SafeScreenHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly hideBack?: boolean;
  readonly onBack?: () => void;
  readonly backAccessibilityLabel?: string;
}
