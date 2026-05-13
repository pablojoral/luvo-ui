// Platform-agnostic design token interfaces.
// RN-specific fields (topInset, bottomInset, navigation) are intentionally excluded —
// those live in luvo-mobile's extended Theme type.

export interface SpacingTheme {
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

export interface SurfaceColorTheme {
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

export interface ShadowTheme {
  readonly shadowColor: string;
  readonly shadowOffset: {
    readonly width: number;
    readonly height: number;
  };
  readonly shadowOpacity: number;
  readonly shadowRadius: number;
  readonly elevation: number;
}

export interface FontFamilyTheme {
  readonly poppins: string;
}

export interface CornerRadTheme {
  readonly 'corner-rad-none': number;
  readonly 'corner-rad-sm': number;
  readonly 'corner-rad-md': number;
  readonly 'corner-rad-lg': number;
  readonly 'corner-rad-xl': number;
  readonly 'corner-rad-xxl': number;
  readonly 'corner-rad-xxxl': number;
  readonly 'corner-rad-full': number;
}

export interface BorderWidthTheme {
  readonly 'border-width-none': number;
  readonly 'border-width-xs': number;
  readonly 'border-width-sm': number;
  readonly 'border-width-md': number;
  readonly 'border-width-lg': number;
  readonly 'border-width-xl': number;
  readonly 'border-width-xxl': number;
  readonly 'border-width-xxxl': number;
}

export interface BorderColorTheme {
  readonly 'border-primary': string;
  readonly 'border-secondary': string;
  readonly 'border-disabled': string;
  readonly 'border-placeholder': string;
  readonly 'border-invert': string;
  readonly 'border-error': string;
  readonly 'border-transparent': string;
}

export interface OverlayColorTheme {
  readonly modal: string;
  readonly dimmer: string;
  readonly backdrop: string;
  readonly glassButton: string;
}

export interface ComponentSizeTheme {
  readonly fab: number;
  readonly iconContainer: number;
  readonly cardMaxWidth: number;
  readonly descriptionInput: number;
  readonly laundryImage: number;
}

export interface IconSizeTheme {
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

export interface FontSizeTheme {
  readonly 'font-size-xs': number;
  readonly 'font-size-sm': number;
  readonly 'font-size-md': number;
  readonly 'font-size-lg': number;
  readonly 'font-size-xl': number;
  readonly 'font-size-xxl': number;
  readonly 'font-size-xxxl': number;
  readonly 'font-size-xxxxl': number;
}

export interface FontWeightTheme {
  readonly light: '300' | '400' | '500' | '600' | '700' | '800';
  readonly regular: '300' | '400' | '500' | '600' | '700' | '800';
  readonly medium: '300' | '400' | '500' | '600' | '700' | '800';
  readonly semibold: '300' | '400' | '500' | '600' | '700' | '800';
  readonly bold: '300' | '400' | '500' | '600' | '700' | '800';
  readonly extrabold: '300' | '400' | '500' | '600' | '700' | '800';
}

export interface LineHeightTheme {
  readonly 'line-height-xs': number;
  readonly 'line-height-sm': number;
  readonly 'line-height-md': number;
  readonly 'line-height-lg': number;
  readonly 'line-height-xl': number;
  readonly 'line-height-xxl': number;
  readonly 'line-height-xxxl': number;
}

export interface FontColorTheme {
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

// BaseTheme: platform-agnostic fields only.
// luvo-mobile extends this with topInset, bottomInset, and navigation.
export interface BaseTheme {
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

// Convenience key types for use as prop types
export type Spacing = keyof SpacingTheme;
export type SurfaceColor = keyof SurfaceColorTheme;
export type FontFamily = keyof FontFamilyTheme;
export type CornerRad = keyof CornerRadTheme;
export type BorderColor = keyof BorderColorTheme;
export type BorderWidth = keyof BorderWidthTheme;
export type FontSize = keyof FontSizeTheme;
export type FontWeight = keyof FontWeightTheme;
export type LineHeight = keyof LineHeightTheme;
export type FontColor = keyof FontColorTheme;
export type IconSize = keyof IconSizeTheme;
export type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'xl';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'link';
