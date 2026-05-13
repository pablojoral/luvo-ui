import * as React$1 from 'react';
import React__default from 'react';
import * as react_native from 'react-native';
import { AccessibilityProps, StyleProp, ViewStyle, ViewProps, TouchableOpacityProps } from 'react-native';
import * as react_native_svg from 'react-native-svg';
import { SvgProps } from 'react-native-svg';

declare const Colors: {
    readonly 'colors-white': "#FEFEFE";
    readonly 'colors-black': "#000000";
    readonly 'colors-semi-transparent': "rgba(0, 0, 0, 0.5)";
    readonly 'colors-transparent': "transparent";
    readonly 'colors-grey-25': "#f4f4f5";
    readonly 'colors-grey-50': "#eaeaeb";
    readonly 'colors-grey-100': "#d5d6d7";
    readonly 'colors-grey-200': "#abadb0";
    readonly 'colors-grey-300': "#828488";
    readonly 'colors-grey-400': "#585b61";
    readonly 'colors-grey-500': "#2f323a";
    readonly 'colors-grey-600': "#25282e";
    readonly 'colors-grey-700': "#1c1e22";
    readonly 'colors-grey-800': "#121417";
    readonly 'colors-grey-900': "#090a0b";
    readonly 'colors-lavender-25': "#fcfbfd";
    readonly 'colors-lavender-50': "#faf7fb";
    readonly 'colors-lavender-100': "#f6f0f8";
    readonly 'colors-lavender-200': "#eee2f2";
    readonly 'colors-lavender-300': "#e6d4ec";
    readonly 'colors-lavender-400': "#dec6e6";
    readonly 'colors-lavender-500': "#d6b8e0";
    readonly 'colors-lavender-600': "#ab93b3";
    readonly 'colors-lavender-700': "#806e86";
    readonly 'colors-lavender-800': "#554959";
    readonly 'colors-lavender-900': "#2a242c";
    readonly 'colors-rose-25': "#fdf6f7";
    readonly 'colors-rose-50': "#fbeef0";
    readonly 'colors-rose-100': "#f7dee2";
    readonly 'colors-rose-200': "#efbdc6";
    readonly 'colors-rose-300': "#e79ca9";
    readonly 'colors-rose-400': "#df7b8d";
    readonly 'colors-rose-500': "#d75b71";
    readonly 'colors-rose-600': "#ac485a";
    readonly 'colors-rose-700': "#813643";
    readonly 'colors-rose-800': "#56242d";
    readonly 'colors-rose-900': "#2b1216";
    readonly 'colors-green-25': "#f3fcf4";
    readonly 'colors-green-50': "#e6f9e6";
    readonly 'colors-green-100': "#c8f0cb";
    readonly 'colors-green-300': "#70d77a";
    readonly 'colors-green-500': "#00B300";
    readonly 'colors-green-700': "#117a12";
    readonly 'colors-green-900': "#0b4e0b";
    readonly 'colors-red-25': "#fff6f6";
    readonly 'colors-red-50': "#fbeef0";
    readonly 'colors-red-100': "#FFEDED";
    readonly 'colors-red-300': "#ff9b9b";
    readonly 'colors-red-500': "#FF5959";
    readonly 'colors-red-600': "#FF3B3B";
    readonly 'colors-red-800': "#b62424";
    readonly 'colors-red-900': "#7a1414";
    readonly 'colors-yellow-25': "#fffbf3";
    readonly 'colors-yellow-50': "#fbeef0";
    readonly 'colors-yellow-100': "#fff1c2";
    readonly 'colors-yellow-300': "#ffdf70";
    readonly 'colors-yellow-500': "#FFCD00";
    readonly 'colors-yellow-600': "#e6b800";
    readonly 'colors-yellow-800': "#997a00";
    readonly 'colors-yellow-900': "#664e00";
};
type Color = keyof typeof Colors;

