// src/tokens/colors.ts
var Colors = {
  // Essentials
  "colors-white": "#FEFEFE",
  "colors-black": "#000000",
  "colors-semi-transparent": "rgba(0, 0, 0, 0.5)",
  "colors-transparent": "transparent",
  // Grey scale
  "colors-grey-25": "#f4f4f5",
  "colors-grey-50": "#eaeaeb",
  "colors-grey-100": "#d5d6d7",
  "colors-grey-200": "#abadb0",
  "colors-grey-300": "#828488",
  "colors-grey-400": "#585b61",
  "colors-grey-500": "#2f323a",
  "colors-grey-600": "#25282e",
  "colors-grey-700": "#1c1e22",
  "colors-grey-800": "#121417",
  "colors-grey-900": "#090a0b",
  // Primary (Lavender / Purple tones)
  "colors-lavender-25": "#fcfbfd",
  "colors-lavender-50": "#faf7fb",
  "colors-lavender-100": "#f6f0f8",
  "colors-lavender-200": "#eee2f2",
  "colors-lavender-300": "#e6d4ec",
  "colors-lavender-400": "#dec6e6",
  "colors-lavender-500": "#d6b8e0",
  "colors-lavender-600": "#ab93b3",
  "colors-lavender-700": "#806e86",
  "colors-lavender-800": "#554959",
  "colors-lavender-900": "#2a242c",
  // Secondary (Rose / Pink tones)
  "colors-rose-25": "#fdf6f7",
  "colors-rose-50": "#fbeef0",
  "colors-rose-100": "#f7dee2",
  "colors-rose-200": "#efbdc6",
  "colors-rose-300": "#e79ca9",
  "colors-rose-400": "#df7b8d",
  "colors-rose-500": "#d75b71",
  "colors-rose-600": "#ac485a",
  "colors-rose-700": "#813643",
  "colors-rose-800": "#56242d",
  "colors-rose-900": "#2b1216",
  // Status / UI colors
  "colors-green-25": "#f3fcf4",
  "colors-green-50": "#e6f9e6",
  "colors-green-100": "#c8f0cb",
  "colors-green-300": "#70d77a",
  "colors-green-500": "#00B300",
  "colors-green-700": "#117a12",
  "colors-green-900": "#0b4e0b",
  "colors-red-25": "#fff6f6",
  "colors-red-50": "#fbeef0",
  "colors-red-100": "#FFEDED",
  "colors-red-300": "#ff9b9b",
  "colors-red-500": "#FF5959",
  "colors-red-600": "#FF3B3B",
  "colors-red-800": "#b62424",
  "colors-red-900": "#7a1414",
  "colors-yellow-25": "#fffbf3",
  "colors-yellow-50": "#fbeef0",
  "colors-yellow-100": "#fff1c2",
  "colors-yellow-300": "#ffdf70",
  "colors-yellow-500": "#FFCD00",
  "colors-yellow-600": "#e6b800",
  "colors-yellow-800": "#997a00",
  "colors-yellow-900": "#664e00"
};

// src/tokens/defaultTheme.ts
var defaultTheme = {
  spacing: {
    "spacing-none": 0,
    "spacing-xxxs": 2,
    "spacing-xxs": 4,
    "spacing-xs": 8,
    "spacing-sm": 12,
    "spacing-md": 16,
    "spacing-lg": 20,
    "spacing-xl": 24,
    "spacing-xxl": 32,
    "spacing-xxxl": 40,
    "spacing-xxxxl": 48,
    "spacing-max": 96
  },
  surfaceColor: {
    "surface-primary": Colors["colors-white"],
    "surface-secondary": Colors["colors-rose-50"],
    "surface-button": Colors["colors-lavender-100"],
    "surface-tertiary": Colors["colors-grey-100"],
    "surface-background": Colors["colors-lavender-50"],
    "surface-surface": Colors["colors-lavender-300"],
    "surface-disabled": Colors["colors-lavender-600"],
    "surface-invert": Colors["colors-lavender-500"],
    "surface-success": Colors["colors-green-50"],
    "surface-success-subtle": Colors["colors-green-25"],
    "surface-error": Colors["colors-red-50"],
    "surface-error-subtle": Colors["colors-red-25"],
    "surface-warning": Colors["colors-yellow-100"],
    "surface-warning-subtle": Colors["colors-yellow-25"],
    "surface-tertiary-subtle": Colors["colors-grey-25"],
    "surface-status-available": Colors["colors-green-50"],
    "surface-status-available-subtle": Colors["colors-green-25"],
    "surface-status-in-use": Colors["colors-rose-100"],
    "surface-status-in-use-subtle": Colors["colors-rose-50"],
    "surface-status-out-of-order": Colors["colors-grey-50"],
    "surface-status-out-of-order-subtle": Colors["colors-grey-25"],
    "surface-status-maintenance": Colors["colors-yellow-100"],
    "surface-status-maintenance-subtle": Colors["colors-yellow-25"],
    "surface-transparent": "transparent",
    "surface-dark": Colors["colors-grey-900"]
  },
  shadowBox: {
    shadowColor: Colors["colors-black"],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  shadowCard: {
    shadowColor: Colors["colors-lavender-900"],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4
  },
  shadowFloating: {
    shadowColor: Colors["colors-lavender-900"],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8
  },
  shadowBottomNav: {
    shadowColor: Colors["colors-black"],
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 4
  },
  fontFamily: {
    poppins: "Poppins"
  },
  borderColor: {
    "border-primary": Colors["colors-grey-300"],
    "border-secondary": Colors["colors-grey-100"],
    "border-disabled": Colors["colors-grey-100"],
    "border-placeholder": Colors["colors-grey-400"],
    "border-invert": Colors["colors-white"],
    "border-error": Colors["colors-red-300"],
    "border-transparent": "transparent"
  },
  borderWidth: {
    "border-width-none": 0,
    "border-width-xs": 1,
    "border-width-sm": 2,
    "border-width-md": 3,
    "border-width-lg": 4,
    "border-width-xl": 5,
    "border-width-xxl": 6,
    "border-width-xxxl": 8
  },
  overlayColor: {
    modal: "rgba(47,50,58,0.45)",
    dimmer: "rgba(0,0,0,0.6)",
    backdrop: "rgba(0,0,0,0.5)",
    glassButton: "rgba(255,255,255,0.15)"
  },
  componentSize: {
    fab: 56,
    iconContainer: 48,
    cardMaxWidth: 320,
    descriptionInput: 120,
    laundryImage: 112
  },
  fontSize: {
    "font-size-xs": 12,
    "font-size-sm": 14,
    "font-size-md": 16,
    "font-size-lg": 18,
    "font-size-xl": 20,
    "font-size-xxl": 24,
    "font-size-xxxl": 28,
    "font-size-xxxxl": 32
  },
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800"
  },
  lineHeight: {
    "line-height-xs": 16,
    "line-height-sm": 18,
    "line-height-md": 20,
    "line-height-lg": 22,
    "line-height-xl": 24,
    "line-height-xxl": 28,
    "line-height-xxxl": 32
  },
  fontColor: {
    "font-primary": Colors["colors-grey-900"],
    "font-secondary": Colors["colors-grey-300"],
    "font-highlight": Colors["colors-rose-500"],
    "font-light": Colors["colors-grey-400"],
    "font-disabled": Colors["colors-grey-400"],
    "font-placeholder": Colors["colors-grey-400"],
    "font-invert": Colors["colors-white"],
    "font-error": Colors["colors-red-600"],
    "font-success": Colors["colors-green-500"],
    "font-warning": Colors["colors-yellow-800"],
    "font-status-available": Colors["colors-green-700"],
    "font-status-in-use": Colors["colors-rose-500"],
    "font-status-out-of-order": Colors["colors-grey-300"],
    "font-status-maintenance": Colors["colors-yellow-800"]
  },
  cornerRad: {
    "corner-rad-none": 0,
    "corner-rad-sm": 4,
    "corner-rad-md": 8,
    "corner-rad-lg": 12,
    "corner-rad-xl": 16,
    "corner-rad-xxl": 24,
    "corner-rad-xxxl": 32,
    "corner-rad-full": 9999
  },
  iconSize: {
    "icon-size-xs": 14,
    "icon-size-sm": 18,
    "icon-size-md": 20,
    "icon-size-lg": 22,
    "icon-size-xl": 24,
    "icon-size-xxl": 26,
    "icon-size-xxxl": 32,
    "icon-size-xxxxl": 48,
    "icon-size-xxxxxl": 64,
    "icon-size-xxxxxxl": 96,
    "icon-size-128": 128,
    "icon-size-160": 160,
    "icon-size-192": 192,
    "icon-size-256": 256
  }
};

// src/tokens/darkTheme.ts
var darkTheme = {
  spacing: {
    "spacing-none": 0,
    "spacing-xxxs": 2,
    "spacing-xxs": 4,
    "spacing-xs": 8,
    "spacing-sm": 12,
    "spacing-md": 16,
    "spacing-lg": 20,
    "spacing-xl": 24,
    "spacing-xxl": 32,
    "spacing-xxxl": 40,
    "spacing-xxxxl": 48,
    "spacing-max": 96
  },
  surfaceColor: {
    "surface-primary": Colors["colors-grey-600"],
    "surface-secondary": Colors["colors-grey-700"],
    "surface-button": Colors["colors-lavender-700"],
    "surface-tertiary": Colors["colors-grey-500"],
    "surface-background": Colors["colors-grey-800"],
    "surface-surface": Colors["colors-grey-700"],
    "surface-disabled": Colors["colors-grey-500"],
    "surface-invert": Colors["colors-lavender-700"],
    "surface-success": Colors["colors-green-900"],
    "surface-success-subtle": Colors["colors-green-700"],
    "surface-error": Colors["colors-red-900"],
    "surface-error-subtle": Colors["colors-red-800"],
    "surface-warning": Colors["colors-yellow-900"],
    "surface-warning-subtle": Colors["colors-yellow-900"],
    "surface-tertiary-subtle": Colors["colors-grey-600"],
    "surface-status-available": Colors["colors-green-900"],
    "surface-status-available-subtle": Colors["colors-green-700"],
    "surface-status-in-use": Colors["colors-rose-900"],
    "surface-status-in-use-subtle": Colors["colors-rose-800"],
    "surface-status-out-of-order": Colors["colors-grey-500"],
    "surface-status-out-of-order-subtle": Colors["colors-grey-600"],
    "surface-status-maintenance": Colors["colors-yellow-900"],
    "surface-status-maintenance-subtle": Colors["colors-yellow-900"],
    "surface-transparent": "transparent",
    "surface-dark": Colors["colors-grey-900"]
  },
  shadowBox: {
    shadowColor: Colors["colors-black"],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 8
  },
  shadowCard: {
    shadowColor: Colors["colors-black"],
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4
  },
  shadowFloating: {
    shadowColor: Colors["colors-black"],
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.55,
    shadowRadius: 12,
    elevation: 8
  },
  shadowBottomNav: {
    shadowColor: Colors["colors-black"],
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4
  },
  fontFamily: {
    poppins: "Poppins"
  },
  borderColor: {
    "border-primary": Colors["colors-grey-400"],
    "border-secondary": Colors["colors-grey-500"],
    "border-disabled": Colors["colors-grey-600"],
    "border-placeholder": Colors["colors-grey-300"],
    "border-invert": Colors["colors-grey-200"],
    "border-error": Colors["colors-red-500"],
    "border-transparent": "transparent"
  },
  borderWidth: {
    "border-width-none": 0,
    "border-width-xs": 1,
    "border-width-sm": 2,
    "border-width-md": 3,
    "border-width-lg": 4,
    "border-width-xl": 5,
    "border-width-xxl": 6,
    "border-width-xxxl": 8
  },
  overlayColor: {
    modal: "rgba(10,10,15,0.65)",
    dimmer: "rgba(0,0,0,0.75)",
    backdrop: "rgba(0,0,0,0.65)",
    glassButton: "rgba(255,255,255,0.1)"
  },
  componentSize: {
    fab: 56,
    iconContainer: 48,
    cardMaxWidth: 320,
    descriptionInput: 120,
    laundryImage: 112
  },
  fontSize: {
    "font-size-xs": 12,
    "font-size-sm": 14,
    "font-size-md": 16,
    "font-size-lg": 18,
    "font-size-xl": 20,
    "font-size-xxl": 24,
    "font-size-xxxl": 28,
    "font-size-xxxxl": 32
  },
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800"
  },
  lineHeight: {
    "line-height-xs": 16,
    "line-height-sm": 18,
    "line-height-md": 20,
    "line-height-lg": 22,
    "line-height-xl": 24,
    "line-height-xxl": 28,
    "line-height-xxxl": 32
  },
  fontColor: {
    "font-primary": Colors["colors-grey-25"],
    "font-secondary": Colors["colors-lavender-400"],
    "font-highlight": Colors["colors-rose-400"],
    "font-light": Colors["colors-grey-300"],
    "font-disabled": Colors["colors-grey-400"],
    "font-placeholder": Colors["colors-grey-300"],
    "font-invert": Colors["colors-grey-900"],
    "font-error": Colors["colors-red-500"],
    "font-success": Colors["colors-green-300"],
    "font-warning": Colors["colors-yellow-300"],
    "font-status-available": Colors["colors-green-300"],
    "font-status-in-use": Colors["colors-rose-400"],
    "font-status-out-of-order": Colors["colors-grey-300"],
    "font-status-maintenance": Colors["colors-yellow-300"]
  },
  cornerRad: {
    "corner-rad-none": 0,
    "corner-rad-sm": 4,
    "corner-rad-md": 8,
    "corner-rad-lg": 12,
    "corner-rad-xl": 16,
    "corner-rad-xxl": 24,
    "corner-rad-xxxl": 32,
    "corner-rad-full": 9999
  },
  iconSize: {
    "icon-size-xs": 14,
    "icon-size-sm": 18,
    "icon-size-md": 20,
    "icon-size-lg": 22,
    "icon-size-xl": 24,
    "icon-size-xxl": 26,
    "icon-size-xxxl": 32,
    "icon-size-xxxxl": 48,
    "icon-size-xxxxxl": 64,
    "icon-size-xxxxxxl": 96,
    "icon-size-128": 128,
    "icon-size-160": 160,
    "icon-size-192": 192,
    "icon-size-256": 256
  }
};

// src/theme/ThemeContext.ts
import { createContext } from "react";
var ThemeContext = createContext(defaultTheme);

// src/theme/ThemeProvider.tsx
import React2 from "react";
var ThemeProvider = ({ theme, children }) => {
  return /* @__PURE__ */ React2.createElement(ThemeContext.Provider, { value: theme }, children);
};

// src/theme/useBaseTheme.ts
import { useContext } from "react";
var useBaseTheme = () => useContext(ThemeContext);

// src/theme/hooks/useTheme.ts
import { useSafeAreaInsets } from "react-native-safe-area-context";

// src/theme/themes/DarkTheme.ts
import { DarkTheme as RNNavigationDarkTheme } from "@react-navigation/native";

// src/theme/constants/colors.ts
var Colors2 = {
  // Essentials
  "colors-white": "#FEFEFE",
  "colors-black": "#000000",
  "colors-semi-transparent": "rgba(0, 0, 0, 0.5)",
  "colors-transparent": "transparent",
  // Grey scale
  "colors-grey-25": "#f4f4f5",
  "colors-grey-50": "#eaeaeb",
  "colors-grey-100": "#d5d6d7",
  "colors-grey-200": "#abadb0",
  "colors-grey-300": "#828488",
  "colors-grey-400": "#585b61",
  "colors-grey-500": "#2f323a",
  "colors-grey-600": "#25282e",
  "colors-grey-700": "#1c1e22",
  "colors-grey-800": "#121417",
  "colors-grey-900": "#090a0b",
  // Primary (Lavender / Purple tones)
  "colors-lavender-25": "#fcfbfd",
  "colors-lavender-50": "#faf7fb",
  "colors-lavender-100": "#f6f0f8",
  "colors-lavender-200": "#eee2f2",
  "colors-lavender-300": "#e6d4ec",
  "colors-lavender-400": "#dec6e6",
  "colors-lavender-500": "#d6b8e0",
  "colors-lavender-600": "#ab93b3",
  "colors-lavender-700": "#806e86",
  "colors-lavender-800": "#554959",
  "colors-lavender-900": "#2a242c",
  // Secondary (Rose / Pink tones)
  "colors-rose-25": "#fdf6f7",
  "colors-rose-50": "#fbeef0",
  "colors-rose-100": "#f7dee2",
  "colors-rose-200": "#efbdc6",
  "colors-rose-300": "#e79ca9",
  "colors-rose-400": "#df7b8d",
  "colors-rose-500": "#d75b71",
  "colors-rose-600": "#ac485a",
  "colors-rose-700": "#813643",
  "colors-rose-800": "#56242d",
  "colors-rose-900": "#2b1216",
  // Status / UI colors
  "colors-green-25": "#f3fcf4",
  "colors-green-50": "#e6f9e6",
  "colors-green-100": "#c8f0cb",
  "colors-green-300": "#70d77a",
  "colors-green-500": "#00B300",
  "colors-green-700": "#117a12",
  "colors-green-900": "#0b4e0b",
  "colors-red-25": "#fff6f6",
  "colors-red-50": "#fbeef0",
  "colors-red-100": "#FFEDED",
  "colors-red-300": "#ff9b9b",
  "colors-red-500": "#FF5959",
  "colors-red-600": "#FF3B3B",
  "colors-red-800": "#b62424",
  "colors-red-900": "#7a1414",
  "colors-yellow-25": "#fffbf3",
  "colors-yellow-50": "#fbeef0",
  "colors-yellow-100": "#fff1c2",
  "colors-yellow-300": "#ffdf70",
  "colors-yellow-500": "#FFCD00",
  "colors-yellow-600": "#e6b800",
  "colors-yellow-800": "#997a00",
  "colors-yellow-900": "#664e00"
};

