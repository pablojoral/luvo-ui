export interface GoogleSignInButtonProps {
  readonly label: string;
  readonly onPress: () => void;
  readonly disabled?: boolean;
  readonly submitting?: boolean;
}