interface SpacingTheme {
    readonly 'spacing-none': number;
    readonly 'spacing-xxxs': number;
    readonly 'spacing-xxs': number;
    readonly 'spacing-xs': number;
    readonly 'spacing-sm': number;
    readonly 'spacing-md': number;
    readonly 'spacing-lg': number;
    readonly 'spacing-xl': number;
    readonly 'spacing-xxl': number;
    readonly 'spacing-xxxl': number;
    readonly 'spacing-xxxxl': number;
    readonly 'spacing-max': number;
}
interface SurfaceColorTheme {
    readonly 'surface-primary': string;
    readonly 'surface-secondary': string;
    readonly 'surface-button': string;
    readonly 'surface-tertiary': string;
    readonly 'surface-background': string;
    readonly 'surface-surface': string;
    readonly 'surface-disabled': string;
    readonly 'surface-invert': string;
    readonly 'surface-transparent': string;
    readonly 'surface-dark': string;
    readonly 'surface-success': string;
    readonly 'surface-success-subtle': string;
    readonly 'surface-error': string;
    readonly 'surface-error-subtle': string;
    readonly 'surface-warning': string;
    readonly 'surface-warning-subtle': string;
    readonly 'surface-tertiary-subtle': string;
    readonly 'surface-status-available': string;
    readonly 'surface-status-available-subtle': string;
    readonly 'surface-status-in-use': string;
    readonly 'surface-status-in-use-subtle': string;
    readonly 'surface-status-out-of-order': string;
    readonly 'surface-status-out-of-order-subtle': string;
    readonly 'surface-status-maintenance': string;
    readonly 'surface-status-maintenance-subtle': string;
}
interface ShadowTheme {
    readonly shadowColor: string;
    readonly shadowOffset: {
        readonly width: number;
        readonly height: number;
    };
    readonly shadowOpacity: number;
    readonly shadowRadius: number;
    readonly elevation: number;
}
interface FontFamilyTheme {
    readonly poppins: string;
}
interface CornerRadTheme {
    readonly 'corner-rad-none': number;
    readonly 'corner-rad-sm': number;
    readonly 'corner-rad-md': number;
    readonly 'corner-rad-lg': number;
    readonly 'corner-rad-xl': number;
    readonly 'corner-rad-xxl': number;
    readonly 'corner-rad-xxxl': number;
    readonly 'corner-rad-full': number;
}
interface BorderWidthTheme {
    readonly 'border-width-none': number;
    readonly 'border-width-xs': number;
    readonly 'border-width-sm': number;
    readonly 'border-width-md': number;
    readonly 'border-width-lg': number;
    readonly 'border-width-xl': number;
    readonly 'border-width-xxl': number;
    readonly 'border-width-xxxl': number;
}
interface BorderColorTheme {
    readonly 'border-primary': string;
    readonly 'border-secondary': string;
    readonly 'border-disabled': string;
    readonly 'border-placeholder': string;
    readonly 'border-invert': string;
    readonly 'border-error': string;
    readonly 'border-transparent': string;
}
interface OverlayColorTheme {
    readonly modal: string;
    readonly dimmer: string;
    readonly backdrop: string;
    readonly glassButton: string;
}
interface ComponentSizeTheme {
    readonly fab: number;
    readonly iconContainer: number;
    readonly cardMaxWidth: number;
    readonly descriptionInput: number;
    readonly laundryImage: number;
}
interface IconSizeTheme {
    readonly 'icon-size-xs': number;
    readonly 'icon-size-sm': number;
    readonly 'icon-size-md': number;
    readonly 'icon-size-lg': number;
    readonly 'icon-size-xl': number;
    readonly 'icon-size-xxl': number;
    readonly 'icon-size-xxxl': number;
    readonly 'icon-size-xxxxl': number;
    readonly 'icon-size-xxxxxl': number;
    readonly 'icon-size-xxxxxxl': number;
    readonly 'icon-size-128': number;
    readonly 'icon-size-160': number;
    readonly 'icon-size-192': number;
    readonly 'icon-size-256': number;
}
interface FontSizeTheme {
    readonly 'font-size-xs': number;
    readonly 'font-size-sm': number;
    readonly 'font-size-md': number;
    readonly 'font-size-lg': number;
    readonly 'font-size-xl': number;
    readonly 'font-size-xxl': number;
    readonly 'font-size-xxxl': number;
    readonly 'font-size-xxxxl': number;
}
interface FontWeightTheme {
    readonly light: '300' | '400' | '500' | '600' | '700' | '800';
    readonly regular: '300' | '400' | '500' | '600' | '700' | '800';
    readonly medium: '300' | '400' | '500' | '600' | '700' | '800';
    readonly semibold: '300' | '400' | '500' | '600' | '700' | '800';
    readonly bold: '300' | '400' | '500' | '600' | '700' | '800';
    readonly extrabold: '300' | '400' | '500' | '600' | '700' | '800';
}
interface LineHeightTheme {
    readonly 'line-height-xs': number;
    readonly 'line-height-sm': number;
    readonly 'line-height-md': number;
    readonly 'line-height-lg': number;
    readonly 'line-height-xl': number;
    readonly 'line-height-xxl': number;
    readonly 'line-height-xxxl': number;
}
interface FontColorTheme {
    readonly 'font-primary': string;
    readonly 'font-secondary': string;
    readonly 'font-highlight': string;
    readonly 'font-light': string;
    readonly 'font-disabled': string;
    readonly 'font-placeholder': string;
    readonly 'font-invert': string;
    readonly 'font-success': string;
    readonly 'font-error': string;
    readonly 'font-warning': string;
    readonly 'font-status-available': string;
    readonly 'font-status-in-use': string;
    readonly 'font-status-out-of-order': string;
    readonly 'font-status-maintenance': string;
}
interface BaseTheme {
    readonly spacing: SpacingTheme;
    readonly surfaceColor: SurfaceColorTheme;
    readonly shadowBox: ShadowTheme;
    readonly shadowCard: ShadowTheme;
    readonly shadowFloating: ShadowTheme;
    readonly shadowBottomNav: ShadowTheme;
    readonly fontFamily: FontFamilyTheme;
    readonly fontSize: FontSizeTheme;
    readonly fontWeight: FontWeightTheme;
    readonly lineHeight: LineHeightTheme;
    readonly fontColor: FontColorTheme;
    readonly cornerRad: CornerRadTheme;
    readonly borderColor: BorderColorTheme;
    readonly borderWidth: BorderWidthTheme;
    readonly iconSize: IconSizeTheme;
    readonly overlayColor: OverlayColorTheme;
    readonly componentSize: ComponentSizeTheme;
}
type Spacing = keyof SpacingTheme;
type SurfaceColor = keyof SurfaceColorTheme;
type FontFamily = keyof FontFamilyTheme;
type CornerRad = keyof CornerRadTheme;
type BorderColor = keyof BorderColorTheme;
type BorderWidth = keyof BorderWidthTheme;
type FontSize = keyof FontSizeTheme;
type FontWeight = keyof FontWeightTheme;
type LineHeight = keyof LineHeightTheme;
type FontColor = keyof FontColorTheme;
type IconSize = keyof IconSizeTheme;
type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';
type ButtonSize = 'xs' | 'sm' | 'md' | 'xl';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'link';