// src/theme/themes/DarkTheme.ts
var DarkThemeConstants = {
  navBarHeight: 108,
  spacing: {
    "spacing-none": 0,
    "spacing-xxxs": 2,
    "spacing-xxs": 4,
    "spacing-xs": 8,
    "spacing-sm": 12,
    "spacing-md": 16,
    "spacing-lg": 20,
    "spacing-xl": 24,
    "spacing-xxl": 32,
    "spacing-xxxl": 40,
    "spacing-xxxxl": 48,
    "spacing-max": 96
  },
  surfaceColor: {
    "surface-primary": Colors2["colors-grey-600"],
    "surface-secondary": Colors2["colors-grey-700"],
    "surface-button": Colors2["colors-lavender-700"],
    "surface-tertiary": Colors2["colors-grey-500"],
    "surface-background": Colors2["colors-grey-800"],
    "surface-surface": Colors2["colors-grey-700"],
    "surface-disabled": Colors2["colors-grey-500"],
    "surface-invert": Colors2["colors-lavender-700"],
    "surface-success": Colors2["colors-green-900"],
    "surface-success-subtle": Colors2["colors-green-700"],
    "surface-error": Colors2["colors-red-900"],
    "surface-error-subtle": Colors2["colors-red-800"],
    "surface-warning": Colors2["colors-yellow-900"],
    "surface-warning-subtle": Colors2["colors-yellow-900"],
    "surface-tertiary-subtle": Colors2["colors-grey-600"],
    "surface-status-available": Colors2["colors-green-900"],
    "surface-status-available-subtle": Colors2["colors-green-700"],
    "surface-status-in-use": Colors2["colors-rose-900"],
    "surface-status-in-use-subtle": Colors2["colors-rose-800"],
    "surface-status-out-of-order": Colors2["colors-grey-500"],
    "surface-status-out-of-order-subtle": Colors2["colors-grey-600"],
    "surface-status-maintenance": Colors2["colors-yellow-900"],
    "surface-status-maintenance-subtle": Colors2["colors-yellow-900"],
    "surface-transparent": "transparent",
    "surface-dark": Colors2["colors-grey-900"]
  },
  shadowBox: {
    shadowColor: Colors2["colors-black"],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 8
  },
  shadowCard: {
    shadowColor: Colors2["colors-black"],
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4
  },
  shadowFloating: {
    shadowColor: Colors2["colors-black"],
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.55,
    shadowRadius: 12,
    elevation: 8
  },
  shadowBottomNav: {
    shadowColor: Colors2["colors-black"],
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4
  },
  fontFamily: {
    poppins: "Poppins"
  },
  borderWidth: {
    "border-width-none": 0,
    "border-width-xs": 1,
    "border-width-sm": 2,
    "border-width-md": 3,
    "border-width-lg": 4,
    "border-width-xl": 5,
    "border-width-xxl": 6,
    "border-width-xxxl": 8
  },
  iconSize: {
    "icon-size-xs": 14,
    "icon-size-sm": 18,
    "icon-size-md": 20,
    "icon-size-lg": 22,
    "icon-size-xl": 24,
    "icon-size-xxl": 26,
    "icon-size-xxxl": 32,
    "icon-size-xxxxl": 48,
    "icon-size-xxxxxl": 64,
    "icon-size-xxxxxxl": 96,
    "icon-size-128": 128,
    "icon-size-160": 160,
    "icon-size-192": 192,
    "icon-size-256": 256
  },
  cornerRad: {
    "corner-rad-none": 0,
    "corner-rad-sm": 4,
    "corner-rad-md": 8,
    "corner-rad-lg": 12,
    "corner-rad-xl": 16,
    "corner-rad-xxl": 24,
    "corner-rad-xxxl": 32,
    "corner-rad-full": 9999
  },
  borderColor: {
    "border-primary": Colors2["colors-grey-400"],
    "border-secondary": Colors2["colors-grey-500"],
    "border-disabled": Colors2["colors-grey-600"],
    "border-placeholder": Colors2["colors-grey-300"],
    "border-invert": Colors2["colors-grey-200"],
    "border-error": Colors2["colors-red-500"],
    "border-transparent": "transparent"
  },
  fontSize: {
    "font-size-xs": 12,
    "font-size-sm": 14,
    "font-size-md": 16,
    "font-size-lg": 18,
    "font-size-xl": 20,
    "font-size-xxl": 24,
    "font-size-xxxl": 28,
    "font-size-xxxxl": 32
  },
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800"
  },
  lineHeight: {
    "line-height-xs": 16,
    "line-height-sm": 18,
    "line-height-md": 20,
    "line-height-lg": 22,
    "line-height-xl": 24,
    "line-height-xxl": 28,
    "line-height-xxxl": 32
  },
  fontColor: {
    "font-primary": Colors2["colors-grey-25"],
    "font-secondary": Colors2["colors-lavender-400"],
    "font-highlight": Colors2["colors-rose-400"],
    "font-light": Colors2["colors-grey-300"],
    "font-disabled": Colors2["colors-grey-400"],
    "font-placeholder": Colors2["colors-grey-300"],
    "font-invert": Colors2["colors-grey-900"],
    "font-error": Colors2["colors-red-500"],
    "font-success": Colors2["colors-green-300"],
    "font-warning": Colors2["colors-yellow-300"],
    "font-status-available": Colors2["colors-green-300"],
    "font-status-in-use": Colors2["colors-rose-400"],
    "font-status-out-of-order": Colors2["colors-grey-300"],
    "font-status-maintenance": Colors2["colors-yellow-300"]
  },
  letterSpacing: {
    label: 1.5
  },
  componentSize: {
    fab: 56,
    iconContainer: 48,
    cardMaxWidth: 320,
    descriptionInput: 120,
    laundryImage: 112
  },
  zIndex: {
    overlay: 9999,
    message: 1e4,
    background: -9999,
    camera: -1e4
  },
  overlayColor: {
    modal: "rgba(0,0,0,0.6)",
    dimmer: "rgba(0,0,0,0.7)",
    backdrop: "rgba(0,0,0,0.6)",
    glassButton: "rgba(255,255,255,0.15)"
  },
  navigation: {
    ...RNNavigationDarkTheme,
    colors: {
      ...RNNavigationDarkTheme.colors,
      background: Colors2["colors-grey-800"]
    }
  }
};

// src/theme/themes/DefaultTheme.ts
import { DefaultTheme as RNNavigationTheme } from "@react-navigation/native";
var DefaultThemeConstants = {
  navBarHeight: 108,
  spacing: {
    "spacing-none": 0,
    "spacing-xxxs": 2,
    "spacing-xxs": 4,
    "spacing-xs": 8,
    "spacing-sm": 12,
    "spacing-md": 16,
    "spacing-lg": 20,
    "spacing-xl": 24,
    "spacing-xxl": 32,
    "spacing-xxxl": 40,
    "spacing-xxxxl": 48,
    "spacing-max": 96
  },
  surfaceColor: {
    "surface-primary": Colors2["colors-white"],
    "surface-secondary": Colors2["colors-rose-50"],
    "surface-button": Colors2["colors-lavender-100"],
    "surface-tertiary": Colors2["colors-grey-100"],
    "surface-background": Colors2["colors-lavender-50"],
    "surface-surface": Colors2["colors-lavender-300"],
    "surface-disabled": Colors2["colors-lavender-600"],
    "surface-invert": Colors2["colors-lavender-500"],
    "surface-success": Colors2["colors-green-50"],
    "surface-success-subtle": Colors2["colors-green-25"],
    "surface-error": Colors2["colors-red-50"],
    "surface-error-subtle": Colors2["colors-red-25"],
    "surface-warning": Colors2["colors-yellow-100"],
    "surface-warning-subtle": Colors2["colors-yellow-25"],
    "surface-tertiary-subtle": Colors2["colors-grey-25"],
    "surface-status-available": Colors2["colors-green-50"],
    "surface-status-available-subtle": Colors2["colors-green-25"],
    "surface-status-in-use": Colors2["colors-rose-100"],
    "surface-status-in-use-subtle": Colors2["colors-rose-50"],
    "surface-status-out-of-order": Colors2["colors-grey-50"],
    "surface-status-out-of-order-subtle": Colors2["colors-grey-25"],
    "surface-status-maintenance": Colors2["colors-yellow-100"],
    "surface-status-maintenance-subtle": Colors2["colors-yellow-25"],
    "surface-transparent": "transparent",
    "surface-dark": Colors2["colors-grey-900"]
  },
  shadowBox: {
    shadowColor: Colors2["colors-black"],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  shadowCard: {
    shadowColor: Colors2["colors-lavender-900"],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4
  },
  shadowFloating: {
    shadowColor: Colors2["colors-lavender-900"],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8
  },
  shadowBottomNav: {
    shadowColor: Colors2["colors-black"],
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 4
  },
  fontFamily: {
    poppins: "Poppins"
  },
  borderWidth: {
    "border-width-none": 0,
    "border-width-xs": 1,
    "border-width-sm": 2,
    "border-width-md": 3,
    "border-width-lg": 4,
    "border-width-xl": 5,
    "border-width-xxl": 6,
    "border-width-xxxl": 8
  },
  iconSize: {
    "icon-size-xs": 14,
    "icon-size-sm": 18,
    "icon-size-md": 20,
    "icon-size-lg": 22,
    "icon-size-xl": 24,
    "icon-size-xxl": 26,
    "icon-size-xxxl": 32,
    "icon-size-xxxxl": 48,
    "icon-size-xxxxxl": 64,
    "icon-size-xxxxxxl": 96,
    "icon-size-128": 128,
    "icon-size-160": 160,
    "icon-size-192": 192,
    "icon-size-256": 256
  },
  cornerRad: {
    "corner-rad-none": 0,
    "corner-rad-sm": 4,
    "corner-rad-md": 8,
    "corner-rad-lg": 12,
    "corner-rad-xl": 16,
    "corner-rad-xxl": 24,
    "corner-rad-xxxl": 32,
    "corner-rad-full": 9999
  },
  borderColor: {
    "border-primary": Colors2["colors-grey-300"],
    "border-secondary": Colors2["colors-grey-100"],
    "border-disabled": Colors2["colors-grey-100"],
    "border-placeholder": Colors2["colors-grey-400"],
    "border-invert": Colors2["colors-white"],
    "border-error": Colors2["colors-red-300"],
    "border-transparent": "transparent"
  },
  fontSize: {
    "font-size-xs": 12,
    "font-size-sm": 14,
    "font-size-md": 16,
    "font-size-lg": 18,
    "font-size-xl": 20,
    "font-size-xxl": 24,
    "font-size-xxxl": 28,
    "font-size-xxxxl": 32
  },
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800"
  },
  lineHeight: {
    "line-height-xs": 16,
    "line-height-sm": 18,
    "line-height-md": 20,
    "line-height-lg": 22,
    "line-height-xl": 24,
    "line-height-xxl": 28,
    "line-height-xxxl": 32
  },
  fontColor: {
    "font-primary": Colors2["colors-grey-900"],
    "font-secondary": Colors2["colors-grey-300"],
    "font-highlight": Colors2["colors-rose-500"],
    "font-light": Colors2["colors-grey-400"],
    "font-disabled": Colors2["colors-grey-400"],
    "font-placeholder": Colors2["colors-grey-400"],
    "font-invert": Colors2["colors-white"],
    "font-error": Colors2["colors-red-600"],
    "font-success": Colors2["colors-green-500"],
    "font-warning": Colors2["colors-yellow-800"],
    "font-status-available": Colors2["colors-green-700"],
    "font-status-in-use": Colors2["colors-rose-500"],
    "font-status-out-of-order": Colors2["colors-grey-300"],
    "font-status-maintenance": Colors2["colors-yellow-800"]
  },
  letterSpacing: {
    label: 1.5
  },
  componentSize: {
    fab: 56,
    iconContainer: 48,
    cardMaxWidth: 320,
    descriptionInput: 120,
    laundryImage: 112
  },
  zIndex: {
    overlay: 9999,
    message: 1e4,
    background: -9999,
    camera: -1e4
  },
  overlayColor: {
    modal: "rgba(47,50,58,0.45)",
    dimmer: "rgba(0,0,0,0.6)",
    backdrop: "rgba(0,0,0,0.5)",
    glassButton: "rgba(255,255,255,0.15)"
  },
  navigation: {
    ...RNNavigationTheme,
    colors: {
      ...RNNavigationTheme.colors,
      background: Colors2["colors-white"]
    }
  }
};

// src/components/Text/Text.web.tsx
import React3 from "react";

// src/components/Text/hooks/useText.ts
var POPPINS_FAMILY = {
  light: "Poppins-Light",
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
  extrabold: "Poppins-ExtraBold"
};
var CSS_FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
};
var useText = ({
  fontSize,
  color,
  fontWeight,
  lineHeight,
  textAlign
}) => {
  return {
    fontSize,
    color,
    fontWeight,
    lineHeight,
    textAlign,
    rnFontFamily: POPPINS_FAMILY[fontWeight],
    cssFontWeight: CSS_FONT_WEIGHT[fontWeight]
  };
};

// src/web/cssAdapter.ts
var toPx = (n) => `${n}px`;

// src/components/Text/theme/useTextTheme.web.ts
var useTextTheme = (params) => {
  const theme = useBaseTheme();
  const { cssFontWeight } = useText(params);
  const style = {
    fontFamily: theme.fontFamily.poppins,
    fontWeight: cssFontWeight,
    fontSize: toPx(theme.fontSize[params.fontSize]),
    color: theme.fontColor[params.color],
    ...params.lineHeight !== void 0 && { lineHeight: toPx(theme.lineHeight[params.lineHeight]) },
    ...params.textAlign !== void 0 && params.textAlign !== "auto" && { textAlign: params.textAlign }
  };
  return { style, theme };
};

// src/components/Text/Text.web.tsx
var Text = ({
  children,
  fontSize = "font-size-md",
  color = "font-primary",
  fontWeight = "regular",
  lineHeight,
  textAlign
}) => {
  const { style } = useTextTheme({ fontSize, color, fontWeight, lineHeight, textAlign });
  return /* @__PURE__ */ React3.createElement("span", { style }, children);
};

// src/components/Button/Button.web.tsx
import React4 from "react";

// src/components/Button/theme/useButtonTheme.web.ts
import { useMemo } from "react";

// src/components/Button/hooks/useButton.ts
var surfaceColorMap = {
  primary: "surface-invert",
  secondary: "surface-secondary",
  tertiary: "surface-background",
  destructive: "surface-error",
  link: "surface-transparent"
};
var borderColorMap = {
  primary: "border-invert",
  secondary: "border-secondary",
  tertiary: "border-placeholder",
  destructive: "border-error",
  link: "border-transparent"
};
var spacingMap = {
  primary: { xs: "spacing-xs", sm: "spacing-sm", md: "spacing-md", xl: "spacing-xl" },
  secondary: { xs: "spacing-xs", sm: "spacing-sm", md: "spacing-md", xl: "spacing-xl" },
  tertiary: { xs: "spacing-xs", sm: "spacing-sm", md: "spacing-md", xl: "spacing-xl" },
  destructive: { xs: "spacing-xs", sm: "spacing-sm", md: "spacing-md", xl: "spacing-xl" },
  link: { xs: "spacing-none", sm: "spacing-none", md: "spacing-none", xl: "spacing-none" }
};
var textColorMap = {
  primary: "font-primary",
  secondary: "font-primary",
  tertiary: "font-secondary",
  destructive: "font-invert",
  link: "font-highlight"
};
var fontSizeMap = {
  xs: "font-size-xs",
  sm: "font-size-sm",
  md: "font-size-md",
  xl: "font-size-xxl"
};
var fontWeightMap = {
  primary: { xs: "light", sm: "light", md: "regular", xl: "semibold" },
  secondary: { xs: "light", sm: "light", md: "regular", xl: "semibold" },
  tertiary: { xs: "light", sm: "light", md: "regular", xl: "semibold" },
  destructive: { xs: "light", sm: "light", md: "regular", xl: "semibold" },
  link: { xs: "semibold", sm: "semibold", md: "semibold", xl: "semibold" }
};
var iconSizeMap = {
  xs: "icon-size-xs",
  sm: "icon-size-sm",
  md: "icon-size-md",
  xl: "icon-size-lg"
};
var textDecorationMap = {
  link: "underline"
};

