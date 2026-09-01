import { T as Theme, a as TextProps, B as ButtonProps, A as ActivityIndicatorProps, S as SeparatorProps, b as TextInputProps, c as SwitchProps, L as LaundryMapMarkerProps, M as MachineCardProps } from './types-CWjRudgh.mjs';
export { d as ActionModal, e as ActionModalProps, f as AppleSignInButton, g as AppleSignInButtonProps, h as AuthModeToggle, i as AuthModeToggleProps, j as AuthRequiredScreen, k as AuthRequiredScreenProps, l as AvailabilityStatus, m as AvailabilityTag, n as AvailabilityTagProps, o as BaseTheme, p as BorderColor, q as BorderColorTheme, r as BorderWidth, s as BorderWidthTheme, t as BottomSheet, u as BottomSheetProps, v as ButtonSize, w as ButtonVariant, C as Color, x as Colors, y as ComponentSizeTheme, z as ConcurrencyTag, D as ConcurrencyTagProps, E as CornerRad, F as CornerRadTheme, G as DarkTheme, H as DefaultTheme, I as ErrorBoundary, J as ErrorBoundaryProps, K as FontColor, N as FontColorTheme, O as FontFamily, P as FontFamilyTheme, Q as FontSize, R as FontSizeTheme, U as FontWeight, V as FontWeightTheme, W as GoogleSignInButton, X as GoogleSignInButtonProps, Y as Icon, Z as IconButton, _ as IconButtonProps, $ as IconProps, a0 as IconSize, a1 as IconSizeTheme, a2 as Label, a3 as LabelProps, a4 as LaundryLocation, a5 as LaundryMachine, a6 as LaundryMarkerData, a7 as LetterSpacingTheme, a8 as LineHeight, a9 as LineHeightTheme, aa as Loader, ab as LoaderProps, ac as LocationLabel, ad as LocationLabelProps, ae as MachineCardLabels, af as MachineCardMachine, ag as MachineStatus, ah as MachineType, ai as OverlayColorTheme, aj as PillSelector, ak as PillSelectorProps, al as SafeScreenHeader, am as SafeScreenHeaderProps, an as ScreenHeader, ao as ScreenHeaderProps, ap as SelectInput, aq as SelectInputProps, ar as SelectorOption, as as SettingsMenu, at as SettingsMenuItemData, au as SettingsMenuProps, av as ShadowBottomNavTheme, aw as ShadowBox, ax as ShadowBoxTheme, ay as ShadowCardTheme, az as ShadowFloatingTheme, aA as ShadowTheme, aB as Skeleton, aC as SkeletonProps, aD as SocialAuth, aE as SocialAuthProps, aF as Spacing, aG as SpacingTheme, aH as StepIndicator, aI as StepIndicatorProps, aJ as SurfaceColor, aK as SurfaceColorTheme, aL as SvgIcon, aM as SvgIconProps, aN as SvgImage, aO as SvgImageProps, aP as Tag, aQ as TagButton, aR as TagButtonProps, aS as TagProps, aT as TagVariant, aU as TextAlign, aV as ThemeConstants, aW as ThemeContext, aX as ThemeProvider, aY as TimeTag, aZ as TimeTagProps, a_ as ZIndexTheme, a$ as darkTheme, b0 as defaultTheme, b1 as useBaseTheme } from './types-CWjRudgh.mjs';
import React__default from 'react';
import { TextProps as TextProps$1, TextInputProps as TextInputProps$1, StyleProp, TextStyle } from 'react-native';
import 'react-native-svg';

declare const useTheme: () => Theme;

interface TextComponentProps extends TextProps {
    readonly style?: TextProps$1['style'];
    readonly numberOfLines?: number;
}
declare const Text: ({ children, fontSize, color, fontWeight, lineHeight, textAlign, style, numberOfLines, }: TextComponentProps) => React__default.JSX.Element;

declare const Button: ({ label, variant, size, iconName, onPress, style, textStyle, fullWidth, alignLeft, disabled, submitting, stale, rounded, }: ButtonProps) => React__default.JSX.Element;

declare const ActivityIndicator: ({ color, size }: ActivityIndicatorProps) => React__default.JSX.Element;

declare const Separator: React__default.MemoExoticComponent<({ direction }: SeparatorProps) => React__default.JSX.Element>;

interface RNTextInputComponentProps extends TextInputProps, Omit<TextInputProps$1, keyof TextInputProps> {
    readonly style?: StyleProp<TextStyle>;
}
declare const TextInput: ({ label, error, color, placeholderColor, style, maxLength, value, secureTextEntry, ...rest }: RNTextInputComponentProps) => React__default.JSX.Element;

declare const Switch: ({ value, onValueChange, disabled }: SwitchProps) => React__default.JSX.Element;

declare const LaundryMapMarker: ({ laundry, uniqueId, size, showAvailability, onPress, }: LaundryMapMarkerProps) => React__default.JSX.Element;

declare const MachineCard: ({ machine, labels, onPress }: MachineCardProps) => React__default.JSX.Element;

interface ProgramOption {
    value: string;
    label: string;
    duration: string;
    price: string | null;
}
interface ProgramSelectorProps {
    options: ProgramOption[];
    value: string | null;
    onChange: (value: string) => void;
}

declare const ProgramSelector: ({ options, value, onChange }: ProgramSelectorProps) => React__default.JSX.Element;

export { ActivityIndicator, ActivityIndicatorProps, Button, ButtonProps, LaundryMapMarker, LaundryMapMarkerProps, MachineCard, MachineCardProps, type ProgramOption, ProgramSelector, type ProgramSelectorProps, Separator, SeparatorProps, Switch, SwitchProps, Text, TextInput, TextInputProps, TextProps, Theme, useTheme };