declare const defaultTheme: BaseTheme;

declare const darkTheme: BaseTheme;

declare const ThemeContext: React$1.Context<BaseTheme>;

interface ThemeProviderProps {
    readonly theme: BaseTheme;
    readonly children: React__default.ReactNode;
}
declare const ThemeProvider: ({ theme, children }: ThemeProviderProps) => React__default.JSX.Element;

declare const useBaseTheme: () => BaseTheme;

interface TextProps {
    readonly children?: React.ReactNode;
    readonly fontSize?: FontSize;
    readonly color?: FontColor;
    readonly fontWeight?: FontWeight;
    readonly lineHeight?: LineHeight;
    readonly textAlign?: TextAlign;
}

interface ButtonProps {
    readonly label?: string;
    readonly variant?: ButtonVariant;
    readonly size?: ButtonSize;
    readonly onPress?: () => void;
    readonly disabled?: boolean;
    readonly submitting?: boolean;
    readonly fullWidth?: boolean;
    readonly rounded?: boolean;
}

interface ActivityIndicatorProps {
    /** Token key from fontColor, or any raw CSS/RN color string. */
    readonly color?: FontColor | string;
    readonly size?: 'small' | 'large';
}

interface SeparatorProps {
    readonly direction?: 'horizontal' | 'vertical';
}

