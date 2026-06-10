import * as React$1 from 'react';
import React__default from 'react';
import * as react_native from 'react-native';
import { StyleProp, ViewStyle, TextStyle, AccessibilityProps, ViewProps, TouchableOpacityProps } from 'react-native';
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

type MachineStatus = 'available' | 'in_use' | 'out_of_order' | 'maintenance';
type MachineType = 'washing_machine' | 'dryer';

interface SpacingTheme$1 {
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
interface SurfaceColorTheme$1 {
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
interface FontFamilyTheme$1 {
    readonly poppins: string;
}
interface CornerRadTheme$1 {
    readonly 'corner-rad-none': number;
    readonly 'corner-rad-sm': number;
    readonly 'corner-rad-md': number;
    readonly 'corner-rad-lg': number;
    readonly 'corner-rad-xl': number;
    readonly 'corner-rad-xxl': number;
    readonly 'corner-rad-xxxl': number;
    readonly 'corner-rad-full': number;
}
interface BorderWidthTheme$1 {
    readonly 'border-width-none': number;
    readonly 'border-width-xs': number;
    readonly 'border-width-sm': number;
    readonly 'border-width-md': number;
    readonly 'border-width-lg': number;
    readonly 'border-width-xl': number;
    readonly 'border-width-xxl': number;
    readonly 'border-width-xxxl': number;
}
interface BorderColorTheme$1 {
    readonly 'border-primary': string;
    readonly 'border-secondary': string;
    readonly 'border-disabled': string;
    readonly 'border-placeholder': string;
    readonly 'border-invert': string;
    readonly 'border-error': string;
    readonly 'border-transparent': string;
}
interface OverlayColorTheme$1 {
    readonly modal: string;
    readonly dimmer: string;
    readonly backdrop: string;
    readonly glassButton: string;
}
interface ComponentSizeTheme$1 {
    readonly fab: number;
    readonly iconContainer: number;
    readonly cardMaxWidth: number;
    readonly descriptionInput: number;
    readonly laundryImage: number;
}
interface IconSizeTheme$1 {
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
interface FontSizeTheme$1 {
    readonly 'font-size-xs': number;
    readonly 'font-size-sm': number;
    readonly 'font-size-md': number;
    readonly 'font-size-lg': number;
    readonly 'font-size-xl': number;
    readonly 'font-size-xxl': number;
    readonly 'font-size-xxxl': number;
    readonly 'font-size-xxxxl': number;
}
interface FontWeightTheme$1 {
    readonly light: '300' | '400' | '500' | '600' | '700' | '800';
    readonly regular: '300' | '400' | '500' | '600' | '700' | '800';
    readonly medium: '300' | '400' | '500' | '600' | '700' | '800';
    readonly semibold: '300' | '400' | '500' | '600' | '700' | '800';
    readonly bold: '300' | '400' | '500' | '600' | '700' | '800';
    readonly extrabold: '300' | '400' | '500' | '600' | '700' | '800';
}
interface LineHeightTheme$1 {
    readonly 'line-height-xs': number;
    readonly 'line-height-sm': number;
    readonly 'line-height-md': number;
    readonly 'line-height-lg': number;
    readonly 'line-height-xl': number;
    readonly 'line-height-xxl': number;
    readonly 'line-height-xxxl': number;
}
interface FontColorTheme$1 {
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
    readonly spacing: SpacingTheme$1;
    readonly surfaceColor: SurfaceColorTheme$1;
    readonly shadowBox: ShadowTheme;
    readonly shadowCard: ShadowTheme;
    readonly shadowFloating: ShadowTheme;
    readonly shadowBottomNav: ShadowTheme;
    readonly fontFamily: FontFamilyTheme$1;
    readonly fontSize: FontSizeTheme$1;
    readonly fontWeight: FontWeightTheme$1;
    readonly lineHeight: LineHeightTheme$1;
    readonly fontColor: FontColorTheme$1;
    readonly cornerRad: CornerRadTheme$1;
    readonly borderColor: BorderColorTheme$1;
    readonly borderWidth: BorderWidthTheme$1;
    readonly iconSize: IconSizeTheme$1;
    readonly overlayColor: OverlayColorTheme$1;
    readonly componentSize: ComponentSizeTheme$1;
}
type Spacing = keyof SpacingTheme$1;
type SurfaceColor = keyof SurfaceColorTheme$1;
type FontFamily = keyof FontFamilyTheme$1;
type CornerRad = keyof CornerRadTheme$1;
type BorderColor = keyof BorderColorTheme$1;
type BorderWidth = keyof BorderWidthTheme$1;
type FontSize = keyof FontSizeTheme$1;
type FontWeight = keyof FontWeightTheme$1;
type LineHeight = keyof LineHeightTheme$1;
type FontColor = keyof FontColorTheme$1;
type IconSize = keyof IconSizeTheme$1;
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

interface SpacingTheme {
    'spacing-none': number;
    'spacing-xxxs': number;
    'spacing-xxs': number;
    'spacing-xs': number;
    'spacing-sm': number;
    'spacing-md': number;
    'spacing-lg': number;
    'spacing-xl': number;
    'spacing-xxl': number;
    'spacing-xxxl': number;
    'spacing-xxxxl': number;
    'spacing-max': number;
}
interface SurfaceColorTheme {
    'surface-primary': string;
    'surface-secondary': string;
    'surface-button': string;
    'surface-tertiary': string;
    'surface-background': string;
    'surface-surface': string;
    'surface-disabled': string;
    'surface-invert': string;
    'surface-transparent': string;
    'surface-dark': string;
    'surface-success': string;
    'surface-success-subtle': string;
    'surface-error': string;
    'surface-error-subtle': string;
    'surface-warning': string;
    'surface-warning-subtle': string;
    'surface-tertiary-subtle': string;
    'surface-status-available': string;
    'surface-status-available-subtle': string;
    'surface-status-in-use': string;
    'surface-status-in-use-subtle': string;
    'surface-status-out-of-order': string;
    'surface-status-out-of-order-subtle': string;
    'surface-status-maintenance': string;
    'surface-status-maintenance-subtle': string;
}
interface ShadowBoxTheme {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
}
type ShadowCardTheme = ShadowBoxTheme;
type ShadowFloatingTheme = ShadowBoxTheme;
type ShadowBottomNavTheme = ShadowBoxTheme;
interface FontFamilyTheme {
    poppins: string;
}
interface BorderWidthTheme {
    'border-width-none': number;
    'border-width-xs': number;
    'border-width-sm': number;
    'border-width-md': number;
    'border-width-lg': number;
    'border-width-xl': number;
    'border-width-xxl': number;
    'border-width-xxxl': number;
}
interface CornerRadTheme {
    'corner-rad-none': number;
    'corner-rad-sm': number;
    'corner-rad-md': number;
    'corner-rad-lg': number;
    'corner-rad-xl': number;
    'corner-rad-xxl': number;
    'corner-rad-xxxl': number;
    'corner-rad-full': number;
}
interface BorderColorTheme {
    'border-primary': string;
    'border-secondary': string;
    'border-disabled': string;
    'border-placeholder': string;
    'border-invert': string;
    'border-error': string;
    'border-transparent': string;
}
interface IconSizeTheme {
    'icon-size-xs': number;
    'icon-size-sm': number;
    'icon-size-md': number;
    'icon-size-lg': number;
    'icon-size-xl': number;
    'icon-size-xxl': number;
    'icon-size-xxxl': number;
    'icon-size-xxxxl': number;
    'icon-size-xxxxxl': number;
    'icon-size-xxxxxxl': number;
    'icon-size-128': number;
    'icon-size-160': number;
    'icon-size-192': number;
    'icon-size-256': number;
}
interface FontSizeTheme {
    'font-size-xs': number;
    'font-size-sm': number;
    'font-size-md': number;
    'font-size-lg': number;
    'font-size-xl': number;
    'font-size-xxl': number;
    'font-size-xxxl': number;
    'font-size-xxxxl': number;
}
interface FontWeightTheme {
    light: '300' | '400' | '500' | '600' | '700' | '800';
    regular: '300' | '400' | '500' | '600' | '700' | '800';
    medium: '300' | '400' | '500' | '600' | '700' | '800';
    semibold: '300' | '400' | '500' | '600' | '700' | '800';
    bold: '300' | '400' | '500' | '600' | '700' | '800';
    extrabold: '300' | '400' | '500' | '600' | '700' | '800';
}
interface LineHeightTheme {
    'line-height-xs': number;
    'line-height-sm': number;
    'line-height-md': number;
    'line-height-lg': number;
    'line-height-xl': number;
    'line-height-xxl': number;
    'line-height-xxxl': number;
}
interface FontColorTheme {
    'font-primary': string;
    'font-secondary': string;
    'font-highlight': string;
    'font-light': string;
    'font-disabled': string;
    'font-placeholder': string;
    'font-invert': string;
    'font-success': string;
    'font-error': string;
    'font-warning': string;
    'font-status-available': string;
    'font-status-in-use': string;
    'font-status-out-of-order': string;
    'font-status-maintenance': string;
}
interface LetterSpacingTheme {
    label: number;
}
interface ComponentSizeTheme {
    fab: number;
    iconContainer: number;
    cardMaxWidth: number;
    descriptionInput: number;
    laundryImage: number;
}
interface ZIndexTheme {
    overlay: number;
    message: number;
    background: number;
    camera: number;
}
interface OverlayColorTheme {
    modal: string;
    dimmer: string;
    backdrop: string;
    glassButton: string;
}
interface ThemeConstants {
    navBarHeight: number;
    spacing: SpacingTheme;
    surfaceColor: SurfaceColorTheme;
    shadowBox: ShadowBoxTheme;
    shadowCard: ShadowCardTheme;
    shadowFloating: ShadowFloatingTheme;
    shadowBottomNav: ShadowBottomNavTheme;
    fontFamily: FontFamilyTheme;
    fontSize: FontSizeTheme;
    fontWeight: FontWeightTheme;
    lineHeight: LineHeightTheme;
    fontColor: FontColorTheme;
    letterSpacing: LetterSpacingTheme;
    borderWidth: BorderWidthTheme;
    cornerRad: CornerRadTheme;
    borderColor: BorderColorTheme;
    iconSize: IconSizeTheme;
    componentSize: ComponentSizeTheme;
    zIndex: ZIndexTheme;
    overlayColor: OverlayColorTheme;
    navigation: ReactNavigation.Theme;
}
interface Theme extends ThemeConstants {
    topInset: number;
    bottomInset: number;
}
type ShadowBox = keyof ShadowBoxTheme;
type TagVariant = 'primary' | 'secondary' | 'disabled';

declare const DefaultThemeConstants: ThemeConstants;

declare const DarkThemeConstants: ThemeConstants;

interface TextProps {
    readonly children?: React.ReactNode;
    readonly fontSize?: FontSize;
    readonly color?: FontColor;
    readonly fontWeight?: FontWeight;
    readonly lineHeight?: LineHeight;
    readonly textAlign?: TextAlign;
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
    PlusCircle: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Profile: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    QrCode: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Settings: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Star: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Tool: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    User: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
    Wind: (props: react_native_svg.SvgProps) => React$1.JSX.Element;
};
type IconName$1 = keyof typeof icons;

interface ButtonProps {
    readonly label?: string;
    readonly variant?: ButtonVariant;
    readonly size?: ButtonSize;
    readonly iconName?: IconName$1;
    readonly onPress?: () => void;
    readonly fullWidth?: boolean;
    readonly alignLeft?: boolean;
    readonly disabled?: boolean;
    readonly submitting?: boolean;
    readonly stale?: boolean;
    readonly rounded?: boolean;
    /** RN-only: overrides the outer TouchableOpacity style. Web ignores this. */
    readonly style?: StyleProp<ViewStyle>;
    /** RN-only: overrides the label Text style. Web ignores this. */
    readonly textStyle?: StyleProp<TextStyle>;
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
    readonly autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    readonly keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'name-phone-pad' | 'twitter' | 'web-search' | 'visible-password';
    readonly multiline?: boolean;
}

interface SwitchProps {
    readonly value: boolean;
    readonly onValueChange: (value: boolean) => void;
    readonly disabled?: boolean;
}

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

interface LaundryMachine {
    id: number;
    status: MachineStatus;
    type: MachineType;
}
interface LaundryLocation {
    latitude: string | null;
    longitude: string | null;
}
interface LaundryMarkerData {
    id: number;
    location: LaundryLocation;
    machines?: LaundryMachine[];
}
interface LaundryMapMarkerProps {
    readonly laundry: LaundryMarkerData;
    /** Unique string identifier passed to MapboxGL MarkerView's id prop. */
    readonly uniqueId: string;
    /** Diameter of the pin in logical pixels. Defaults to 40. */
    readonly size?: number;
    /** When true, fill represents availability; otherwise represents occupation. */
    readonly showAvailability?: boolean;
    readonly onPress?: () => void;
}

interface MachineCardMachine {
    id: number;
    name: string;
    type: MachineType;
    status: MachineStatus;
    /** Seconds remaining in the current cycle — present only when status === 'in_use'. */
    cycleRemainingSeconds?: number;
    /** Human-readable capacity string (e.g. "10 Kgs"). Omit when unknown. */
    capacity?: string;
}
interface MachineCardLabels {
    /** Labels for the AvailabilityTag — all four keys required. */
    readonly availability: Record<AvailabilityStatus, string>;
}
interface MachineCardProps {
    readonly machine: MachineCardMachine;
    readonly labels: MachineCardLabels;
    readonly onPress?: () => void;
}

export { type IconProps as $, type ActivityIndicatorProps as A, type ButtonProps as B, type Color as C, type ConcurrencyTagProps as D, type CornerRad as E, type CornerRadTheme$1 as F, DarkThemeConstants as G, DefaultThemeConstants as H, ErrorBoundary as I, type ErrorBoundaryProps as J, type FontColor as K, type LaundryMapMarkerProps as L, type MachineCardProps as M, type FontColorTheme$1 as N, type FontFamily as O, type FontFamilyTheme$1 as P, type FontSize as Q, type FontSizeTheme$1 as R, type SeparatorProps as S, type Theme as T, type FontWeight as U, type FontWeightTheme$1 as V, GoogleSignInButton as W, type GoogleSignInButtonProps as X, Icon as Y, IconButton as Z, type IconButtonProps as _, type TextProps as a, useBaseTheme as a$, type IconSize as a0, type IconSizeTheme$1 as a1, Label as a2, type LabelProps as a3, type LaundryLocation as a4, type LaundryMachine as a5, type LaundryMarkerData as a6, type LetterSpacingTheme as a7, type LineHeight as a8, type LineHeightTheme$1 as a9, type ShadowTheme as aA, SocialAuth as aB, type SocialAuthProps as aC, type Spacing as aD, type SpacingTheme$1 as aE, StepIndicator as aF, type StepIndicatorProps as aG, type SurfaceColor as aH, type SurfaceColorTheme$1 as aI, SvgIcon as aJ, type SvgIconProps as aK, SvgImage as aL, type SvgImageProps as aM, Tag as aN, TagButton as aO, type TagButtonProps as aP, type TagProps as aQ, type TagVariant as aR, type TextAlign as aS, type ThemeConstants as aT, ThemeContext as aU, ThemeProvider as aV, TimeTag as aW, type TimeTagProps as aX, type ZIndexTheme as aY, darkTheme as aZ, defaultTheme as a_, Loader as aa, type LoaderProps as ab, LocationLabel as ac, type LocationLabelProps as ad, type MachineCardLabels as ae, type MachineCardMachine as af, type MachineStatus as ag, type MachineType as ah, type OverlayColorTheme$1 as ai, PillSelector as aj, type PillSelectorProps as ak, SafeScreenHeader as al, type SafeScreenHeaderProps as am, ScreenHeader as an, type ScreenHeaderProps as ao, SelectInput as ap, type SelectInputProps as aq, type SelectorOption as ar, SettingsMenu as as, type SettingsMenuItemData as at, type SettingsMenuProps as au, type ShadowBottomNavTheme as av, type ShadowBox as aw, type ShadowBoxTheme as ax, type ShadowCardTheme as ay, type ShadowFloatingTheme as az, type TextInputProps as b, type SwitchProps as c, ActionModal as d, type ActionModalProps as e, AppleSignInButton as f, type AppleSignInButtonProps as g, AuthModeToggle as h, type AuthModeToggleProps as i, AuthRequiredScreen as j, type AuthRequiredScreenProps as k, type AvailabilityStatus as l, AvailabilityTag as m, type AvailabilityTagProps as n, type BaseTheme as o, type BorderColor as p, type BorderColorTheme$1 as q, type BorderWidth as r, type BorderWidthTheme$1 as s, BottomSheet as t, type BottomSheetProps as u, type ButtonSize as v, type ButtonVariant as w, Colors as x, type ComponentSizeTheme$1 as y, ConcurrencyTag as z };