// src/components/Button/theme/useButtonTheme.web.ts
var useButtonTheme = ({ variant, size, rounded, fullWidth, alignLeft, disabled }) => {
  const theme = useBaseTheme();
  const containerStyle = useMemo(
    () => fullWidth ? { display: "flex", flex: 1 } : { display: "inline-flex" },
    [fullWidth]
  );
  const buttonStyle = useMemo(() => ({
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: alignLeft ? "flex-start" : "center",
    cursor: disabled ? "not-allowed" : "pointer",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: toPx(rounded ? theme.cornerRad["corner-rad-full"] : theme.cornerRad["corner-rad-lg"]),
    backgroundColor: theme.surfaceColor[surfaceColorMap[variant]],
    borderColor: theme.borderColor[borderColorMap[variant]],
    padding: toPx(theme.spacing[spacingMap[variant][size]]),
    gap: toPx(theme.spacing["spacing-xs"]),
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : void 0
  }), [rounded, variant, size, fullWidth, alignLeft, disabled, theme]);
  return { containerStyle, buttonStyle };
};

// src/components/Button/Button.web.tsx
var Button = ({
  label,
  variant = "primary",
  size = "md",
  // iconName is accepted for API parity but not rendered on web (no react-native-svg)
  iconName: _iconName,
  onPress,
  fullWidth,
  alignLeft,
  disabled,
  submitting,
  stale,
  rounded
}) => {
  const theme = useBaseTheme();
  const isDisabled = disabled || stale || submitting;
  const { containerStyle, buttonStyle } = useButtonTheme({
    variant,
    size,
    fullWidth,
    alignLeft,
    rounded,
    disabled: isDisabled
  });
  const textDecoration = textDecorationMap[variant];
  const fontWeight = fontWeightMap[variant][size];
  const fontSize = fontSizeMap[size];
  const color = textColorMap[variant];
  const textStyle = {
    fontFamily: theme.fontFamily.poppins,
    fontWeight: CSS_FONT_WEIGHT[fontWeight],
    fontSize: toPx(theme.fontSize[fontSize]),
    color: theme.fontColor[color],
    ...textDecoration ? { textDecoration } : {}
  };
  return /* @__PURE__ */ React4.createElement("div", { style: containerStyle }, /* @__PURE__ */ React4.createElement(
    "button",
    {
      type: "button",
      disabled: isDisabled,
      onClick: onPress,
      style: buttonStyle
    },
    submitting ? /* @__PURE__ */ React4.createElement(SpinnerIcon, { color: theme.fontColor[color] }) : label ? /* @__PURE__ */ React4.createElement("span", { style: textStyle }, label) : null
  ));
};
var SpinnerIcon = ({ color }) => /* @__PURE__ */ React4.createElement(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    style: { animation: "luvo-spin 0.8s linear infinite" }
  },
  /* @__PURE__ */ React4.createElement("style", null, `@keyframes luvo-spin { to { transform: rotate(360deg); } }`),
  /* @__PURE__ */ React4.createElement("circle", { cx: "8", cy: "8", r: "6", stroke: color, strokeWidth: "2", strokeOpacity: "0.25" }),
  /* @__PURE__ */ React4.createElement(
    "path",
    {
      d: "M14 8a6 6 0 0 0-6-6",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round"
    }
  )
);

// src/components/ActivityIndicator/ActivityIndicator.web.tsx
import React5 from "react";

// src/components/ActivityIndicator/hooks/useActivityIndicator.ts
var useActivityIndicator = ({ color }) => {
  const theme = useBaseTheme();
  const resolvedColor = color in theme.fontColor ? theme.fontColor[color] : color;
  return { resolvedColor };
};

// src/components/ActivityIndicator/ActivityIndicator.web.tsx
var ActivityIndicator = ({ color = "font-primary", size = "small" }) => {
  const { resolvedColor } = useActivityIndicator({ color });
  const px = size === "large" ? 36 : 20;
  return /* @__PURE__ */ React5.createElement(
    "svg",
    {
      width: px,
      height: px,
      viewBox: "0 0 36 36",
      fill: "none",
      style: { animation: "luvo-spin 0.8s linear infinite" },
      "aria-label": "Loading",
      role: "status"
    },
    /* @__PURE__ */ React5.createElement("style", null, `@keyframes luvo-spin { to { transform: rotate(360deg); } }`),
    /* @__PURE__ */ React5.createElement("circle", { cx: "18", cy: "18", r: "14", stroke: resolvedColor, strokeWidth: "3", strokeOpacity: "0.25" }),
    /* @__PURE__ */ React5.createElement(
      "path",
      {
        d: "M32 18a14 14 0 0 0-14-14",
        stroke: resolvedColor,
        strokeWidth: "3",
        strokeLinecap: "round"
      }
    )
  );
};

// src/components/Separator/Separator.web.tsx
import React6, { memo } from "react";

// src/components/Separator/theme/useSeparatorTheme.web.ts
import { useMemo as useMemo2 } from "react";
var useSeparatorTheme = (direction) => {
  const theme = useBaseTheme();
  const style = useMemo2(
    () => direction === "vertical" ? {
      display: "inline-block",
      width: toPx(theme.spacing["spacing-sm"]),
      alignSelf: "stretch"
    } : {
      display: "block",
      width: "100%",
      height: toPx(theme.spacing["spacing-sm"])
    },
    [direction, theme]
  );
  return { style };
};

// src/components/Separator/Separator.web.tsx
var Separator = memo(({ direction = "horizontal" }) => {
  const { style } = useSeparatorTheme(direction);
  if (direction === "horizontal") {
    return /* @__PURE__ */ React6.createElement("hr", { style: { ...style, border: "none" }, "aria-orientation": "horizontal" });
  }
  return /* @__PURE__ */ React6.createElement("div", { role: "separator", "aria-orientation": "vertical", style });
});

// src/components/TextInput/TextInput.web.tsx
import React7 from "react";

// src/components/TextInput/hooks/useTextInput.ts
import { useState } from "react";
var useTextInput = (secureTextEntry) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggleVisibility = () => setIsVisible((v) => !v);
  return {
    isVisible,
    handleToggleVisibility,
    // When secureTextEntry is true, visibility toggle inverts it.
    // When secureTextEntry is false/undefined, propagate as-is.
    resolvedSecureTextEntry: secureTextEntry ? !isVisible : secureTextEntry
  };
};

// src/components/TextInput/theme/useTextInputTheme.web.ts
var useTextInputTheme = ({
  error = false,
  color = "font-primary"
} = {}) => {
  const theme = useBaseTheme();
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: toPx(theme.spacing["spacing-xxs"])
  };
  const inputWrapperStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minHeight: toPx(theme.spacing["spacing-xxxxl"]),
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: toPx(theme.cornerRad["corner-rad-md"]),
    backgroundColor: theme.surfaceColor["surface-primary"],
    borderColor: error ? theme.borderColor["border-error"] : theme.borderColor["border-primary"],
    paddingLeft: toPx(theme.spacing["spacing-sm"]),
    paddingRight: toPx(theme.spacing["spacing-sm"])
  };
  const inputStyle = {
    flex: 1,
    fontFamily: theme.fontFamily.poppins,
    fontSize: toPx(theme.fontSize["font-size-md"]),
    color: theme.fontColor[color],
    border: "none",
    outline: "none",
    background: "transparent"
  };
  const footerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  };
  const eyeButtonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    paddingLeft: toPx(theme.spacing["spacing-xs"]),
    color: theme.fontColor["font-placeholder"],
    fontSize: toPx(theme.fontSize["font-size-xl"]),
    display: "flex",
    alignItems: "center"
  };
  return { containerStyle, inputWrapperStyle, inputStyle, footerStyle, eyeButtonStyle, theme };
};

// src/components/TextInput/TextInput.web.tsx
var TextInput = ({
  label,
  error,
  color,
  placeholderColor,
  value,
  secureTextEntry,
  editable = true,
  maxLength,
  onChangeText,
  onBlur,
  onFocus,
  placeholder
}) => {
  const { containerStyle, inputWrapperStyle, inputStyle, footerStyle, eyeButtonStyle, theme } = useTextInputTheme({
    error: !!error,
    color,
    placeholderColor
  });
  const { isVisible, handleToggleVisibility, resolvedSecureTextEntry } = useTextInput(secureTextEntry);
  const remaining = maxLength !== void 0 ? maxLength - (value?.length ?? 0) : void 0;
  const labelStyle = {
    fontFamily: theme.fontFamily.poppins,
    fontSize: toPx(theme.fontSize["font-size-sm"]),
    fontWeight: 600,
    color: theme.fontColor["font-primary"]
  };
  const errorStyle = {
    flex: 1,
    fontFamily: theme.fontFamily.poppins,
    fontSize: toPx(theme.fontSize["font-size-xs"]),
    color: theme.fontColor["font-error"]
  };
  const remainingStyle = {
    fontFamily: theme.fontFamily.poppins,
    fontSize: toPx(theme.fontSize["font-size-xs"]),
    color: theme.fontColor["font-placeholder"]
  };
  return /* @__PURE__ */ React7.createElement("div", { style: containerStyle }, label ? /* @__PURE__ */ React7.createElement("label", { style: labelStyle }, label) : null, /* @__PURE__ */ React7.createElement("div", { style: inputWrapperStyle }, /* @__PURE__ */ React7.createElement(
    "input",
    {
      type: resolvedSecureTextEntry ? "password" : "text",
      value,
      onChange: (e) => onChangeText?.(e.currentTarget.value),
      onBlur,
      onFocus,
      placeholder,
      disabled: !editable,
      maxLength,
      style: inputStyle
    }
  ), secureTextEntry ? /* @__PURE__ */ React7.createElement(
    "button",
    {
      type: "button",
      onClick: handleToggleVisibility,
      style: eyeButtonStyle,
      "aria-label": isVisible ? "Hide password" : "Show password"
    },
    isVisible ? /* @__PURE__ */ React7.createElement(EyeOpenIcon, null) : /* @__PURE__ */ React7.createElement(EyeClosedIcon, null)
  ) : null), /* @__PURE__ */ React7.createElement("div", { style: footerStyle }, error ? /* @__PURE__ */ React7.createElement("span", { style: errorStyle }, error) : null, remaining !== void 0 ? /* @__PURE__ */ React7.createElement("span", { style: remainingStyle }, remaining) : null));
};
var EyeOpenIcon = () => /* @__PURE__ */ React7.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", "aria-hidden": "true" }, /* @__PURE__ */ React7.createElement("ellipse", { cx: "9", cy: "9", rx: "7", ry: "4.5", stroke: "currentColor", strokeWidth: "1.5" }), /* @__PURE__ */ React7.createElement("circle", { cx: "9", cy: "9", r: "2", fill: "currentColor" }));
var EyeClosedIcon = () => /* @__PURE__ */ React7.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", "aria-hidden": "true" }, /* @__PURE__ */ React7.createElement("path", { d: "M2 9c1.5-4 11.5-4 14 0", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }), /* @__PURE__ */ React7.createElement("line", { x1: "4", y1: "13", x2: "5.5", y2: "11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }), /* @__PURE__ */ React7.createElement("line", { x1: "9", y1: "14", x2: "9", y2: "12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }), /* @__PURE__ */ React7.createElement("line", { x1: "14", y1: "13", x2: "12.5", y2: "11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }));

// src/components/Switch/Switch.web.tsx
import React8 from "react";

// src/components/Switch/theme/useSwitchTheme.web.ts
import { useMemo as useMemo3 } from "react";
var TRACK_WIDTH = 48;
var TRACK_HEIGHT = 28;
var THUMB_SIZE = 22;
var THUMB_MARGIN = 3;
var THUMB_TRAVEL = TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2;
var useSwitchTheme = (value, disabled) => {
  const theme = useBaseTheme();
  const trackStyle = useMemo3(
    () => ({
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: toPx(TRACK_WIDTH),
      height: toPx(TRACK_HEIGHT),
      borderRadius: toPx(theme.cornerRad["corner-rad-full"]),
      backgroundColor: value ? theme.surfaceColor["surface-invert"] : theme.surfaceColor["surface-background"],
      padding: toPx(THUMB_MARGIN),
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "background-color 200ms ease",
      border: "none",
      boxSizing: "border-box"
    }),
    [value, disabled, theme]
  );
  const thumbStyle = useMemo3(
    () => ({
      width: toPx(THUMB_SIZE),
      height: toPx(THUMB_SIZE),
      borderRadius: toPx(theme.cornerRad["corner-rad-full"]),
      backgroundColor: theme.borderColor["border-invert"],
      transform: `translateX(${value ? toPx(THUMB_TRAVEL) : "0px"})`,
      transition: "transform 200ms ease",
      flexShrink: 0
    }),
    [value, theme]
  );
  return { trackStyle, thumbStyle };
};

// src/components/Switch/Switch.web.tsx
var Switch = ({ value, onValueChange, disabled = false }) => {
  const { trackStyle, thumbStyle } = useSwitchTheme(value, disabled);
  return /* @__PURE__ */ React8.createElement(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": value,
      "aria-disabled": disabled,
      onClick: () => !disabled && onValueChange(!value),
      style: trackStyle
    },
    /* @__PURE__ */ React8.createElement("span", { style: thumbStyle })
  );
};

// src/components/SvgIcon/SvgIcon.tsx
import React36, { memo as memo2 } from "react";
import { View, StyleSheet } from "react-native";

// src/components/SvgIcon/icons/AlertCircle.tsx
import * as React9 from "react";
import Svg, { Path } from "react-native-svg";
var SvgAlertCircle = (props) => /* @__PURE__ */ React9.createElement(
  Svg,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React9.createElement(
    Path,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M12 8v4M12 16h.01"
    }
  )
);
var AlertCircle_default = SvgAlertCircle;

// src/components/SvgIcon/icons/Check.tsx
import * as React10 from "react";
import Svg2, { Path as Path2 } from "react-native-svg";
var SvgCheck = (props) => /* @__PURE__ */ React10.createElement(
  Svg2,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React10.createElement(
    Path2,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M20 6 9 17l-5-5"
    }
  )
);
var Check_default = SvgCheck;

// src/components/SvgIcon/icons/AlertTriangle.tsx
import * as React11 from "react";
import Svg3, { G, Path as Path3, Defs, ClipPath } from "react-native-svg";
var SvgAlertTriangle = (props) => /* @__PURE__ */ React11.createElement(
  Svg3,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React11.createElement(
    G,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      clipPath: "url(#alert-triangle_svg__a)"
    },
    /* @__PURE__ */ React11.createElement(Path3, { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0M12 9v4M12 17h.01" })
  ),
  /* @__PURE__ */ React11.createElement(Defs, null, /* @__PURE__ */ React11.createElement(ClipPath, { id: "alert-triangle_svg__a" }, /* @__PURE__ */ React11.createElement(Path3, { fill: "#fff", d: "M0 0h24v24H0z" })))
);
var AlertTriangle_default = SvgAlertTriangle;

// src/components/SvgIcon/icons/ArrowLeftCircle.tsx
import * as React12 from "react";
import Svg4, { Path as Path4 } from "react-native-svg";
var SvgArrowLeftCircle = (props) => /* @__PURE__ */ React12.createElement(
  Svg4,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React12.createElement(
    Path4,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    }
  ),
  /* @__PURE__ */ React12.createElement(
    Path4,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m12 8-4 4 4 4M16 12H8"
    }
  )
);
var ArrowLeftCircle_default = SvgArrowLeftCircle;

// src/components/SvgIcon/icons/ArrowRightCircle.tsx
import * as React13 from "react";
import Svg5, { Path as Path5 } from "react-native-svg";
var SvgArrowRightCircle = (props) => /* @__PURE__ */ React13.createElement(
  Svg5,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React13.createElement(
    Path5,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    }
  ),
  /* @__PURE__ */ React13.createElement(
    Path5,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m12 8 4 4-4 4M8 12h8"
    }
  )
);
var ArrowRightCircle_default = SvgArrowRightCircle;

// src/components/SvgIcon/icons/Bell.tsx
import * as React14 from "react";
import Svg6, { Path as Path6 } from "react-native-svg";
var SvgBell = (props) => /* @__PURE__ */ React14.createElement(
  Svg6,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React14.createElement(
    Path6,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
    }
  )
);
var Bell_default = SvgBell;