interface TextInputProps {
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
}

interface SwitchProps {
    readonly value: boolean;
    readonly onValueChange: (value: boolean) => void;
    readonly disabled?: boolean;
}

declare const icons: {
    AlertCircle: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Check: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    AlertTriangle: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    ArrowLeftCircle: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    ArrowRightCircle: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Bell: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    ChevronLeft: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    ChevronRight: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Cross: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Clipboard: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Clock: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    CreditCard: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Droplet: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Edit: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Gift: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Info: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    LogOut: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    LuvoCircle: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    MapPin: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Map: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Profile: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    QrCode: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Settings: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Star: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Tool: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    User: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Wind: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
};
type IconName$1 = keyof typeof icons;

type SvgIconProps = Omit<SvgProps, 'width' | 'height'> & {
    name: IconName$1;
    size?: IconSize;
    color?: FontColor;
    style?: react_native.ViewStyle;
} & AccessibilityProps;
declare const SvgIcon: React__default.NamedExoticComponent<SvgIconProps>;

declare const images: {
    readonly 'avatar-sock': React$1.FC<SvgProps>;
    readonly 'avatar-detergent': React$1.FC<SvgProps>;
    readonly 'avatar-washing-machine': React$1.FC<SvgProps>;
    readonly 'avatar-laundry-basket': React$1.FC<SvgProps>;
    readonly 'avatar-pants': React$1.FC<SvgProps>;
    readonly 'laundry-small': React$1.FC<SvgProps>;
    readonly 'luvo-logo-pink': (props: SvgProps) => React$1.JSX.Element;
    readonly 'profile-placeholder': React$1.FC<SvgProps>;
    readonly 'qr-target': React$1.FC<SvgProps>;
    readonly 'wave-laundry-card': React$1.FC<SvgProps>;
    readonly 'wave-profile': React$1.FC<SvgProps>;
};
type ImageName = keyof typeof images;

type SvgImageProps = SvgProps & {
    name: ImageName;
    height?: number;
    color?: string;
    style?: react_native.ViewStyle;
} & AccessibilityProps;
declare const SvgImage: React__default.NamedExoticComponent<SvgImageProps>;

type IconName = 'qr-code' | 'qr-code-outline' | 'shirt' | 'shirt-outline' | 'time' | 'time-outline' | 'information-circle' | 'information-circle-outline' | 'person' | 'person-outline' | 'eye-outline' | 'eye-off-outline';
interface IconProps {
    readonly name: IconName;
    readonly size?: FontSize;
    readonly color?: FontColor;
}

declare const Icon: ({ name, size, color }: IconProps) => React$1.JSX.Element;

interface TagProps extends TextProps {
    readonly surfaceColor?: SurfaceColor;
    readonly borderColor?: BorderColor;
    readonly style?: StyleProp<ViewStyle>;
    readonly fullWidth?: boolean;
    readonly disabled?: boolean;
    readonly iconName?: IconName$1;
    readonly iconSize?: IconSize;
}

declare const Tag: ({ style, surfaceColor, borderColor, fullWidth, disabled, iconName, iconSize, ...props }: TagProps) => React__default.JSX.Element;

interface LabelProps {
    readonly iconName: IconName$1;
    readonly iconSize?: IconSize;
    readonly color?: FontColor;
    readonly fontSize?: FontSize;
    readonly numberOfLines?: number;
    readonly children: string;
    readonly style?: StyleProp<ViewStyle>;
}

