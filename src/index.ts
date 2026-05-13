// React Native (and default) entry point.
// Bundlers that resolve .native.ts or .tsx platform extensions will pick up
// the correct RN implementations automatically.

export * from './tokens';
export * from './theme';

export { Text } from './components/Text';
export type { TextProps } from './components/Text';

export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { ActivityIndicator } from './components/ActivityIndicator';
export type { ActivityIndicatorProps } from './components/ActivityIndicator';

export { Separator } from './components/Separator';
export type { SeparatorProps } from './components/Separator';

export { TextInput } from './components/TextInput';
export type { TextInputProps } from './components/TextInput';

export { Switch } from './components/Switch';
export type { SwitchProps } from './components/Switch';

export type { BaseTheme } from './tokens/types';