// src/components/SvgIcon/icons/ChevronLeft.tsx
import * as React15 from "react";
import Svg7, { Path as Path7 } from "react-native-svg";
var SvgChevronLeft = (props) => /* @__PURE__ */ React15.createElement(
  Svg7,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React15.createElement(
    Path7,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m15 18-6-6 6-6"
    }
  )
);
var ChevronLeft_default = SvgChevronLeft;

// src/components/SvgIcon/icons/ChevronRight.tsx
import * as React16 from "react";
import Svg8, { Path as Path8 } from "react-native-svg";
var SvgChevronRight = (props) => /* @__PURE__ */ React16.createElement(
  Svg8,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React16.createElement(
    Path8,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m9 18 6-6-6-6"
    }
  )
);
var ChevronRight_default = SvgChevronRight;

// src/components/SvgIcon/icons/Cross.tsx
import * as React17 from "react";
import Svg9, { Path as Path9 } from "react-native-svg";
var SvgCross = (props) => /* @__PURE__ */ React17.createElement(
  Svg9,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React17.createElement(
    Path9,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M18 6 6 18M6 6l12 12"
    }
  )
);
var Cross_default = SvgCross;

// src/components/SvgIcon/icons/Clipboard.tsx
import * as React18 from "react";
import Svg10, { Path as Path10 } from "react-native-svg";
var SvgClipboard = (props) => /* @__PURE__ */ React18.createElement(
  Svg10,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React18.createElement(
    Path10,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }
  ),
  /* @__PURE__ */ React18.createElement(
    Path10,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
    }
  )
);
var Clipboard_default = SvgClipboard;

// src/components/SvgIcon/icons/Clock.tsx
import * as React19 from "react";
import Svg11, { Path as Path11 } from "react-native-svg";
var SvgClock = (props) => /* @__PURE__ */ React19.createElement(
  Svg11,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React19.createElement(
    Path11,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    }
  ),
  /* @__PURE__ */ React19.createElement(
    Path11,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 6v6l4 2"
    }
  )
);
var Clock_default = SvgClock;

// src/components/SvgIcon/icons/CreditCard.tsx
import * as React20 from "react";
import Svg12, { Path as Path12 } from "react-native-svg";
var SvgCreditCard = (props) => /* @__PURE__ */ React20.createElement(
  Svg12,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React20.createElement(
    Path12,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M1 10h22"
    }
  )
);
var CreditCard_default = SvgCreditCard;

// src/components/SvgIcon/icons/Droplet.tsx
import * as React21 from "react";
import Svg13, { Path as Path13 } from "react-native-svg";
var SvgDroplet = (props) => /* @__PURE__ */ React21.createElement(
  Svg13,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React21.createElement(
    Path13,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m12 2.69 5.66 5.66a8 8 0 1 1-11.31 0z"
    }
  )
);
var Droplet_default = SvgDroplet;

// src/components/SvgIcon/icons/Edit.tsx
import * as React22 from "react";
import Svg14, { Path as Path14 } from "react-native-svg";
var SvgEdit = (props) => /* @__PURE__ */ React22.createElement(
  Svg14,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React22.createElement(
    Path14,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M17 3a2.827 2.827 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"
    }
  )
);
var Edit_default = SvgEdit;

// src/components/SvgIcon/icons/Gift.tsx
import * as React23 from "react";
import Svg15, { Path as Path15 } from "react-native-svg";
var SvgGift = (props) => /* @__PURE__ */ React23.createElement(
  Svg15,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React23.createElement(
    Path15,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M20 12v10H4V12M22 7H2v5h20zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7"
    }
  )
);
var Gift_default = SvgGift;

// src/components/SvgIcon/icons/Info.tsx
import * as React24 from "react";
import Svg16, { Path as Path16 } from "react-native-svg";
var SvgInfo = (props) => /* @__PURE__ */ React24.createElement(
  Svg16,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React24.createElement(
    Path16,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M12 16v-4M12 8h.01"
    }
  )
);
var Info_default = SvgInfo;

// src/components/SvgIcon/icons/LogOut.tsx
import * as React25 from "react";
import Svg17, { Path as Path17 } from "react-native-svg";
var SvgLogOut = (props) => /* @__PURE__ */ React25.createElement(
  Svg17,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React25.createElement(
    Path17,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
    }
  )
);
var LogOut_default = SvgLogOut;

// src/components/SvgIcon/icons/LuvoCircle.tsx
import * as React26 from "react";
import Svg18, { Path as Path18 } from "react-native-svg";
var SvgLuvoCircle = (props) => /* @__PURE__ */ React26.createElement(
  Svg18,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 37 39",
    ...props
  },
  /* @__PURE__ */ React26.createElement(
    Path18,
    {
      fill: "#CAABD5",
      d: "M11.064 4.635q.117-.248.236-.494c.473-.976.992-2.127.49-3.089-.573-1.1-2.12-1.214-3.32-.899-2.126.559-3.306 1.929-4.388 3.756-1.203 2.032-2.226 4.177-2.95 6.427-.598 1.859-.988 3.79-1.105 5.74-.18 2.966.49 5.965 3.822 6.648 1.196.245 2.44.128 3.638-.106 4.73-.919 9.295-3.497 12.682-6.9.318-.321.637-.665.78-1.093.266-.8-.18-1.713-.879-2.186-.697-.473-1.585-.577-2.426-.527-2.255.134-4.212 1.29-6.093 2.435-.731.446-1.937 1.492-2.814 1.535-.893.043-.674-1.848-.557-2.442a38.6 38.6 0 0 1 2.884-8.806zM25.574 2.706a2.3 2.3 0 0 0-.38-.351c-.613-.448-1.514-.601-2.256-.535-2.388.214-2.515 3.064-2.235 4.903.425 2.783 1.168 5.463 3.27 7.483 2.754 2.646 8.516 3.832 10.427-.413.474-1.05.645-2.21.731-3.36.227-3.026-.225-10.422-5.05-9.194-.269.068-.54.178-.717.392-.767.927.29 3.24.469 4.26.235 1.344.388 2.689.13 4.043-.088.463-.261.975-.692 1.168-.406.183-.904-.008-1.204-.338s-.445-.768-.572-1.196c-.479-1.612-.773-3.25-1.084-4.897-.134-.706-.373-1.433-.837-1.966M11.23 38.199c-.68-.395-1.297-.899-1.892-1.417-2.49-2.172-4.694-4.643-6.393-7.485-.481-.806-.937-1.688-.898-2.626.03-.729.303-1.393 1.038-1.658.553-.2 1.168-.125 1.735.026 1.66.444 3.125 1.495 4.46 2.541a20.8 20.8 0 0 1 3.76 3.853c-.053-.07.318-.804.361-.913l.417-1.053c.818-2.068 1.554-4.183 2.45-6.218.31-.7.658-1.4 1.189-1.952.717-.746 1.922-1.205 2.91-.72.775.38 1.089 1.353 1.117 2.157.038 1.096-.116 2.288-.28 3.371a28.5 28.5 0 0 1-.78 3.547c-.579 2.02-1.291 4.034-2.397 5.83q-.29.472-.615.922c-.642.888-1.426 1.733-2.422 2.224-1.095.54-2.25.325-3.317-.193a7 7 0 0 1-.442-.236M32.03 18.426c-2.219-.323-4.319 1.035-5.726 2.611-3.08 3.448-6.876 13.353.384 14.703 3.752.698 7.344-3.163 8.926-6.12.506-.944.86-2.094 1.018-3.292.457-3.46-.718-7.334-4.603-7.902m.553 9.417c-.629 1.603-1.91 3.053-3.564 3.4-1.61.34-2.655-.708-2.714-2.275-.066-1.76.808-3.788 1.971-5.09.683-.764 1.631-1.443 2.647-1.306 1.633.22 2.186 2.139 2.072 3.542a6.1 6.1 0 0 1-.412 1.73"
    }
  )
);
var LuvoCircle_default = SvgLuvoCircle;

// src/components/SvgIcon/icons/MapPin.tsx
import * as React27 from "react";
import Svg19, { Path as Path19 } from "react-native-svg";
var SvgMapPin = (props) => /* @__PURE__ */ React27.createElement(
  Svg19,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React27.createElement(
    Path19,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0"
    }
  ),
  /* @__PURE__ */ React27.createElement(
    Path19,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    }
  )
);
var MapPin_default = SvgMapPin;

// src/components/SvgIcon/icons/Map.tsx
import * as React28 from "react";
import Svg20, { Path as Path20 } from "react-native-svg";
var SvgMap = (props) => /* @__PURE__ */ React28.createElement(
  Svg20,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React28.createElement(
    Path20,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M1 6v16l7-4 8 4 7-4V2l-7 4-8-4zM8 2v16M16 6v16"
    }
  )
);
var Map_default = SvgMap;

// src/components/SvgIcon/icons/Profile.tsx
import * as React29 from "react";
import Svg21, { Path as Path21 } from "react-native-svg";
var SvgProfile = (props) => /* @__PURE__ */ React29.createElement(
  Svg21,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React29.createElement(
    Path21,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.905,
      d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"
    }
  ),
  /* @__PURE__ */ React29.createElement(
    Path21,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.905,
      d: "M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    }
  )
);
var Profile_default = SvgProfile;

// src/components/SvgIcon/icons/QrCode.tsx
import * as React30 from "react";
import Svg22, { Path as Path22 } from "react-native-svg";
var SvgQrCode = (props) => /* @__PURE__ */ React30.createElement(
  Svg22,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React30.createElement(
    Path22,
    {
      fill: props.color || "currentColor",
      d: "M1.505 14.777c.017-.027.039-.054.05-.082.164-.372.487-.553.87-.493.35.055.592.35.641.745.099.783.159 1.583.334 2.35.389 1.719 2.037 3.159 3.784 3.383.668.088 1.342.165 2.01.241.416.044.711.334.744.74.028.372-.224.69-.624.788-.01 0-.01.022-.022.033h-.575c-.038-.017-.076-.038-.12-.044-.657-.088-1.32-.131-1.966-.274-2.24-.493-3.74-1.862-4.594-3.964-.269-.657-.318-1.364-.417-2.06-.038-.262-.082-.53-.12-.793v-.575zM1.505 8.628c.039-.263.077-.531.126-.794.12-.64.16-1.314.378-1.922.794-2.19 2.333-3.603 4.633-4.096.805-.175 1.632-.23 2.453-.312.449-.05.816.29.843.734.028.416-.295.766-.744.82-.81.1-1.638.16-2.432.33-1.741.366-3.203 1.982-3.455 3.74-.093.635-.17 1.27-.241 1.91-.044.395-.29.69-.64.745-.39.06-.707-.12-.871-.492-.011-.028-.033-.055-.05-.083v-.58M14.626 22.482c-.044-.027-.088-.06-.132-.082a.77.77 0 0 1-.41-.854c.07-.35.356-.575.722-.62.827-.098 1.66-.158 2.47-.333 1.714-.367 3.17-1.988 3.417-3.724.093-.657.164-1.314.246-1.971a.773.773 0 0 1 .81-.701c.4.016.767.334.735.728-.099 1.221-.132 2.464-.658 3.603-.892 1.928-2.354 3.198-4.462 3.642-.663.142-1.353.186-2.027.274-.049.005-.093.027-.142.038h-.575z"
    }
  ),
  /* @__PURE__ */ React30.createElement(
    Path22,
    {
      fill: props.color || "currentColor",
      d: "M11.488 8.332c-.05.536-.082 1.067-.148 1.593-.088.685-.706 1.298-1.39 1.402a10.8 10.8 0 0 1-3.204 0c-.668-.099-1.276-.695-1.386-1.358-.17-1.04-.17-2.08-.027-3.121.115-.844.68-1.413 1.522-1.528 1.04-.142 2.081-.142 3.122.027.673.11 1.275.707 1.363 1.38.071.531.104 1.073.153 1.61zm-1.566 0L9.823 7.11c-.01-.16-.076-.236-.252-.258a10 10 0 0 0-2.486 0c-.142.017-.197.082-.213.22q-.165 1.246 0 2.485c.022.165.093.225.24.241a9.8 9.8 0 0 0 2.47 0c.154-.022.23-.093.241-.246l.099-1.227zM12.512 8.326c.05-.536.082-1.078.153-1.61.093-.673.696-1.264 1.37-1.374 1.04-.17 2.08-.17 3.12-.022.838.12 1.397.68 1.512 1.517.148 1.04.148 2.08-.022 3.121-.11.674-.7 1.265-1.375 1.37a10.6 10.6 0 0 1-3.225 0c-.679-.105-1.292-.713-1.38-1.392-.07-.53-.104-1.073-.153-1.61m3.149 1.583 1.226-.099c.148-.01.225-.07.247-.24.104-.833.11-1.66 0-2.487-.022-.147-.088-.208-.23-.224a9.3 9.3 0 0 0-2.47 0c-.17.022-.236.098-.252.257a9.6 9.6 0 0 0 0 2.448c.022.164.099.241.263.252.405.027.816.066 1.227.098zM11.477 15.801c-.038.39-.071.92-.137 1.446-.088.674-.69 1.27-1.358 1.385-1.046.17-2.097.17-3.143.022-.832-.12-1.39-.684-1.506-1.522-.142-1.04-.142-2.08.027-3.121.11-.674.723-1.265 1.408-1.364a11 11 0 0 1 3.165 0c.695.099 1.314.712 1.418 1.402.033.214.066.433.077.652.022.317.033.64.054 1.106zm-1.555-.159-.099-1.22c-.01-.148-.07-.236-.235-.258a9.7 9.7 0 0 0-2.492 0c-.137.017-.213.077-.23.23q-.165 1.248 0 2.486c.022.148.077.214.225.23q1.247.165 2.486 0c.164-.022.224-.098.235-.246l.099-1.227zM15.66 12.5c.537.049 1.074.082 1.61.153.723.098 1.298.723 1.402 1.506.143 1.04.143 2.08-.027 3.121-.11.657-.69 1.243-1.347 1.347q-1.642.262-3.286 0c-.668-.11-1.26-.723-1.358-1.39a10.7 10.7 0 0 1 0-3.182c.099-.69.712-1.32 1.408-1.408.525-.065 1.056-.098 1.593-.148zm0 1.566-1.22.098c-.16.011-.241.088-.263.252a9.8 9.8 0 0 0 0 2.47c.016.137.07.213.23.235.838.11 1.67.11 2.508 0 .142-.016.197-.082.213-.219q.163-1.23.006-2.47c-.022-.18-.099-.251-.269-.262-.4-.028-.8-.066-1.21-.099z"
    }
  ),
  /* @__PURE__ */ React30.createElement(
    Path22,
    {
      fill: props.color || "currentColor",
      d: "M22.494 8.825c.006.591-.306.936-.717.958-.444.027-.783-.28-.838-.717-.098-.8-.159-1.605-.334-2.388-.383-1.686-1.988-3.121-3.701-3.373-.701-.104-1.408-.175-2.114-.252-.416-.044-.74-.394-.723-.8.016-.41.345-.782.745-.75 1.243.105 2.508.121 3.669.641 2.102.947 3.422 2.536 3.778 4.852.104.662.175 1.325.24 1.823z"
    }
  )
);
var QrCode_default = SvgQrCode;

// src/components/SvgIcon/icons/Settings.tsx
import * as React31 from "react";
import Svg23, { G as G2, Path as Path23, Defs as Defs2, ClipPath as ClipPath2 } from "react-native-svg";
var SvgSettings = (props) => /* @__PURE__ */ React31.createElement(
  Svg23,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React31.createElement(
    G2,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      clipPath: "url(#settings_svg__a)"
    },
    /* @__PURE__ */ React31.createElement(Path23, { d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" }),
    /* @__PURE__ */ React31.createElement(Path23, { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 3.417 1.415 2 2 0 0 1-.587 1.415l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1" })
  ),
  /* @__PURE__ */ React31.createElement(Defs2, null, /* @__PURE__ */ React31.createElement(ClipPath2, { id: "settings_svg__a" }, /* @__PURE__ */ React31.createElement(Path23, { fill: "#fff", d: "M0 0h24v24H0z" })))
);
var Settings_default = SvgSettings;

// src/components/SvgIcon/icons/Star.tsx
import * as React32 from "react";
import Svg24, { Path as Path24 } from "react-native-svg";
var SvgStar = (props) => /* @__PURE__ */ React32.createElement(
  Svg24,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React32.createElement(
    Path24,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
    }
  )
);
var Star_default = SvgStar;

// src/components/SvgIcon/icons/Tool.tsx
import * as React33 from "react";
import Svg25, { Path as Path25 } from "react-native-svg";
var SvgTool = (props) => /* @__PURE__ */ React33.createElement(
  Svg25,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React33.createElement(
    Path25,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.121 2.121 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    }
  )
);
var Tool_default = SvgTool;

// src/components/SvgIcon/icons/User.tsx
import * as React34 from "react";
import Svg26, { Path as Path26 } from "react-native-svg";
var SvgUser = (props) => /* @__PURE__ */ React34.createElement(
  Svg26,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React34.createElement(
    Path26,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
    }
  )
);
var User_default = SvgUser;