declare const Label: ({ iconName, iconSize, color, fontSize, numberOfLines, children, style, }: LabelProps) => React__default.JSX.Element;

interface ConcurrencyTagProps {
    readonly available: number;
    readonly total: number;
    /** Labels for each concurrency level. All four keys are required. */
    readonly labels: {
        readonly low: string;
        readonly medium: string;
        readonly high: string;
        readonly none: string;
    };
}

declare const ConcurrencyTag: ({ available, total, labels }: ConcurrencyTagProps) => React__default.JSX.Element;

interface TimeTagProps {
    readonly seconds: number;
    readonly extended?: boolean;
    /** Label prepended to the time when `extended` is true (e.g. "Ends in"). */
    readonly endsInLabel?: string;
}

declare const TimeTag: ({ seconds, extended, endsInLabel }: TimeTagProps) => React__default.JSX.Element;

/** Generic machine/resource availability status — no luvo-specific model dependency. */
type AvailabilityStatus = 'available' | 'in-use' | 'out-of-order' | 'maintenance';
interface AvailabilityTagProps {
    readonly status: AvailabilityStatus;
    /** Label to display for each status. All four keys are required. */
    readonly labels: {
        readonly available: string;
        readonly 'in-use': string;
        readonly 'out-of-order': string;
        readonly maintenance: string;
    };
}

declare const AvailabilityTag: ({ status, labels }: AvailabilityTagProps) => React__default.JSX.Element;

interface StepIndicatorProps {
    readonly total: number;
    readonly current: number;
}

declare const StepIndicator: ({ total, current }: StepIndicatorProps) => React__default.JSX.Element | null;

interface ActionModalProps {
    readonly visible: boolean;
    readonly title: string;
    readonly body: string;
    readonly confirmLabel: string;
    readonly cancelLabel: string;
    readonly onConfirm: () => void;
    readonly onCancel: () => void;
    readonly variant?: 'destructive' | 'neutral';
    readonly icon?: IconName$1;
}

declare const ActionModal: ({ visible, title, body, confirmLabel, cancelLabel, onConfirm, onCancel, variant, icon, }: ActionModalProps) => React__default.JSX.Element;

interface SocialAuthProps {
    readonly onSignIn: (provider: 'google' | 'apple') => void;
    readonly disabled: boolean;
    readonly submitting: boolean;
    readonly showApple: boolean;
    readonly error?: string;
    readonly dividerLabel: string;
    readonly googleLabel: string;
    readonly appleLabel: string;
}

declare const SocialAuth: ({ onSignIn, disabled, submitting, showApple, error, dividerLabel, googleLabel, appleLabel, }: SocialAuthProps) => React__default.JSX.Element;

interface GoogleSignInButtonProps {
    readonly label: string;
    readonly onPress: () => void;
    readonly disabled?: boolean;
    readonly submitting?: boolean;
}

declare const GoogleSignInButton: ({ label, onPress, disabled, submitting }: GoogleSignInButtonProps) => React__default.JSX.Element;

interface AppleSignInButtonProps {
    readonly label: string;
    readonly onPress: () => void;
    readonly disabled?: boolean;
    readonly submitting?: boolean;
}

declare const AppleSignInButton: ({ label, onPress, disabled, submitting }: AppleSignInButtonProps) => React__default.JSX.Element;

interface AuthModeToggleProps {
    readonly promptLabel: string;
    readonly linkLabel: string;
    readonly onPress: () => void;
    readonly disabled?: boolean;
}

declare const AuthModeToggle: ({ promptLabel, linkLabel, onPress, disabled }: AuthModeToggleProps) => React__default.JSX.Element;

interface ErrorScreenProps {
    readonly onReset: () => void;
    /** Title to display — e.g. "Something went wrong". */
    readonly title: string;
    /** Body message. */
    readonly body: string;
    /** Label for the retry button. */
    readonly retryLabel: string;
}

