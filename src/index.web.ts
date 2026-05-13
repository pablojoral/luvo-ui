// Web entry point — explicitly imports .web.tsx variants so bundlers that don't
// auto-resolve platform extensions (Vite, Webpack without react-native-web) get
// the correct implementations.

export * from './tokens';
// Cherry-pick from ./theme — useTheme is overridden below with the web variant.
export { ThemeContext, ThemeProvider, useBaseTheme, DefaultTheme, DarkTheme } from './theme';
export type { Theme, ThemeConstants, ShadowBoxTheme, ShadowCardTheme, ShadowFloatingTheme, ShadowBottomNavTheme, LetterSpacingTheme, ZIndexTheme, ShadowBox, TagVariant } from './theme';

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

// The following components are React Native only (no .web.tsx variant).
// They can be used in web apps that have react-native-web configured.
// Reanimated-dependent components (BottomSheet, PillSelector, SelectInput, Loader,
// StepIndicator) also require @react-native-reanimated/web or similar web adapter.

export { SvgIcon } from './components/SvgIcon';
export type { SvgIconProps } from './components/SvgIcon';

export { SvgImage } from './components/SvgImage';
export type { SvgImageProps } from './components/SvgImage';

export { Icon } from './components/Icon';
export type { IconProps } from './components/Icon';

export { Tag } from './components/Tag';
export type { TagProps } from './components/Tag';

export { Label } from './components/Label';
export type { LabelProps } from './components/Label';

export { ConcurrencyTag } from './components/ConcurrencyTag';
export type { ConcurrencyTagProps } from './components/ConcurrencyTag';

export { TimeTag } from './components/TimeTag';
export type { TimeTagProps } from './components/TimeTag';

export { AvailabilityTag } from './components/AvailabilityTag';
export type { AvailabilityTagProps, AvailabilityStatus } from './components/AvailabilityTag';

export { StepIndicator } from './components/StepIndicator';
export type { StepIndicatorProps } from './components/StepIndicator';

export { ActionModal } from './components/ActionModal';
export type { ActionModalProps } from './components/ActionModal';

export { SocialAuth } from './components/SocialAuth';
export type { SocialAuthProps } from './components/SocialAuth';

export { GoogleSignInButton } from './components/GoogleSignInButton';
export type { GoogleSignInButtonProps } from './components/GoogleSignInButton';

export { AppleSignInButton } from './components/AppleSignInButton';
export type { AppleSignInButtonProps } from './components/AppleSignInButton';

export { AuthModeToggle } from './components/AuthModeToggle';
export type { AuthModeToggleProps } from './components/AuthModeToggle';

export { ErrorBoundary } from './components/ErrorBoundary';
export type { ErrorBoundaryProps } from './components/ErrorBoundary';

export { AuthRequiredScreen } from './components/AuthRequiredScreen';
export type { AuthRequiredScreenProps } from './components/AuthRequiredScreen';

export { Loader } from './components/Loader';
export type { LoaderProps } from './components/Loader';

export { BottomSheet } from './components/BottomSheet';
export type { BottomSheetProps } from './components/BottomSheet';

export { PillSelector } from './components/PillSelector';
export type { PillSelectorProps, SelectorOption } from './components/PillSelector';

export { SelectInput } from './components/SelectInput';
export type { SelectInputProps } from './components/SelectInput';

export { ScreenHeader } from './components/ScreenHeader';
export type { ScreenHeaderProps } from './components/ScreenHeader';

export { SafeScreenHeader } from './components/SafeScreenHeader';
export type { SafeScreenHeaderProps } from './components/SafeScreenHeader';

export { SettingsMenu } from './components/SettingsMenu';
export type { SettingsMenuProps, SettingsMenuItemData } from './components/SettingsMenu';

export { IconButton } from './components/IconButton';
export type { IconButtonProps } from './components/IconButton';

export { TagButton } from './components/TagButton';
export type { TagButtonProps } from './components/TagButton';

export { LocationLabel } from './components/LocationLabel';
export type { LocationLabelProps } from './components/LocationLabel';

export { LaundryMapMarker } from './components/LaundryMapMarker/LaundryMapMarker.web';
export type { LaundryMapMarkerProps, LaundryMarkerData, LaundryMachine, LaundryLocation } from './components/LaundryMapMarker';

export { MachineCard } from './components/MachineCard/MachineCard.web';
export type { MachineCardProps, MachineCardMachine, MachineCardLabels } from './components/MachineCard';

export type { BaseTheme } from './tokens/types';

// Web-specific: override useTheme with the web variant (no safe-area insets).
export { useTheme } from './theme/hooks/useTheme.web';