// src/components/SvgIcon/icons/Wind.tsx
import * as React35 from "react";
import Svg27, { Path as Path27 } from "react-native-svg";
var SvgWind = (props) => /* @__PURE__ */ React35.createElement(
  Svg27,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React35.createElement(
    Path27,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
    }
  )
);
var Wind_default = SvgWind;

// src/components/SvgIcon/types.ts
var icons = {
  AlertCircle: AlertCircle_default,
  Check: Check_default,
  AlertTriangle: AlertTriangle_default,
  ArrowLeftCircle: ArrowLeftCircle_default,
  ArrowRightCircle: ArrowRightCircle_default,
  Bell: Bell_default,
  ChevronLeft: ChevronLeft_default,
  ChevronRight: ChevronRight_default,
  Cross: Cross_default,
  Clipboard: Clipboard_default,
  Clock: Clock_default,
  CreditCard: CreditCard_default,
  Droplet: Droplet_default,
  Edit: Edit_default,
  Gift: Gift_default,
  Info: Info_default,
  LogOut: LogOut_default,
  LuvoCircle: LuvoCircle_default,
  MapPin: MapPin_default,
  Map: Map_default,
  Profile: Profile_default,
  QrCode: QrCode_default,
  Settings: Settings_default,
  Star: Star_default,
  Tool: Tool_default,
  User: User_default,
  Wind: Wind_default
};

// src/components/SvgIcon/SvgIcon.tsx
var SvgIconComponent = ({
  name,
  size = "icon-size-xl",
  color = "font-primary",
  style,
  accessibilityLabel,
  accessible = true,
  ...rest
}) => {
  const Icon2 = icons[name];
  const theme = useBaseTheme();
  const sizeValue = theme.iconSize[size] ?? theme.iconSize["icon-size-xl"];
  const colorValue = color ? theme.fontColor[color] : void 0;
  if (!Icon2) {
    if (__DEV__) {
      console.warn(`[SvgIcon] Unknown icon name: "${name}"`);
    }
    return /* @__PURE__ */ React36.createElement(View, { style: [styles.placeholder, { width: sizeValue, height: sizeValue }, style] });
  }
  return /* @__PURE__ */ React36.createElement(
    View,
    {
      style: [styles.container, { width: sizeValue, height: sizeValue }, style],
      accessibilityLabel: accessibilityLabel ?? name,
      accessible,
      accessibilityRole: "image"
    },
    /* @__PURE__ */ React36.createElement(Icon2, { width: sizeValue, height: sizeValue, color: colorValue, ...rest })
  );
};
var styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  placeholder: { opacity: 0 }
});
var SvgIcon = memo2(SvgIconComponent);

// src/components/SvgImage/SvgImage.tsx
import React38, { memo as memo3 } from "react";
import { StyleSheet as StyleSheet2, View as View2 } from "react-native";

// src/components/SvgImage/images/avatar-detergent.svg
var avatar_detergent_default = "./avatar-detergent-2KG3CZME.svg";

// src/components/SvgImage/images/avatar-laundry-basket.svg
var avatar_laundry_basket_default = "./avatar-laundry-basket-XWU5XWTP.svg";

// src/components/SvgImage/images/avatar-pants.svg
var avatar_pants_default = "./avatar-pants-R457JR4B.svg";

// src/components/SvgImage/images/avatar-sock.svg
var avatar_sock_default = "./avatar-sock-ULBN5ZZP.svg";

// src/components/SvgImage/images/avatar-washing-machine.svg
var avatar_washing_machine_default = "./avatar-washing-machine-2AYKQTMS.svg";

// src/components/SvgImage/images/laundry-image-small.svg
var laundry_image_small_default = "./laundry-image-small-3Q6HXYYT.svg";

// src/components/SvgImage/images/LuvoLogoPink.tsx
import * as React37 from "react";
import Svg28, { Path as Path28 } from "react-native-svg";
var LuvoLogoPink = (props) => /* @__PURE__ */ React37.createElement(
  Svg28,
  {
    width: props.width ?? 32,
    height: props.height ?? 34,
    viewBox: "0 0 32 34",
    fill: "none",
    ...props
  },
  /* @__PURE__ */ React37.createElement(
    Path28,
    {
      d: "M9.64076 4.03868C9.70789 3.8949 9.77661 3.75112 9.84586 3.60786C10.2582 2.75786 10.7101 1.75455 10.2735 0.916704C9.77344 -0.0421966 8.42495 -0.141576 7.37936 0.133302C5.52763 0.620153 4.49948 1.81376 3.55697 3.40593C2.50873 5.17625 1.6175 7.04542 0.986863 9.00604C0.465652 10.6257 0.125755 12.3083 0.0232046 14.0083C-0.133264 16.5921 0.450322 19.2051 3.35345 19.7997C4.39588 20.0133 5.479 19.9113 6.52354 19.7078C10.6446 18.9069 14.6224 16.6603 17.5736 13.6948C17.8511 13.4157 18.1287 13.1165 18.2529 12.7428C18.4849 12.0461 18.0959 11.251 17.488 10.8387C16.8801 10.4264 16.1067 10.3355 15.3735 10.3788C13.4092 10.4962 11.7039 11.5027 10.0647 12.5012C9.42772 12.8892 8.37737 13.8011 7.61247 13.8381C6.83436 13.8756 7.02519 12.2279 7.12774 11.7104C7.30271 10.8287 7.51362 9.95384 7.7589 9.0885C8.24945 7.35836 8.87903 5.66733 9.64076 4.03815V4.03868Z",
      fill: "#D75B71"
    }
  ),
  /* @__PURE__ */ React37.createElement(
    Path28,
    {
      d: "M22.2828 2.35782C22.1845 2.24522 22.0746 2.14215 21.9514 2.05228C21.4175 1.66217 20.6325 1.52843 19.9855 1.58605C17.9049 1.77212 17.7944 4.25606 18.0386 5.85828C18.4087 8.28302 19.0557 10.6184 20.8873 12.3787C23.2867 14.684 28.308 15.7169 29.9731 12.0187C30.3854 11.1032 30.535 10.0925 30.6101 9.09127C30.8078 6.45455 30.4134 0.00972849 26.2094 1.07964C25.9752 1.13937 25.7384 1.23505 25.5846 1.42112C24.9164 2.22884 25.8383 4.24496 25.9932 5.1325C26.1983 6.30443 26.3315 7.47583 26.1068 8.65569C26.0302 9.05902 25.879 9.5057 25.5042 9.6738C25.15 9.83291 24.7166 9.6664 24.4549 9.37936C24.1932 9.09232 24.0669 8.71014 23.9564 8.33747C23.5394 6.93242 23.283 5.5057 23.0118 4.07052C22.8955 3.45522 22.6867 2.82141 22.2823 2.35729L22.2828 2.35782Z",
      fill: "#D75B71"
    }
  ),
  /* @__PURE__ */ React37.createElement(
    Path28,
    {
      d: "M9.78477 33.2835C9.19167 32.9394 8.65407 32.5006 8.13603 32.0492C5.96556 30.1567 4.04564 28.0037 2.56553 25.5272C2.14581 24.8252 1.74883 24.0566 1.78266 23.2388C1.80856 22.604 2.04696 22.0257 2.68764 21.7947C3.1692 21.6207 3.70469 21.6852 4.19947 21.8174C5.64522 22.2038 6.92234 23.1199 8.08476 24.0312C9.31589 24.9959 10.4202 26.1398 11.3611 27.3884C11.3151 27.3271 11.6386 26.6875 11.6761 26.5929C11.7972 26.2868 11.9182 25.9812 12.0393 25.6752C12.7524 23.8737 13.3936 22.0304 14.1744 20.2574C14.4434 19.6469 14.7474 19.0379 15.2099 18.5569C15.8353 17.9062 16.8851 17.5066 17.7451 17.9289C18.4212 18.2609 18.6945 19.1077 18.7188 19.8087C18.7521 20.7633 18.6179 21.8026 18.4751 22.7462C18.3171 23.7896 18.0845 24.8215 17.7948 25.8364C17.291 27.5972 16.6699 29.3511 15.7068 30.9158C15.5382 31.1902 15.3595 31.4587 15.1708 31.7199C14.611 32.4937 13.9286 33.2301 13.0606 33.6577C12.1064 34.1282 11.1 33.9411 10.1707 33.4891C10.0396 33.4252 9.91111 33.3564 9.7853 33.2835H9.78477Z",
      fill: "#D75B71"
    }
  ),
  /* @__PURE__ */ React37.createElement(
    Path28,
    {
      d: "M27.9073 16.0545C25.9747 15.7728 24.1447 16.9563 22.9183 18.3292C20.2351 21.3332 16.927 29.9644 23.2529 31.1406C26.5224 31.7485 29.6523 28.3844 31.0309 25.8074C31.4712 24.9849 31.7799 23.9837 31.9179 22.9392C32.3159 19.9245 31.2925 16.5488 27.9073 16.0545ZM28.3899 24.2596C27.8418 25.6562 26.7253 26.9196 25.2843 27.2225C23.8809 27.5175 22.9706 26.6051 22.9193 25.2397C22.8617 23.7057 23.624 21.939 24.6373 20.8052C25.232 20.1391 26.0582 19.5476 26.9431 19.6665C28.3661 19.8579 28.8482 21.5304 28.7489 22.7466C28.7087 23.2468 28.5855 23.7617 28.3899 24.2596Z",
      fill: "#D75B71"
    }
  )
);
var LuvoLogoPink_default = LuvoLogoPink;

// src/components/SvgImage/images/profile-placeholder.svg
var profile_placeholder_default = "./profile-placeholder-FFV6PPKJ.svg";

// src/components/SvgImage/images/qr-target.svg
var qr_target_default = "./qr-target-MQKQA4FG.svg";

// src/components/SvgImage/images/wave-laundry-card.svg
var wave_laundry_card_default = "./wave-laundry-card-KIUAQYW7.svg";

// src/components/SvgImage/images/wave-profile.svg
var wave_profile_default = "./wave-profile-FMHOM737.svg";

// src/components/SvgImage/images/index.ts
var images = {
  "avatar-sock": avatar_sock_default,
  "avatar-detergent": avatar_detergent_default,
  "avatar-washing-machine": avatar_washing_machine_default,
  "avatar-laundry-basket": avatar_laundry_basket_default,
  "avatar-pants": avatar_pants_default,
  "laundry-small": laundry_image_small_default,
  "luvo-logo-pink": LuvoLogoPink_default,
  "profile-placeholder": profile_placeholder_default,
  "qr-target": qr_target_default,
  "wave-laundry-card": wave_laundry_card_default,
  "wave-profile": wave_profile_default
};

// src/components/SvgImage/SvgImage.tsx
var SvgImageComponent = ({
  name,
  height,
  width,
  color,
  style,
  accessibilityLabel,
  accessible = true,
  ...rest
}) => {
  const Image = images[name];
  const resolvedHeight = height ?? (width !== void 0 ? void 0 : 24);
  const resolvedWidth = width;
  if (!Image) {
    if (__DEV__) {
      console.warn(`[SvgImage] Unknown image name: "${name}"`);
    }
    return /* @__PURE__ */ React38.createElement(View2, { style: [styles2.placeholder, style] });
  }
  return /* @__PURE__ */ React38.createElement(
    View2,
    {
      style: styles2.container,
      accessibilityLabel: accessibilityLabel ?? name,
      accessible,
      accessibilityRole: "image"
    },
    /* @__PURE__ */ React38.createElement(Image, { height: resolvedHeight, width: resolvedWidth, color, ...rest })
  );
};
var styles2 = StyleSheet2.create({
  container: { justifyContent: "center", alignItems: "center" },
  placeholder: { opacity: 0 }
});
var SvgImage = memo3(SvgImageComponent);

// src/components/Icon/Icon.tsx
import Ionicon from "react-native-vector-icons/Ionicons";
var Icon = ({ name, size = "font-size-md", color = "font-primary" }) => {
  const theme = useBaseTheme();
  return /* @__PURE__ */ React.createElement(Ionicon, { name, size: theme.fontSize[size], color: theme.fontColor[color] });
};

// src/components/Tag/Tag.tsx
import React40 from "react";
import { View as View3 } from "react-native";

// src/components/Text/Text.tsx
import React39 from "react";
import { Text as RNText } from "react-native";

// src/components/Text/theme/useTextTheme.ts
import { useMemo as useMemo4 } from "react";
var useTextTheme2 = (params) => {
  const theme = useBaseTheme();
  const { rnFontFamily } = useText(params);
  const text = useMemo4(
    () => ({
      fontFamily: rnFontFamily,
      fontSize: theme.fontSize[params.fontSize],
      color: theme.fontColor[params.color],
      ...params.lineHeight !== void 0 && { lineHeight: theme.lineHeight[params.lineHeight] },
      ...params.textAlign !== void 0 && { textAlign: params.textAlign }
    }),
    [rnFontFamily, theme, params.fontSize, params.color, params.lineHeight, params.textAlign]
  );
  return { styles: { text }, theme };
};

// src/components/Text/Text.tsx
var Text2 = ({
  children,
  fontSize = "font-size-md",
  color = "font-primary",
  fontWeight = "regular",
  lineHeight,
  textAlign,
  style,
  numberOfLines
}) => {
  const { styles: styles3 } = useTextTheme2({ fontSize, color, fontWeight, lineHeight, textAlign });
  return /* @__PURE__ */ React39.createElement(RNText, { style: [styles3.text, style], numberOfLines }, children);
};

// src/components/Tag/theme/useTagTheme.ts
import { useMemo as useMemo5 } from "react";
var useTagTheme = ({ surfaceColor, borderColor, fullWidth, disabled }) => {
  const theme = useBaseTheme();
  const containerStyle = useMemo5(() => {
    return {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing["spacing-xxs"],
      borderWidth: 1,
      borderRadius: theme.cornerRad["corner-rad-full"],
      backgroundColor: disabled ? theme.surfaceColor["surface-disabled"] : theme.surfaceColor[surfaceColor],
      borderColor: disabled ? theme.borderColor["border-disabled"] : theme.borderColor[borderColor],
      paddingVertical: theme.spacing["spacing-xs"],
      paddingHorizontal: theme.spacing["spacing-md"],
      ...fullWidth ? { flexGrow: 1, flexShrink: 1 } : { alignSelf: "center" }
    };
  }, [theme, surfaceColor, borderColor, fullWidth, disabled]);
  return { containerStyle };
};

// src/components/Tag/Tag.tsx
var Tag = ({
  style,
  surfaceColor = "surface-background",
  borderColor = "border-transparent",
  fullWidth = false,
  disabled = false,
  iconName,
  iconSize = "icon-size-xs",
  ...props
}) => {
  const { containerStyle } = useTagTheme({
    surfaceColor,
    borderColor,
    fullWidth,
    disabled
  });
  return /* @__PURE__ */ React40.createElement(View3, { style: [containerStyle, style] }, iconName ? /* @__PURE__ */ React40.createElement(SvgIcon, { name: iconName, size: iconSize, color: props.color }) : null, props.children ? /* @__PURE__ */ React40.createElement(Text2, { ...props }) : null);
};

// src/components/Label/Label.tsx
import React41 from "react";
import { View as View4 } from "react-native";

// src/components/Label/theme/useLabelTheme.ts
import { StyleSheet as StyleSheet3 } from "react-native";
var useLabelTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet3.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing["spacing-xxs"]
    },
    text: {
      flex: 1,
      flexShrink: 1
    }
  });
  return { styles: styles3 };
};

// src/components/Label/Label.tsx
var Label = ({
  iconName,
  iconSize = "icon-size-sm",
  color = "font-primary",
  fontSize = "font-size-sm",
  numberOfLines,
  children,
  style
}) => {
  const { styles: styles3 } = useLabelTheme();
  return /* @__PURE__ */ React41.createElement(View4, { style: [styles3.container, style] }, /* @__PURE__ */ React41.createElement(SvgIcon, { name: iconName, size: iconSize, color }), /* @__PURE__ */ React41.createElement(Text2, { fontSize, color, style: styles3.text, numberOfLines }, children));
};

// src/components/ConcurrencyTag/ConcurrencyTag.tsx
import React42 from "react";
import { View as View5 } from "react-native";