interface ErrorBoundaryProps extends Omit<ErrorScreenProps, 'onReset'> {
    readonly children: React__default.ReactNode;
}
interface ErrorBoundaryState {
    readonly hasError: boolean;
}
declare class ErrorBoundary extends React__default.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState;
    static getDerivedStateFromError(): ErrorBoundaryState;
    handleReset: () => void;
    render(): string | number | bigint | boolean | Iterable<React__default.ReactNode> | Promise<string | number | bigint | boolean | React__default.ReactPortal | React__default.ReactElement<unknown, string | React__default.JSXElementConstructor<any>> | Iterable<React__default.ReactNode> | null | undefined> | React__default.JSX.Element | null | undefined;
}

interface LoadErrorStateProps {
    readonly message: string;
    readonly title: string;
    readonly retryLabel: string;
    readonly onRetry: () => void;
    /**
     * Optional logo / illustration rendered above the title.
     * Consumers pass their own branded image. No logo is shown if omitted.
     */
    readonly logo?: React__default.ReactNode;
}

declare const LoadErrorState: ({ message, title, retryLabel, onRetry, logo }: LoadErrorStateProps) => React__default.JSX.Element;

interface AuthRequiredScreenProps {
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
    readonly logo?: React__default.ReactNode;
}

declare const AuthRequiredScreen: ({ subtitle, defaultSubtitle, title, signInLabel, onSignIn, logo, }: AuthRequiredScreenProps) => React__default.JSX.Element;

interface LoaderProps {
    readonly size?: IconSize;
}

declare const Loader: ({ size }: LoaderProps) => React__default.JSX.Element;

interface BottomSheetProps {
    readonly visible: boolean;
    readonly onClose: () => void;
    readonly title?: string;
    readonly children: React__default.ReactNode;
}

declare const BottomSheet: ({ visible, onClose, title, children }: BottomSheetProps) => React__default.JSX.Element;

type SelectorOption = {
    label: string;
    value: string;
};
interface PillSelectorProps extends ViewProps {
    readonly options: SelectorOption[];
    readonly value: string;
    readonly onChange: (value: string) => void;
    readonly backgroundColor?: SurfaceColor;
    readonly thumbColor?: SurfaceColor;
}

declare const PillSelector: ({ options, value, onChange, backgroundColor, thumbColor, ...props }: PillSelectorProps) => React__default.JSX.Element;

interface SelectInputProps {
    readonly label?: string;
    readonly placeholder?: string;
    readonly value: string;
    readonly options: SelectorOption[];
    readonly onChange: (value: string) => void;
    readonly error?: string;
    readonly disabled?: boolean;
}

declare const SelectInput: ({ label, placeholder, value, options, onChange, error, disabled, }: SelectInputProps) => React__default.JSX.Element;

interface ScreenHeaderProps {
    readonly title: string;
    readonly subtitle?: string;
    readonly hideBack?: boolean;
    /** Called when back button is pressed. If omitted the component calls navigation.goBack() via @react-navigation/native. */
    readonly onBack?: () => void;
    /** Accessibility label for the back button. Defaults to "Back". */
    readonly backAccessibilityLabel?: string;
}

declare const ScreenHeader: ({ title, subtitle, hideBack, onBack, backAccessibilityLabel, }: ScreenHeaderProps) => React__default.JSX.Element;

interface SafeScreenHeaderProps {
    readonly title: string;
    readonly subtitle?: string;
    readonly hideBack?: boolean;
    readonly onBack?: () => void;
    readonly backAccessibilityLabel?: string;
}

declare const SafeScreenHeader: ({ title, subtitle, hideBack, onBack, backAccessibilityLabel, }: SafeScreenHeaderProps) => React__default.JSX.Element;

interface SettingsMenuItemData {
    readonly label: string;
    readonly iconName: IconName$1;
    readonly onPress: () => void;
}
interface SettingsMenuProps {
    readonly items: SettingsMenuItemData[];
}

