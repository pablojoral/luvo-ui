import { T as TextProps, B as ButtonProps, A as ActivityIndicatorProps, S as SeparatorProps, a as TextInputProps, b as SwitchProps } from './LocationLabel-jJmqEMkh.js';
export { c as ActionModal, d as ActionModalProps, e as AppleSignInButton, f as AppleSignInButtonProps, g as AuthModeToggle, h as AuthModeToggleProps, i as AuthRequiredScreen, j as AuthRequiredScreenProps, k as AvailabilityStatus, l as AvailabilityTag, m as AvailabilityTagProps, n as BaseTheme, o as BorderColor, p as BorderColorTheme, q as BorderWidth, r as BorderWidthTheme, s as BottomSheet, t as BottomSheetProps, u as ButtonSize, v as ButtonVariant, C as Color, w as Colors, x as ComponentSizeTheme, y as ConcurrencyTag, z as ConcurrencyTagProps, D as CornerRad, E as CornerRadTheme, F as ErrorBoundary, G as ErrorBoundaryProps, H as FontColor, I as FontColorTheme, J as FontFamily, K as FontFamilyTheme, L as FontSize, M as FontSizeTheme, N as FontWeight, O as FontWeightTheme, P as GoogleSignInButton, Q as GoogleSignInButtonProps, R as Icon, U as IconButton, V as IconButtonProps, W as IconProps, X as IconSize, Y as IconSizeTheme, Z as Label, _ as LabelProps, $ as LineHeight, a0 as LineHeightTheme, a1 as LoadErrorState, a2 as LoadErrorStateProps, a3 as Loader, a4 as LoaderProps, a5 as LocationLabel, a6 as LocationLabelProps, a7 as OverlayColorTheme, a8 as PillSelector, a9 as PillSelectorProps, aa as SafeScreenHeader, ab as SafeScreenHeaderProps, ac as ScreenHeader, ad as ScreenHeaderProps, ae as SelectInput, af as SelectInputProps, ag as SelectorOption, ah as SettingsMenu, ai as SettingsMenuItemData, aj as SettingsMenuProps, ak as ShadowTheme, al as SocialAuth, am as SocialAuthProps, an as Spacing, ao as SpacingTheme, ap as StepIndicator, aq as StepIndicatorProps, ar as SurfaceColor, as as SurfaceColorTheme, at as SvgIcon, au as SvgIconProps, av as SvgImage, aw as SvgImageProps, ax as Tag, ay as TagButton, az as TagButtonProps, aA as TagProps, aB as TextAlign, aC as ThemeContext, aD as ThemeProvider, aE as TimeTag, aF as TimeTagProps, aG as darkTheme, aH as defaultTheme, aI as useBaseTheme } from './LocationLabel-jJmqEMkh.js';
import React__default from 'react';
import { TextProps as TextProps$1 } from 'react-native';
import 'react-native-svg';

interface TextComponentProps extends TextProps {
    readonly style?: TextProps$1['style'];
    readonly numberOfLines?: number;
}
declare const Text: ({ children, fontSize, color, fontWeight, lineHeight, textAlign, style, numberOfLines, }: TextComponentProps) => React__default.JSX.Element;

declare const Button: ({ label, variant, size, onPress, disabled, submitting, fullWidth, rounded, }: ButtonProps) => React__default.JSX.Element;

declare const ActivityIndicator: ({ color, size }: ActivityIndicatorProps) => React__default.JSX.Element;

declare const Separator: React__default.MemoExoticComponent<({ direction }: SeparatorProps) => React__default.JSX.Element>;

declare const TextInput: ({ label, error, color, placeholderColor, value, secureTextEntry, editable, maxLength, onChangeText, placeholder, }: TextInputProps) => React__default.JSX.Element;

declare const Switch: ({ value, onValueChange, disabled }: SwitchProps) => React__default.JSX.Element;

export { ActivityIndicator, ActivityIndicatorProps, Button, ButtonProps, Separator, SeparatorProps, Switch, SwitchProps, Text, TextInput, TextInputProps, TextProps };