// src/components/ConcurrencyTag/hooks/useConcurrencyTag.ts
var fontColorMap = {
  low: "font-success",
  medium: "font-warning",
  high: "font-error",
  none: "font-disabled"
};
function getLevel(available, total) {
  if (total === 0 || available === 0) return "none";
  const ratio = available / total;
  if (ratio >= 0.66) return "low";
  if (ratio >= 0.33) return "medium";
  return "high";
}
var useConcurrencyTag = ({ available, total, labels }) => {
  const level = getLevel(available, total);
  return {
    label: labels[level],
    color: fontColorMap[level]
  };
};

// src/components/ConcurrencyTag/theme/useConcurrencyTagTheme.ts
import { useMemo as useMemo6 } from "react";
import { StyleSheet as StyleSheet4 } from "react-native";
var useConcurrencyTagTheme = (color) => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet4.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing["spacing-xs"]
    }
  });
  const dotStyle = useMemo6(() => {
    const size = theme.spacing["spacing-xs"];
    return {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: theme.fontColor[color]
    };
  }, [color, theme]);
  return { styles: styles3, dotStyle };
};

// src/components/ConcurrencyTag/ConcurrencyTag.tsx
var ConcurrencyTag = ({ available, total, labels }) => {
  const { label, color } = useConcurrencyTag({ available, total, labels });
  const { styles: styles3, dotStyle } = useConcurrencyTagTheme(color);
  return /* @__PURE__ */ React42.createElement(View5, { style: styles3.row }, /* @__PURE__ */ React42.createElement(View5, { style: dotStyle }), /* @__PURE__ */ React42.createElement(Text2, { fontSize: "font-size-sm", color }, label));
};

// src/components/TimeTag/TimeTag.tsx
import React43 from "react";

// src/components/TimeTag/hooks/useTimeTag.ts
import { useEffect, useState as useState2 } from "react";
function formatHHMMSS(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor(secs % 3600 / 60);
  const s = secs % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
var useTimeTag = ({ seconds, extended, endsInLabel }) => {
  const [remaining, setRemaining] = useState2(seconds);
  useEffect(() => {
    setRemaining(seconds);
  }, [seconds]);
  useEffect(() => {
    if (remaining <= 0) return;
    const timer = setTimeout(() => setRemaining((r) => Math.max(0, r - 1)), 1e3);
    return () => clearTimeout(timer);
  }, [remaining]);
  const time = formatHHMMSS(remaining);
  const displayTime = extended ? `${endsInLabel} ${time}` : time;
  return { displayTime };
};

// src/components/TimeTag/TimeTag.tsx
var TimeTag = ({ seconds, extended = false, endsInLabel = "" }) => {
  const { displayTime } = useTimeTag({ seconds, extended, endsInLabel });
  return /* @__PURE__ */ React43.createElement(
    Tag,
    {
      color: "font-primary",
      surfaceColor: "surface-primary",
      fontWeight: "semibold",
      iconName: "Clock",
      iconSize: "icon-size-xs"
    },
    displayTime
  );
};

// src/components/AvailabilityTag/AvailabilityTag.tsx
import React44 from "react";

// src/components/AvailabilityTag/hooks/useAvailabilityTag.ts
var fontColorMap2 = {
  "available": "font-status-available",
  "in-use": "font-status-in-use",
  "out-of-order": "font-status-out-of-order",
  "maintenance": "font-status-maintenance"
};
var backgroundColorMap = {
  "available": "surface-status-available",
  "in-use": "surface-status-in-use",
  "out-of-order": "surface-status-out-of-order",
  "maintenance": "surface-status-maintenance"
};
var useAvailabilityTag = ({ status, labels }) => {
  return {
    label: labels[status],
    color: fontColorMap2[status],
    surfaceColor: backgroundColorMap[status]
  };
};

// src/components/AvailabilityTag/AvailabilityTag.tsx
var AvailabilityTag = ({ status, labels }) => {
  const { label, color, surfaceColor } = useAvailabilityTag({ status, labels });
  return /* @__PURE__ */ React44.createElement(Tag, { color, surfaceColor, fontWeight: "semibold" }, label);
};

// src/components/StepIndicator/StepIndicator.tsx
import React46 from "react";
import { View as View6 } from "react-native";

// src/components/StepIndicator/components/Dot.tsx
import React45 from "react";
import Animated from "react-native-reanimated";

// src/components/StepIndicator/theme/useDotAnimation.ts
import { useEffect as useEffect2 } from "react";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

// src/components/StepIndicator/theme/useStepIndicatorTheme.ts
import { StyleSheet as StyleSheet5 } from "react-native";
var DOT_SIZE = 6;
var DOT_ACTIVE_WIDTH = 18;
var useStepIndicatorTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet5.create({
    row: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: theme.spacing["spacing-xs"]
    },
    dot: {
      height: DOT_SIZE,
      borderRadius: theme.cornerRad["corner-rad-full"]
    }
  });
  return {
    styles: styles3,
    dotSize: DOT_SIZE,
    dotActiveWidth: DOT_ACTIVE_WIDTH,
    dotColor: theme.surfaceColor["surface-disabled"],
    dotActiveColor: theme.fontColor["font-highlight"]
  };
};

// src/components/StepIndicator/theme/useDotAnimation.ts
var SPRING = { damping: 16, stiffness: 200, mass: 0.6 };
var useDotAnimation = (active) => {
  const { styles: styles3, dotSize, dotActiveWidth, dotColor, dotActiveColor } = useStepIndicatorTheme();
  const width = useSharedValue(active ? dotActiveWidth : dotSize);
  const opacity = useSharedValue(active ? 1 : 0.35);
  useEffect2(() => {
    width.value = withSpring(active ? dotActiveWidth : dotSize, SPRING);
    opacity.value = withSpring(active ? 1 : 0.35, SPRING);
  }, [active, dotActiveWidth, dotSize, width, opacity]);
  const animStyle = useAnimatedStyle(() => ({
    width: width.value,
    opacity: opacity.value
  }));
  return {
    dotStyle: styles3.dot,
    animStyle,
    backgroundColor: active ? dotActiveColor : dotColor
  };
};

// src/components/StepIndicator/components/Dot.tsx
var Dot = ({ active }) => {
  const { dotStyle, animStyle, backgroundColor } = useDotAnimation(active);
  return /* @__PURE__ */ React45.createElement(Animated.View, { style: [dotStyle, { backgroundColor }, animStyle] });
};

// src/components/StepIndicator/StepIndicator.tsx
var StepIndicator = ({ total, current }) => {
  const { styles: styles3 } = useStepIndicatorTheme();
  if (total <= 1) return null;
  return /* @__PURE__ */ React46.createElement(View6, { style: styles3.row }, Array.from({ length: total }).map((_, i) => /* @__PURE__ */ React46.createElement(Dot, { key: i, active: i === current })));
};

// src/components/ActionModal/ActionModal.tsx
import React47 from "react";
import { Modal, Pressable, TouchableOpacity, View as View7 } from "react-native";

// src/components/ActionModal/theme/useActionModalTheme.ts
import { StyleSheet as StyleSheet6 } from "react-native";
var COLOR_RED_50 = "#fbeef0";
var COLOR_RED_600 = "#FF3B3B";
var useActionModalTheme = (variant = "neutral") => {
  const theme = useBaseTheme();
  const isDestructive = variant === "destructive";
  const styles3 = StyleSheet6.create({
    overlay: {
      flex: 1,
      backgroundColor: theme.overlayColor.modal,
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing["spacing-xl"]
    },
    card: {
      backgroundColor: theme.surfaceColor["surface-primary"],
      borderRadius: theme.cornerRad["corner-rad-xxxl"],
      padding: theme.spacing["spacing-xl"],
      width: "100%",
      maxWidth: theme.componentSize.cardMaxWidth,
      alignItems: "center",
      ...theme.shadowFloating
    },
    iconContainer: {
      width: theme.componentSize.iconContainer,
      height: theme.componentSize.iconContainer,
      borderRadius: theme.cornerRad["corner-rad-full"],
      backgroundColor: isDestructive ? COLOR_RED_50 : theme.surfaceColor["surface-background"],
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing["spacing-md"]
    },
    title: {
      textAlign: "center",
      marginBottom: theme.spacing["spacing-xs"]
    },
    body: {
      textAlign: "center",
      marginBottom: theme.spacing["spacing-xl"]
    },
    actions: {
      width: "100%",
      gap: theme.spacing["spacing-xs"]
    },
    confirmButton: {
      width: "100%",
      backgroundColor: isDestructive ? COLOR_RED_600 : theme.surfaceColor["surface-invert"],
      borderRadius: theme.cornerRad["corner-rad-lg"],
      paddingVertical: theme.spacing["spacing-md"],
      alignItems: "center"
    },
    cancelButton: {
      width: "100%",
      borderRadius: theme.cornerRad["corner-rad-lg"],
      paddingVertical: theme.spacing["spacing-sm"],
      alignItems: "center"
    }
  });
  return { styles: styles3 };
};

// src/components/ActionModal/ActionModal.tsx
var ActionModal = ({
  visible,
  title,
  body,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  variant = "neutral",
  icon = "AlertTriangle"
}) => {
  const { styles: styles3 } = useActionModalTheme(variant);
  return /* @__PURE__ */ React47.createElement(Modal, { visible, transparent: true, animationType: "fade", onRequestClose: onCancel }, /* @__PURE__ */ React47.createElement(Pressable, { style: styles3.overlay, onPress: onCancel }, /* @__PURE__ */ React47.createElement(Pressable, { style: styles3.card, onPress: () => {
  } }, /* @__PURE__ */ React47.createElement(View7, { style: styles3.iconContainer }, /* @__PURE__ */ React47.createElement(
    SvgIcon,
    {
      name: icon,
      size: "icon-size-xl",
      color: variant === "destructive" ? "font-error" : "font-secondary"
    }
  )), /* @__PURE__ */ React47.createElement(Text2, { fontSize: "font-size-lg", fontWeight: "extrabold", style: styles3.title }, title), /* @__PURE__ */ React47.createElement(Text2, { fontSize: "font-size-xs", color: "font-light", style: styles3.body }, body), /* @__PURE__ */ React47.createElement(View7, { style: styles3.actions }, /* @__PURE__ */ React47.createElement(TouchableOpacity, { style: styles3.confirmButton, onPress: onConfirm, activeOpacity: 0.8 }, /* @__PURE__ */ React47.createElement(Text2, { fontSize: "font-size-md", fontWeight: "bold", color: "font-invert" }, confirmLabel)), /* @__PURE__ */ React47.createElement(TouchableOpacity, { style: styles3.cancelButton, onPress: onCancel, activeOpacity: 0.7 }, /* @__PURE__ */ React47.createElement(Text2, { fontSize: "font-size-sm", fontWeight: "semibold" }, cancelLabel))))));
};

// src/components/SocialAuth/SocialAuth.tsx
import React50 from "react";
import { View as View10 } from "react-native";

// src/components/AppleSignInButton/AppleSignInButton.tsx
import React48 from "react";
import { TouchableOpacity as TouchableOpacity2, View as View8 } from "react-native";
import Svg29, { Path as Path29 } from "react-native-svg";

// src/components/AppleSignInButton/theme/useAppleSignInButtonTheme.ts
import { StyleSheet as StyleSheet7 } from "react-native";
var useAppleSignInButtonTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet7.create({
    button: {
      borderRadius: theme.cornerRad["corner-rad-full"],
      backgroundColor: "#000000"
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing["spacing-xs"],
      paddingVertical: theme.spacing["spacing-sm"],
      paddingHorizontal: theme.spacing["spacing-md"]
    }
  });
  return { styles: styles3 };
};

// src/components/AppleSignInButton/AppleSignInButton.tsx
var AppleLogo = () => /* @__PURE__ */ React48.createElement(Svg29, { width: 17, height: 20, viewBox: "0 0 170 209" }, /* @__PURE__ */ React48.createElement(
  Path29,
  {
    fill: "#FFFFFF",
    d: "M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.241z"
  }
));
var AppleSignInButton = ({ label, onPress, disabled, submitting }) => {
  const { styles: styles3 } = useAppleSignInButtonTheme();
  return /* @__PURE__ */ React48.createElement(TouchableOpacity2, { style: styles3.button, onPress, disabled: disabled || submitting, activeOpacity: 0.85 }, /* @__PURE__ */ React48.createElement(View8, { style: styles3.content }, /* @__PURE__ */ React48.createElement(AppleLogo, null), /* @__PURE__ */ React48.createElement(Text2, { fontSize: "font-size-sm", fontWeight: "medium", color: "font-invert" }, label)));
};

// src/components/GoogleSignInButton/GoogleSignInButton.tsx
import React49 from "react";
import { TouchableOpacity as TouchableOpacity3, View as View9 } from "react-native";
import Svg30, { Path as Path30 } from "react-native-svg";

// src/components/GoogleSignInButton/theme/useGoogleSignInButtonTheme.ts
import { StyleSheet as StyleSheet8 } from "react-native";
var useGoogleSignInButtonTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet8.create({
    button: {
      borderRadius: theme.cornerRad["corner-rad-full"],
      borderWidth: theme.borderWidth["border-width-xs"],
      borderColor: "#DADCE0",
      backgroundColor: "#FFFFFF"
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing["spacing-xs"],
      paddingVertical: theme.spacing["spacing-sm"],
      paddingHorizontal: theme.spacing["spacing-md"]
    }
  });
  return { styles: styles3 };
};

// src/components/GoogleSignInButton/GoogleSignInButton.tsx
var GoogleLogo = () => /* @__PURE__ */ React49.createElement(Svg30, { width: 20, height: 20, viewBox: "0 0 48 48" }, /* @__PURE__ */ React49.createElement(Path30, { fill: "#FFC107", d: "M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" }), /* @__PURE__ */ React49.createElement(Path30, { fill: "#FF3D00", d: "m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" }), /* @__PURE__ */ React49.createElement(Path30, { fill: "#4CAF50", d: "M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" }), /* @__PURE__ */ React49.createElement(Path30, { fill: "#1976D2", d: "M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" }));
var GoogleSignInButton = ({ label, onPress, disabled, submitting }) => {
  const { styles: styles3 } = useGoogleSignInButtonTheme();
  return /* @__PURE__ */ React49.createElement(TouchableOpacity3, { style: styles3.button, onPress, disabled: disabled || submitting, activeOpacity: 0.85 }, /* @__PURE__ */ React49.createElement(View9, { style: styles3.content }, /* @__PURE__ */ React49.createElement(GoogleLogo, null), /* @__PURE__ */ React49.createElement(Text2, { fontSize: "font-size-sm", fontWeight: "medium", color: "font-primary" }, label)));
};

// src/components/SocialAuth/theme/useSocialAuthTheme.ts
import { StyleSheet as StyleSheet9 } from "react-native";
var useSocialAuthTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet9.create({
    container: {
      gap: theme.spacing["spacing-md"]
    },
    dividerRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing["spacing-sm"]
    },
    dividerLine: {
      flex: 1,
      height: theme.borderWidth["border-width-xs"],
      backgroundColor: theme.borderColor["border-secondary"]
    },
    buttonsRow: {
      gap: theme.spacing["spacing-sm"]
    }
  });
  return { styles: styles3, theme };
};

// src/components/SocialAuth/SocialAuth.tsx
var SocialAuth = ({
  onSignIn,
  disabled,
  submitting,
  showApple,
  error,
  dividerLabel,
  googleLabel,
  appleLabel
}) => {
  const { styles: styles3 } = useSocialAuthTheme();
  return /* @__PURE__ */ React50.createElement(View10, { style: styles3.container }, error && /* @__PURE__ */ React50.createElement(Text2, { fontSize: "font-size-xs", color: "font-error" }, error), /* @__PURE__ */ React50.createElement(View10, { style: styles3.dividerRow }, /* @__PURE__ */ React50.createElement(View10, { style: styles3.dividerLine }), /* @__PURE__ */ React50.createElement(Text2, { fontSize: "font-size-xs", color: "font-secondary" }, dividerLabel), /* @__PURE__ */ React50.createElement(View10, { style: styles3.dividerLine })), /* @__PURE__ */ React50.createElement(View10, { style: styles3.buttonsRow }, /* @__PURE__ */ React50.createElement(
    GoogleSignInButton,
    {
      label: googleLabel,
      onPress: () => onSignIn("google"),
      disabled,
      submitting
    }
  ), showApple && /* @__PURE__ */ React50.createElement(
    AppleSignInButton,
    {
      label: appleLabel,
      onPress: () => onSignIn("apple"),
      disabled,
      submitting
    }
  )));
};

// src/components/AuthModeToggle/AuthModeToggle.tsx
import React51 from "react";
import { TouchableOpacity as TouchableOpacity4 } from "react-native";

// src/components/AuthModeToggle/theme/useAuthModeToggleTheme.ts
import { StyleSheet as StyleSheet10 } from "react-native";
var useAuthModeToggleTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet10.create({
    row: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: theme.spacing["spacing-xxxs"]
    }
  });
  return { styles: styles3 };
};

