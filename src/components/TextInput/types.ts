import type { FontColor } from '../../tokens/types';

// Platform-neutral TextInput props.
// The RN implementation accepts the full RNTextInputProps via a local interface extension;
// the web implementation maps the relevant subset to <input> element props.
export interface TextInputProps {
  readonly label?: string;
  readonly error?: string;
  readonly value?: string;
  readonly onChangeText?: (value: string) => void;
  readonly placeholder?: string;
  readonly secureTextEntry?: boolean;
  readonly editable?: boolean;
  readonly color?: FontColor;
  readonly placeholderColor?: FontColor;
  readonly maxLength?: number;
  readonly autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  readonly keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'name-phone-pad' | 'twitter' | 'web-search' | 'visible-password';
  readonly multiline?: boolean;
  // onBlur/onFocus intentionally absent: on RN they carry NativeSyntheticEvent payloads
  // and are passed through via the RN-side interface extension. The web implementation
  // picks them up as standard React focus event handlers.
}
