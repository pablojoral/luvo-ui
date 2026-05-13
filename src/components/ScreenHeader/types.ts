export interface ScreenHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly hideBack?: boolean;
  /** Called when back button is pressed. If omitted the component calls navigation.goBack() via @react-navigation/native. */
  readonly onBack?: () => void;
  /** Accessibility label for the back button. Defaults to "Back". */
  readonly backAccessibilityLabel?: string;
}