// src/components/AuthModeToggle/AuthModeToggle.tsx
var AuthModeToggle = ({ promptLabel, linkLabel, onPress, disabled }) => {
  const { styles: styles3 } = useAuthModeToggleTheme();
  return /* @__PURE__ */ React51.createElement(
    TouchableOpacity4,
    {
      style: styles3.row,
      onPress,
      disabled,
      accessibilityLabel: linkLabel,
      accessibilityRole: "button"
    },
    /* @__PURE__ */ React51.createElement(Text2, { fontSize: "font-size-sm", color: "font-light" }, promptLabel),
    /* @__PURE__ */ React51.createElement(Text2, { fontSize: "font-size-sm", color: "font-highlight", fontWeight: "semibold" }, linkLabel)
  );
};

// src/components/ErrorBoundary/ErrorBoundary.tsx
import React55 from "react";

// src/components/ErrorBoundary/ErrorScreen.tsx
import React54, { useCallback } from "react";
import { View as View12 } from "react-native";

// src/components/Button/Button.tsx
import React53 from "react";
import { TouchableOpacity as TouchableOpacity5, View as View11 } from "react-native";

// src/components/ActivityIndicator/ActivityIndicator.tsx
import React52 from "react";
import { ActivityIndicator as RNActivityIndicator } from "react-native";
var ActivityIndicator2 = ({ color = "font-primary", size = "small" }) => {
  const { resolvedColor } = useActivityIndicator({ color });
  return /* @__PURE__ */ React52.createElement(RNActivityIndicator, { color: resolvedColor, size });
};

// src/components/Button/theme/useButtonTheme.ts
import { useMemo as useMemo7 } from "react";
var useButtonTheme2 = ({ variant, size, rounded, fullWidth, alignLeft }) => {
  const theme = useBaseTheme();
  const contentContainerStyle = useMemo7(() => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: alignLeft ? "flex-start" : "center",
    borderWidth: theme.borderWidth["border-width-xs"],
    borderRadius: rounded ? theme.cornerRad["corner-rad-full"] : theme.cornerRad["corner-rad-lg"],
    backgroundColor: theme.surfaceColor[surfaceColorMap[variant]],
    borderColor: theme.borderColor[borderColorMap[variant]],
    padding: theme.spacing[spacingMap[variant][size]]
  }), [rounded, variant, size, alignLeft, theme]);
  const contentStyle = useMemo7(() => ({
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing["spacing-xs"]
  }), [theme]);
  const containerStyle = useMemo7(
    () => fullWidth ? { flexGrow: 1, flexShrink: 1 } : {},
    [fullWidth]
  );
  const labelStyle = useMemo7(() => {
    const decoration = textDecorationMap[variant];
    return decoration ? { textDecorationLine: decoration } : void 0;
  }, [variant]);
  return { containerStyle, contentContainerStyle, contentStyle, labelStyle };
};

// src/components/Button/Button.tsx
var Button2 = ({
  label,
  variant = "primary",
  size = "md",
  iconName,
  onPress,
  style,
  textStyle,
  fullWidth,
  alignLeft,
  disabled,
  submitting,
  stale,
  rounded
}) => {
  const { containerStyle, contentContainerStyle, contentStyle, labelStyle } = useButtonTheme2({
    variant,
    size,
    fullWidth,
    rounded,
    alignLeft
  });
  return /* @__PURE__ */ React53.createElement(
    TouchableOpacity5,
    {
      disabled: disabled || stale || submitting,
      onPress,
      style: [containerStyle, style]
    },
    /* @__PURE__ */ React53.createElement(View11, { style: contentContainerStyle }, submitting ? /* @__PURE__ */ React53.createElement(ActivityIndicator2, { color: textColorMap[variant], size: "small" }) : /* @__PURE__ */ React53.createElement(View11, { style: contentStyle }, iconName ? /* @__PURE__ */ React53.createElement(SvgIcon, { name: iconName, size: iconSizeMap[size], color: textColorMap[variant] }) : null, label ? /* @__PURE__ */ React53.createElement(
      Text2,
      {
        fontSize: fontSizeMap[size],
        color: textColorMap[variant],
        fontWeight: fontWeightMap[variant][size],
        style: [labelStyle, textStyle]
      },
      label
    ) : null))
  );
};

// src/components/ErrorBoundary/theme/useErrorScreenTheme.ts
import { StyleSheet as StyleSheet11 } from "react-native";
var useErrorScreenTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet11.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      // topInset and bottomInset are RN-only extended fields — not in BaseTheme.
      // Consumers apply safe-area insets in their own layout wrapper.
      paddingTop: theme.spacing["spacing-xl"],
      paddingBottom: theme.spacing["spacing-xl"],
      paddingHorizontal: theme.spacing["spacing-xl"],
      backgroundColor: theme.surfaceColor["surface-background"]
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing["spacing-md"]
    }
  });
  return { styles: styles3, theme };
};

// src/components/ErrorBoundary/ErrorScreen.tsx
var ErrorScreen = ({ onReset, title, body, retryLabel }) => {
  const { styles: styles3 } = useErrorScreenTheme();
  const handleRetry = useCallback(() => onReset(), [onReset]);
  return /* @__PURE__ */ React54.createElement(View12, { style: styles3.container }, /* @__PURE__ */ React54.createElement(View12, { style: styles3.content }, /* @__PURE__ */ React54.createElement(SvgIcon, { name: "AlertTriangle", size: "icon-size-xxxxxxl", color: "font-error" }), /* @__PURE__ */ React54.createElement(Text2, { fontSize: "font-size-lg", fontWeight: "semibold", color: "font-primary" }, title), /* @__PURE__ */ React54.createElement(Text2, { fontSize: "font-size-sm", color: "font-secondary", textAlign: "center" }, body)), /* @__PURE__ */ React54.createElement(Button2, { label: retryLabel, onPress: handleRetry, variant: "primary", size: "md" }));
};

// src/components/ErrorBoundary/ErrorBoundary.tsx
var ErrorBoundary = class extends React55.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
    this.handleReset = () => {
      this.setState({ hasError: false });
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ React55.createElement(
        ErrorScreen,
        {
          onReset: this.handleReset,
          title: this.props.title,
          body: this.props.body,
          retryLabel: this.props.retryLabel
        }
      );
    }
    return this.props.children;
  }
};

// src/components/AuthRequiredScreen/AuthRequiredScreen.tsx
import React56 from "react";
import { View as View13 } from "react-native";

// src/components/AuthRequiredScreen/theme/useAuthRequiredScreenTheme.ts
import { StyleSheet as StyleSheet12 } from "react-native";
var useAuthRequiredScreenTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet12.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: theme.spacing["spacing-xl"],
      // navBarHeight is an RN-only extended field — not in BaseTheme.
      // Consumers apply nav bar insets in their own layout wrapper.
      paddingBottom: theme.spacing["spacing-xl"],
      backgroundColor: theme.surfaceColor["surface-invert"]
    },
    contentContainer: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing["spacing-md"],
      paddingHorizontal: theme.spacing["spacing-xl"]
    }
  });
  return { styles: styles3, theme };
};

// src/components/AuthRequiredScreen/AuthRequiredScreen.tsx
var AuthRequiredScreen = ({
  subtitle,
  defaultSubtitle,
  title,
  signInLabel,
  onSignIn,
  logo
}) => {
  const { styles: styles3 } = useAuthRequiredScreenTheme();
  return /* @__PURE__ */ React56.createElement(View13, { style: styles3.container }, /* @__PURE__ */ React56.createElement(View13, { style: styles3.contentContainer }, logo ?? null, /* @__PURE__ */ React56.createElement(Text2, { fontSize: "font-size-lg", fontWeight: "semibold" }, title), /* @__PURE__ */ React56.createElement(Text2, { color: "font-light", fontSize: "font-size-sm" }, subtitle ?? defaultSubtitle)), /* @__PURE__ */ React56.createElement(Button2, { label: signInLabel, onPress: onSignIn }));
};

// src/components/Loader/Loader.tsx
import React57 from "react";
import { View as View14 } from "react-native";
import Animated2 from "react-native-reanimated";

// src/components/Loader/hooks/useLoader.ts
import { useCallback as useCallback2, useEffect as useEffect3, useState as useState3 } from "react";
import { Easing, runOnJS, useAnimatedStyle as useAnimatedStyle2, useSharedValue as useSharedValue2, withTiming } from "react-native-reanimated";
var AVATARS = [
  { id: 1, imageName: "avatar-sock" },
  { id: 2, imageName: "avatar-detergent" },
  { id: 3, imageName: "avatar-washing-machine" },
  { id: 4, imageName: "avatar-laundry-basket" },
  { id: 5, imageName: "avatar-pants" }
];
var ENTER_MS = 320;
var HOLD_MS = 680;
var EXIT_MS = 180;
var useLoader = () => {
  const [index, setIndex] = useState3(0);
  const scale = useSharedValue2(0);
  const opacity = useSharedValue2(0);
  const nextAvatar = useCallback2(() => {
    setIndex((i) => (i + 1) % AVATARS.length);
  }, []);
  useEffect3(() => {
    scale.value = 0;
    opacity.value = 0;
    scale.value = withTiming(1, { duration: ENTER_MS, easing: Easing.out(Easing.back(2.2)) });
    opacity.value = withTiming(1, { duration: 200 });
    const timer = setTimeout(() => {
      scale.value = withTiming(0.6, { duration: EXIT_MS });
      opacity.value = withTiming(0, { duration: EXIT_MS }, (finished) => {
        if (finished) runOnJS(nextAvatar)();
      });
    }, ENTER_MS + HOLD_MS);
    return () => clearTimeout(timer);
  }, [index]);
  const animatedStyle = useAnimatedStyle2(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }]
  }));
  return { avatar: AVATARS[index], animatedStyle };
};

// src/components/Loader/theme/useLoaderTheme.ts
import { StyleSheet as StyleSheet13 } from "react-native";
var useLoaderTheme = (size) => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet13.create({
    container: {
      alignItems: "center",
      justifyContent: "center"
    }
  });
  return { styles: styles3, iconSize: theme.iconSize[size] };
};

// src/components/Loader/Loader.tsx
var Loader = ({ size = "icon-size-xxxxxxl" }) => {
  const { avatar, animatedStyle } = useLoader();
  const { styles: styles3, iconSize } = useLoaderTheme(size);
  return /* @__PURE__ */ React57.createElement(View14, { style: styles3.container }, /* @__PURE__ */ React57.createElement(Animated2.View, { style: animatedStyle }, avatar && /* @__PURE__ */ React57.createElement(SvgImage, { name: avatar.imageName, height: iconSize, width: iconSize })));
};

// src/components/BottomSheet/BottomSheet.tsx
import React58 from "react";
import { Modal as Modal2, TouchableOpacity as TouchableOpacity6, View as View15 } from "react-native";
import Animated3 from "react-native-reanimated";

// src/components/BottomSheet/hooks/useBottomSheet.ts
import { useEffect as useEffect4, useState as useState4 } from "react";
import { useWindowDimensions } from "react-native";
import { runOnJS as runOnJS2, useAnimatedStyle as useAnimatedStyle3, useSharedValue as useSharedValue3, withTiming as withTiming2 } from "react-native-reanimated";
var useBottomSheet = (visible) => {
  const { height } = useWindowDimensions();
  const [mounted, setMounted] = useState4(visible);
  const opacity = useSharedValue3(0);
  const translateY = useSharedValue3(height);
  useEffect4(() => {
    if (visible) {
      setMounted(true);
      opacity.value = withTiming2(1, { duration: 200 });
      translateY.value = withTiming2(0, { duration: 280 });
    } else {
      opacity.value = withTiming2(0, { duration: 200 });
      translateY.value = withTiming2(height, { duration: 280 }, (finished) => {
        if (finished) runOnJS2(setMounted)(false);
      });
    }
  }, [visible, height, opacity, translateY]);
  const backdropStyle = useAnimatedStyle3(() => ({ opacity: opacity.value }));
  const sheetStyle = useAnimatedStyle3(() => ({
    transform: [{ translateY: translateY.value }]
  }));
  return { mounted, backdropStyle, sheetStyle };
};

// src/components/BottomSheet/theme/useBottomSheetTheme.ts
import { StyleSheet as StyleSheet14 } from "react-native";
var COLOR_SEMI_TRANSPARENT = "rgba(0, 0, 0, 0.5)";
var COLOR_GREY_100 = "#d5d6d7";
var useBottomSheetTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet14.create({
    container: {
      flex: 1,
      justifyContent: "flex-end"
    },
    backdrop: {
      ...StyleSheet14.absoluteFillObject,
      backgroundColor: COLOR_SEMI_TRANSPARENT
    },
    backdropPress: {
      flex: 1
    },
    sheet: {
      backgroundColor: theme.surfaceColor["surface-primary"],
      borderTopLeftRadius: theme.cornerRad["corner-rad-xxxl"],
      borderTopRightRadius: theme.cornerRad["corner-rad-xxxl"],
      paddingTop: theme.spacing["spacing-sm"],
      paddingBottom: theme.spacing["spacing-xxl"] + theme.spacing["spacing-xs"],
      gap: theme.spacing["spacing-md"]
    },
    handle: {
      width: theme.spacing["spacing-xxxl"],
      height: theme.spacing["spacing-xxs"],
      borderRadius: theme.spacing["spacing-xxs"] / 2,
      backgroundColor: COLOR_GREY_100,
      alignSelf: "center"
    },
    title: {
      textAlign: "center",
      paddingHorizontal: theme.spacing["spacing-lg"]
    }
  });
  return { styles: styles3 };
};

// src/components/BottomSheet/BottomSheet.tsx
var BottomSheet = ({ visible, onClose, title, children }) => {
  const { styles: styles3 } = useBottomSheetTheme();
  const { mounted, backdropStyle, sheetStyle } = useBottomSheet(visible);
  return /* @__PURE__ */ React58.createElement(Modal2, { visible: mounted, transparent: true, animationType: "none", onRequestClose: onClose }, /* @__PURE__ */ React58.createElement(View15, { style: styles3.container }, /* @__PURE__ */ React58.createElement(Animated3.View, { style: [styles3.backdrop, backdropStyle] }, /* @__PURE__ */ React58.createElement(TouchableOpacity6, { style: styles3.backdropPress, activeOpacity: 1, onPress: onClose })), /* @__PURE__ */ React58.createElement(Animated3.View, { style: [styles3.sheet, sheetStyle] }, /* @__PURE__ */ React58.createElement(View15, { style: styles3.handle }), title && /* @__PURE__ */ React58.createElement(Text2, { fontSize: "font-size-md", fontWeight: "semibold", style: styles3.title }, title), children)));
};

// src/components/PillSelector/PillSelector.tsx
import React59 from "react";
import { Pressable as Pressable2, View as View16 } from "react-native";
import Animated4 from "react-native-reanimated";

// src/components/PillSelector/hooks/useAnimatedStyles.ts
import { useCallback as useCallback3, useState as useState5 } from "react";
import { useAnimatedStyle as useAnimatedStyle4, useDerivedValue, useSharedValue as useSharedValue4, withSpring as withSpring2 } from "react-native-reanimated";
var useAnimatedStyles = ({ options, value, onChange }) => {
  const [containerW, setContainerW] = useState5(0);
  const index = Math.max(
    0,
    options.findIndex((o) => o.value === value)
  );
  const segmentW = containerW > 0 ? containerW / options.length : 0;
  const translateX = useSharedValue4(index);
  const progress = useDerivedValue(() => translateX.value);
  const thumbStyle = useAnimatedStyle4(() => ({
    transform: [{ translateX: withSpring2(progress.value * segmentW) }]
  }));
  const segmentWidthStyle = containerW > 0 ? { width: segmentW } : {};
  const onLayout = (e) => {
    setContainerW(e.nativeEvent.layout.width);
    translateX.value = index;
  };
  const handlePress = useCallback3(
    (i) => {
      translateX.value = withSpring2(i);
      if (i !== index) onChange(options[i].value);
    },
    [index, options, onChange, translateX]
  );
  return {
    thumbStyle,
    segmentWidthStyle,
    onLayout,
    handlePress
  };
};

// src/components/PillSelector/theme/usePillSelectorTheme.ts
import { StyleSheet as StyleSheet15 } from "react-native";
var usePillSelectorTheme = ({ backgroundColor, thumbColor }) => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet15.create({
    outerContainer: {
      borderRadius: theme.cornerRad["corner-rad-full"],
      backgroundColor: theme.surfaceColor[backgroundColor],
      padding: theme.spacing["spacing-xxs"],
      borderWidth: theme.borderWidth["border-width-xs"],
      borderColor: theme.borderColor["border-invert"]
    },
    container: {
      position: "relative",
      justifyContent: "center"
    },
    thumb: {
      position: "absolute",
      height: "100%",
      backgroundColor: theme.surfaceColor[thumbColor],
      borderRadius: theme.cornerRad["corner-rad-full"]
    },
    row: {
      flexDirection: "row"
    },
    segment: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: theme.spacing["spacing-sm"]
    }
  });
  return { styles: styles3, theme };
};

