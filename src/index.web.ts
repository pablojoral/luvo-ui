// Web entry point — explicitly imports .web.tsx variants so bundlers that don't
// auto-resolve platform extensions (Vite, Webpack without react-native-web) get
// the correct implementations.

export * from './tokens';
export * from './theme';

export { Text } from './components/Text/Text.web';
export type { TextProps } from './components/Text/types';

export { Button } from './components/Button/Button.web';
export type { ButtonProps } from './components/Button/types';

export { ActivityIndicator } from './components/ActivityIndicator/ActivityIndicator.web';
export type { ActivityIndicatorProps } from './components/ActivityIndicator/types';

export { Separator } from './components/Separator/Separator.web';
export type { SeparatorProps } from './components/Separator/types';

export { TextInput } from './components/TextInput/TextInput.web';
export type { TextInputProps } from './components/TextInput/types';

export { Switch } from './components/Switch/Switch.web';
export type { SwitchProps } from './components/Switch/types';

export type { BaseTheme } from './tokens/types';
