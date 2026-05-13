export interface AuthModeToggleProps {
  readonly promptLabel: string;
  readonly linkLabel: string;
  readonly onPress: () => void;
  readonly disabled?: boolean;
}