// src/components/PillSelector/PillSelector.tsx
var PillSelector = ({
  options,
  value,
  onChange,
  backgroundColor = "surface-primary",
  thumbColor = "surface-invert",
  ...props
}) => {
  const { styles: styles3 } = usePillSelectorTheme({ backgroundColor, thumbColor });
  const { thumbStyle, segmentWidthStyle, onLayout, handlePress } = useAnimatedStyles({
    options,
    value,
    onChange
  });
  return /* @__PURE__ */ React59.createElement(View16, { style: styles3.outerContainer }, /* @__PURE__ */ React59.createElement(View16, { style: styles3.container, onLayout, ...props }, /* @__PURE__ */ React59.createElement(Animated4.View, { style: [styles3.thumb, thumbStyle, segmentWidthStyle] }), /* @__PURE__ */ React59.createElement(View16, { style: styles3.row }, options.map((o, i) => /* @__PURE__ */ React59.createElement(
    Pressable2,
    {
      key: o.value,
      style: [styles3.segment, segmentWidthStyle],
      onPress: () => handlePress(i)
    },
    /* @__PURE__ */ React59.createElement(Text2, { fontSize: "font-size-sm", fontWeight: "medium" }, o.label)
  )))));
};

// src/components/SelectInput/SelectInput.tsx
import React61 from "react";
import { Pressable as Pressable4, View as View17 } from "react-native";
import Animated5 from "react-native-reanimated";

// src/components/SelectInput/components/SelectInputOption/SelectInputOption.tsx
import React60 from "react";
import { Pressable as Pressable3 } from "react-native";

// src/components/SelectInput/components/SelectInputOption/theme/useSelectInputOptionTheme.ts
import { useMemo as useMemo8 } from "react";
import { StyleSheet as StyleSheet16 } from "react-native";
var useSelectInputOptionTheme = (selected, isLast) => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet16.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: theme.spacing["spacing-md"],
      paddingHorizontal: theme.spacing["spacing-lg"],
      borderBottomWidth: isLast ? 0 : theme.borderWidth["border-width-xs"],
      borderBottomColor: theme.borderColor["border-secondary"]
    }
  });
  const containerStyle = useMemo8(
    () => [styles3.container, selected && { backgroundColor: theme.surfaceColor["surface-button"] }],
    [styles3.container, selected, theme]
  );
  return { containerStyle };
};

// src/components/SelectInput/components/SelectInputOption/SelectInputOption.tsx
var SelectInputOption = ({ option, selected, isLast, onPress }) => {
  const { containerStyle } = useSelectInputOptionTheme(selected, isLast);
  return /* @__PURE__ */ React60.createElement(Pressable3, { style: containerStyle, onPress }, /* @__PURE__ */ React60.createElement(
    Text2,
    {
      fontSize: "font-size-sm",
      color: selected ? "font-primary" : "font-secondary",
      fontWeight: selected ? "semibold" : "regular"
    },
    option.label
  ), selected && /* @__PURE__ */ React60.createElement(SvgIcon, { name: "Check", size: "icon-size-sm", color: "font-highlight" }));
};

// src/components/SelectInput/hooks/useSelectInput.ts
import { useCallback as useCallback4, useEffect as useEffect5, useState as useState6 } from "react";
import { useAnimatedStyle as useAnimatedStyle5, useSharedValue as useSharedValue5, withTiming as withTiming3 } from "react-native-reanimated";
var useSelectInput = ({ value, options, onChange }) => {
  const [modalVisible, setModalVisible] = useState6(false);
  const selectedLabel = options.find((o) => o.value === value)?.label;
  const showModal = useCallback4(() => setModalVisible(true), []);
  const hideModal = useCallback4(() => setModalVisible(false), []);
  const select = useCallback4(
    (val) => {
      onChange(val);
      setModalVisible(false);
    },
    [onChange]
  );
  const rotation = useSharedValue5(0);
  useEffect5(() => {
    rotation.value = withTiming3(modalVisible ? 90 : 0, { duration: 180 });
  }, [modalVisible, rotation]);
  const chevronStyle = useAnimatedStyle5(() => ({
    transform: [{ rotate: `${rotation.value}deg` }]
  }));
  return { modalVisible, showModal, hideModal, select, selectedLabel, chevronStyle };
};

// src/components/SelectInput/theme/useSelectInputTheme.ts
import { StyleSheet as StyleSheet17 } from "react-native";
var useSelectInputTheme = ({ error = false, disabled = false } = {}) => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet17.create({
    container: {
      width: "100%",
      gap: theme.spacing["spacing-xxs"]
    },
    trigger: {
      width: "100%",
      height: theme.spacing["spacing-xxxxl"],
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.surfaceColor["surface-primary"],
      borderWidth: theme.borderWidth["border-width-xs"],
      borderRadius: theme.cornerRad["corner-rad-md"],
      borderColor: error ? theme.borderColor["border-error"] : theme.borderColor["border-primary"],
      paddingHorizontal: theme.spacing["spacing-sm"],
      opacity: disabled ? 0.5 : 1
    },
    footer: {
      flexDirection: "row"
    },
    optionsList: {
      overflow: "hidden"
    }
  });
  return { styles: styles3, theme };
};

// src/components/SelectInput/SelectInput.tsx
var SelectInput = ({
  label,
  placeholder,
  value,
  options,
  onChange,
  error,
  disabled
}) => {
  const { styles: styles3 } = useSelectInputTheme({ error: !!error, disabled });
  const { modalVisible, showModal, hideModal, select, selectedLabel, chevronStyle } = useSelectInput({
    value,
    options,
    onChange
  });
  return /* @__PURE__ */ React61.createElement(View17, { style: styles3.container }, label && /* @__PURE__ */ React61.createElement(Text2, { fontSize: "font-size-sm", fontWeight: "semibold" }, label), /* @__PURE__ */ React61.createElement(Pressable4, { style: styles3.trigger, onPress: disabled ? void 0 : showModal }, /* @__PURE__ */ React61.createElement(
    Text2,
    {
      fontSize: "font-size-md",
      color: selectedLabel ? "font-primary" : "font-placeholder"
    },
    selectedLabel ?? placeholder ?? ""
  ), /* @__PURE__ */ React61.createElement(Animated5.View, { style: chevronStyle }, /* @__PURE__ */ React61.createElement(SvgIcon, { name: "ChevronRight", size: "icon-size-md", color: "font-secondary" }))), /* @__PURE__ */ React61.createElement(BottomSheet, { visible: modalVisible, onClose: hideModal, title: label }, /* @__PURE__ */ React61.createElement(View17, { style: styles3.optionsList }, options.map((option, idx) => /* @__PURE__ */ React61.createElement(
    SelectInputOption,
    {
      key: option.value,
      option,
      selected: value === option.value,
      isLast: idx === options.length - 1,
      onPress: () => select(option.value)
    }
  )))), error && /* @__PURE__ */ React61.createElement(View17, { style: styles3.footer }, /* @__PURE__ */ React61.createElement(Text2, { fontSize: "font-size-xs", color: "font-error" }, error)));
};

// src/components/ScreenHeader/ScreenHeader.tsx
import React63 from "react";
import { View as View18 } from "react-native";
import { useNavigation } from "@react-navigation/native";

// src/components/IconButton/IconButton.tsx
import React62 from "react";
import { TouchableOpacity as TouchableOpacity7 } from "react-native";

// src/components/IconButton/theme/useIconButtonTheme.ts
import { useMemo as useMemo9 } from "react";
var useIconButtonTheme = ({ iconSize, surfaceColor }) => {
  const theme = useBaseTheme();
  const containerStyle = useMemo9(() => {
    const size = theme.iconSize[iconSize] + 16;
    return {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: theme.surfaceColor[surfaceColor],
      alignItems: "center",
      justifyContent: "center",
      ...theme.shadowCard
    };
  }, [iconSize, surfaceColor, theme]);
  return { containerStyle };
};

// src/components/IconButton/IconButton.tsx
var IconButton = ({
  iconName,
  iconSize = "icon-size-xl",
  iconColor = "font-primary",
  surfaceColor = "surface-button",
  style,
  ...props
}) => {
  const { containerStyle } = useIconButtonTheme({ iconSize, surfaceColor });
  return /* @__PURE__ */ React62.createElement(TouchableOpacity7, { activeOpacity: 0.8, ...props, style: [containerStyle, style] }, /* @__PURE__ */ React62.createElement(SvgIcon, { name: iconName, size: iconSize, color: iconColor }));
};

// src/components/ScreenHeader/theme/useScreenHeaderTheme.ts
import { StyleSheet as StyleSheet18 } from "react-native";
var useScreenHeaderTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet18.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: theme.spacing["spacing-sm"],
      paddingHorizontal: theme.spacing["spacing-md"],
      gap: theme.spacing["spacing-sm"],
      backgroundColor: theme.surfaceColor["surface-primary"]
    },
    titleGroup: {
      flex: 1,
      gap: theme.spacing["spacing-xxxs"]
    }
  });
  return { styles: styles3, theme };
};

// src/components/ScreenHeader/ScreenHeader.tsx
var ScreenHeader = ({
  title,
  subtitle,
  hideBack,
  onBack,
  backAccessibilityLabel = "Back"
}) => {
  const navigation = useNavigation();
  const { styles: styles3 } = useScreenHeaderTheme();
  const handleBack = onBack ?? (() => navigation.goBack());
  return /* @__PURE__ */ React63.createElement(View18, { style: styles3.container }, !hideBack ? /* @__PURE__ */ React63.createElement(
    IconButton,
    {
      iconName: "ChevronLeft",
      iconSize: "icon-size-lg",
      onPress: handleBack,
      accessibilityLabel: backAccessibilityLabel
    }
  ) : null, /* @__PURE__ */ React63.createElement(View18, { style: styles3.titleGroup }, /* @__PURE__ */ React63.createElement(Text2, { fontSize: "font-size-xxl", fontWeight: "bold" }, title), subtitle ? /* @__PURE__ */ React63.createElement(Text2, { fontSize: "font-size-sm", color: "font-secondary" }, subtitle) : null));
};

// src/components/SafeScreenHeader/SafeScreenHeader.tsx
import React64 from "react";
import { View as View19 } from "react-native";

// src/components/SafeScreenHeader/theme/useSafeScreenHeaderTheme.ts
import { StyleSheet as StyleSheet19 } from "react-native";
var useSafeScreenHeaderTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet19.create({
    wrapper: {
      // topInset is a luvo-mobile extended theme field; consuming apps should apply
      // SafeAreaView or their own inset padding above this component.
      paddingTop: theme.spacing["spacing-xl"],
      backgroundColor: theme.surfaceColor["surface-primary"]
    }
  });
  return { styles: styles3 };
};

// src/components/SafeScreenHeader/SafeScreenHeader.tsx
var SafeScreenHeader = ({
  title,
  subtitle,
  hideBack,
  onBack,
  backAccessibilityLabel
}) => {
  const { styles: styles3 } = useSafeScreenHeaderTheme();
  return /* @__PURE__ */ React64.createElement(View19, { style: styles3.wrapper }, /* @__PURE__ */ React64.createElement(
    ScreenHeader,
    {
      title,
      subtitle,
      hideBack,
      onBack,
      backAccessibilityLabel
    }
  ));
};

// src/components/SettingsMenu/SettingsMenu.tsx
import React66 from "react";
import { View as View20 } from "react-native";

// src/components/SettingsMenu/components/SettingsMenuItem/SettingsMenuItem.tsx
import React65 from "react";
import { TouchableOpacity as TouchableOpacity8 } from "react-native";

// src/components/SettingsMenu/components/SettingsMenuItem/theme/useSettingsMenuItemTheme.ts
import { StyleSheet as StyleSheet20 } from "react-native";
var useSettingsMenuItemTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet20.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing["spacing-md"],
      paddingVertical: theme.spacing["spacing-xs"],
      paddingHorizontal: theme.spacing["spacing-sm"]
    },
    label: {
      flex: 1
    }
  });
  return { styles: styles3, theme };
};

// src/components/SettingsMenu/components/SettingsMenuItem/SettingsMenuItem.tsx
var SettingsMenuItem = ({ label, iconName, onPress }) => {
  const { styles: styles3 } = useSettingsMenuItemTheme();
  return /* @__PURE__ */ React65.createElement(TouchableOpacity8, { style: styles3.container, onPress, activeOpacity: 0.6 }, /* @__PURE__ */ React65.createElement(SvgIcon, { name: iconName, size: "icon-size-xxl", color: "font-primary" }), /* @__PURE__ */ React65.createElement(Text2, { fontSize: "font-size-lg", fontWeight: "medium", style: styles3.label }, label), /* @__PURE__ */ React65.createElement(SvgIcon, { name: "ChevronRight", size: "icon-size-lg", color: "font-primary" }));
};

// src/components/SettingsMenu/theme/useSettingsMenuTheme.ts
import { StyleSheet as StyleSheet21 } from "react-native";
var useSettingsMenuTheme = () => {
  const theme = useBaseTheme();
  const styles3 = StyleSheet21.create({
    container: {
      gap: theme.spacing["spacing-md"]
    }
  });
  return { styles: styles3, theme };
};

// src/components/SettingsMenu/SettingsMenu.tsx
var SettingsMenu = ({ items }) => {
  const { styles: styles3 } = useSettingsMenuTheme();
  return /* @__PURE__ */ React66.createElement(View20, { style: styles3.container }, items.map((item) => /* @__PURE__ */ React66.createElement(
    SettingsMenuItem,
    {
      key: item.label,
      label: item.label,
      iconName: item.iconName,
      onPress: item.onPress
    }
  )));
};

// src/components/TagButton/TagButton.tsx
import React67 from "react";
import { TouchableOpacity as TouchableOpacity9 } from "react-native";
var TagButton = ({
  onPress,
  loading = false,
  disabled = false,
  iconName,
  ...tagProps
}) => {
  return /* @__PURE__ */ React67.createElement(TouchableOpacity9, { onPress, disabled: disabled || loading }, /* @__PURE__ */ React67.createElement(
    Tag,
    {
      ...tagProps,
      disabled,
      iconName: loading ? void 0 : iconName
    },
    loading ? /* @__PURE__ */ React67.createElement(ActivityIndicator2, { size: "small", color: tagProps.color }) : tagProps.children
  ));
};

// src/components/LocationLabel/LocationLabel.tsx
import React68 from "react";
var LocationLabel = ({ location, numberOfLines = 1, style }) => {
  return /* @__PURE__ */ React68.createElement(
    Label,
    {
      iconName: "MapPin",
      iconSize: "icon-size-sm",
      color: "font-placeholder",
      fontSize: "font-size-sm",
      numberOfLines,
      style
    },
    location
  );
};

// src/components/LaundryMapMarker/LaundryMapMarker.web.tsx
var LaundryMapMarker = (_props) => null;

// src/components/MachineCard/MachineCard.web.tsx
var MachineCard = (_props) => null;

// src/theme/hooks/useTheme.web.ts
var useTheme2 = () => {
  const base = useBaseTheme();
  const isDark = base.surfaceColor["surface-primary"] === DarkThemeConstants.surfaceColor["surface-primary"];
  const constants = isDark ? DarkThemeConstants : DefaultThemeConstants;
  return {
    ...base,
    navBarHeight: constants.navBarHeight,
    letterSpacing: constants.letterSpacing,
    zIndex: constants.zIndex,
    navigation: constants.navigation,
    topInset: 0,
    bottomInset: 0
  };
};
export {
  ActionModal,
  ActivityIndicator,
  AppleSignInButton,
  AuthModeToggle,
  AuthRequiredScreen,
  AvailabilityTag,
  BottomSheet,
  Button,
  ConcurrencyTag,
  DarkThemeConstants as DarkTheme,
  DefaultThemeConstants as DefaultTheme,
  ErrorBoundary,
  GoogleSignInButton,
  Icon,
  IconButton,
  Label,
  LaundryMapMarker,
  Loader,
  LocationLabel,
  MachineCard,
  PillSelector,
  SafeScreenHeader,
  ScreenHeader,
  SelectInput,
  Separator,
  SettingsMenu,
  SocialAuth,
  StepIndicator,
  SvgIcon,
  SvgImage,
  Switch,
  Tag,
  TagButton,
  Text,
  TextInput,
  ThemeContext,
  ThemeProvider,
  TimeTag,
  darkTheme,
  defaultTheme,
  useBaseTheme,
  useTheme2 as useTheme
};
//# sourceMappingURL=index.web.mjs.map