declare const SettingsMenu: ({ items }: SettingsMenuProps) => React__default.JSX.Element;

interface IconButtonProps extends TouchableOpacityProps {
    readonly iconName: IconName$1;
    readonly iconSize?: IconSize;
    readonly iconColor?: FontColor;
    readonly surfaceColor?: SurfaceColor;
}

declare const IconButton: ({ iconName, iconSize, iconColor, surfaceColor, style, ...props }: IconButtonProps) => React__default.JSX.Element;

interface TagButtonProps extends TextProps {
    readonly onPress: () => void;
    readonly surfaceColor?: SurfaceColor;
    readonly borderColor?: BorderColor;
    readonly style?: StyleProp<ViewStyle>;
    readonly fullWidth?: boolean;
    readonly disabled?: boolean;
    readonly loading?: boolean;
    readonly iconName?: IconName$1;
}

declare const TagButton: ({ onPress, loading, disabled, iconName, ...tagProps }: TagButtonProps) => React__default.JSX.Element;

interface LocationLabelProps {
    readonly location: string;
    readonly numberOfLines?: number;
    readonly style?: StyleProp<ViewStyle>;
}

declare const LocationLabel: ({ location, numberOfLines, style }: LocationLabelProps) => React__default.JSX.Element;

export { type LineHeight as $, type ActivityIndicatorProps as A, type ButtonProps as B, type Color as C, type CornerRad as D, type CornerRadTheme as E, ErrorBoundary as F, type ErrorBoundaryProps as G, type FontColor as H, type FontColorTheme as I, type FontFamily as J, type FontFamilyTheme as K, type FontSize as L, type FontSizeTheme as M, type FontWeight as N, type FontWeightTheme as O, GoogleSignInButton as P, type GoogleSignInButtonProps as Q, Icon as R, type SeparatorProps as S, type TextProps as T, IconButton as U, type IconButtonProps as V, type IconProps as W, type IconSize as X, type IconSizeTheme as Y, Label as Z, type LabelProps as _, type TextInputProps as a, type LineHeightTheme as a0, LoadErrorState as a1, type LoadErrorStateProps as a2, Loader as a3, type LoaderProps as a4, LocationLabel as a5, type LocationLabelProps as a6, type OverlayColorTheme as a7, PillSelector as a8, type PillSelectorProps as a9, type TagProps as aA, type TextAlign as aB, ThemeContext as aC, ThemeProvider as aD, TimeTag as aE, type TimeTagProps as aF, darkTheme as aG, defaultTheme as aH, useBaseTheme as aI, SafeScreenHeader as aa, type SafeScreenHeaderProps as ab, ScreenHeader as ac, type ScreenHeaderProps as ad, SelectInput as ae, type SelectInputProps as af, type SelectorOption as ag, SettingsMenu as ah, type SettingsMenuItemData as ai, type SettingsMenuProps as aj, type ShadowTheme as ak, SocialAuth as al, type SocialAuthProps as am, type Spacing as an, type SpacingTheme as ao, StepIndicator as ap, type StepIndicatorProps as aq, type SurfaceColor as ar, type SurfaceColorTheme as as, SvgIcon as at, type SvgIconProps as au, SvgImage as av, type SvgImageProps as aw, Tag as ax, TagButton as ay, type TagButtonProps as az, type SwitchProps as b, ActionModal as c, type ActionModalProps as d, AppleSignInButton as e, type AppleSignInButtonProps as f, AuthModeToggle as g, type AuthModeToggleProps as h, AuthRequiredScreen as i, type AuthRequiredScreenProps as j, type AvailabilityStatus as k, AvailabilityTag as l, type AvailabilityTagProps as m, type BaseTheme as n, type BorderColor as o, type BorderColorTheme as p, type BorderWidth as q, type BorderWidthTheme as r, BottomSheet as s, type BottomSheetProps as t, type ButtonSize as u, type ButtonVariant as v, Colors as w, type ComponentSizeTheme as x, ConcurrencyTag as y, type ConcurrencyTagProps as z };
