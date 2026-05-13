"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ActionModal: () => ActionModal,
  ActivityIndicator: () => ActivityIndicator,
  AppleSignInButton: () => AppleSignInButton,
  AuthModeToggle: () => AuthModeToggle,
  AuthRequiredScreen: () => AuthRequiredScreen,
  AvailabilityTag: () => AvailabilityTag,
  BottomSheet: () => BottomSheet,
  Button: () => Button,
  Colors: () => Colors,
  ConcurrencyTag: () => ConcurrencyTag,
  ErrorBoundary: () => ErrorBoundary,
  GoogleSignInButton: () => GoogleSignInButton,
  Icon: () => Icon,
  IconButton: () => IconButton,
  Label: () => Label,
  LoadErrorState: () => LoadErrorState,
  Loader: () => Loader,
  LocationLabel: () => LocationLabel,
  PillSelector: () => PillSelector,
  SafeScreenHeader: () => SafeScreenHeader,
  ScreenHeader: () => ScreenHeader,
  SelectInput: () => SelectInput,
  Separator: () => Separator,
  SettingsMenu: () => SettingsMenu,
  SocialAuth: () => SocialAuth,
  StepIndicator: () => StepIndicator,
  SvgIcon: () => SvgIcon,
  SvgImage: () => SvgImage,
  Switch: () => Switch,
  Tag: () => Tag,
  TagButton: () => TagButton,
  Text: () => Text,
  TextInput: () => TextInput,
  ThemeContext: () => ThemeContext,
  ThemeProvider: () => ThemeProvider,
  TimeTag: () => TimeTag,
  darkTheme: () => darkTheme,
  defaultTheme: () => defaultTheme,
  useBaseTheme: () => useBaseTheme
});
module.exports = __toCommonJS(src_exports);

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
var import_react = require("react");
var ThemeContext = (0, import_react.createContext)(defaultTheme);

// src/theme/ThemeProvider.tsx
var import_react2 = __toESM(require("react"));
var ThemeProvider = ({ theme, children }) => {
  return /* @__PURE__ */ import_react2.default.createElement(ThemeContext.Provider, { value: theme }, children);
};

// src/theme/useBaseTheme.ts
var import_react3 = require("react");
var useBaseTheme = () => (0, import_react3.useContext)(ThemeContext);

// src/components/Text/Text.tsx
var import_react5 = __toESM(require("react"));
var import_react_native = require("react-native");

// src/components/Text/theme/useTextTheme.ts
var import_react4 = require("react");

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

// src/components/Text/theme/useTextTheme.ts
var useTextTheme = (params) => {
  const theme = useBaseTheme();
  const { rnFontFamily } = useText(params);
  const text = (0, import_react4.useMemo)(
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
var Text = ({
  children,
  fontSize = "font-size-md",
  color = "font-primary",
  fontWeight = "regular",
  lineHeight,
  textAlign,
  style,
  numberOfLines
}) => {
  const { styles: styles3 } = useTextTheme({ fontSize, color, fontWeight, lineHeight, textAlign });
  return /* @__PURE__ */ import_react5.default.createElement(import_react_native.Text, { style: [styles3.text, style], numberOfLines }, children);
};

// src/components/Button/Button.tsx
var import_react8 = __toESM(require("react"));
var import_react_native3 = require("react-native");

// src/components/ActivityIndicator/ActivityIndicator.tsx
var import_react6 = __toESM(require("react"));
var import_react_native2 = require("react-native");

// src/components/ActivityIndicator/hooks/useActivityIndicator.ts
var useActivityIndicator = ({ color }) => {
  const theme = useBaseTheme();
  const resolvedColor = color in theme.fontColor ? theme.fontColor[color] : color;
  return { resolvedColor };
};

// src/components/ActivityIndicator/ActivityIndicator.tsx
var ActivityIndicator = ({ color = "font-primary", size = "small" }) => {
  const { resolvedColor } = useActivityIndicator({ color });
  return /* @__PURE__ */ import_react6.default.createElement(import_react_native2.ActivityIndicator, { color: resolvedColor, size });
};

// src/components/Button/theme/useButtonTheme.ts
var import_react7 = require("react");

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
var textDecorationMap = {
  link: "underline"
};

// src/components/Button/theme/useButtonTheme.ts
var useButtonTheme = ({ variant, size, rounded, fullWidth, alignLeft }) => {
  const theme = useBaseTheme();
  const contentContainerStyle = (0, import_react7.useMemo)(() => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: alignLeft ? "flex-start" : "center",
    borderWidth: 1,
    borderRadius: rounded ? theme.cornerRad["corner-rad-full"] : theme.cornerRad["corner-rad-lg"],
    backgroundColor: theme.surfaceColor[surfaceColorMap[variant]],
    borderColor: theme.borderColor[borderColorMap[variant]],
    padding: theme.spacing[spacingMap[variant][size]]
  }), [rounded, variant, size, alignLeft, theme]);
  const contentStyle = (0, import_react7.useMemo)(() => ({
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing["spacing-xs"]
  }), [theme]);
  const containerStyle = (0, import_react7.useMemo)(
    () => fullWidth ? { flexGrow: 1, flexShrink: 1 } : {},
    [fullWidth]
  );
  const labelStyle = (0, import_react7.useMemo)(() => {
    const decoration = textDecorationMap[variant];
    return decoration ? { textDecorationLine: decoration } : void 0;
  }, [variant]);
  return { containerStyle, contentContainerStyle, contentStyle, labelStyle };
};

// src/components/Button/Button.tsx
var Button = ({
  label,
  variant = "primary",
  size = "md",
  onPress,
  disabled,
  submitting,
  fullWidth,
  rounded
}) => {
  const { containerStyle, contentContainerStyle, contentStyle, labelStyle } = useButtonTheme({
    variant,
    size,
    fullWidth,
    rounded
  });
  return /* @__PURE__ */ import_react8.default.createElement(
    import_react_native3.TouchableOpacity,
    {
      disabled: disabled ?? submitting,
      onPress,
      style: containerStyle
    },
    /* @__PURE__ */ import_react8.default.createElement(import_react_native3.View, { style: contentContainerStyle }, submitting ? /* @__PURE__ */ import_react8.default.createElement(ActivityIndicator, { color: textColorMap[variant], size: "small" }) : /* @__PURE__ */ import_react8.default.createElement(import_react_native3.View, { style: contentStyle }, label ? /* @__PURE__ */ import_react8.default.createElement(
      Text,
      {
        fontSize: fontSizeMap[size],
        color: textColorMap[variant],
        fontWeight: fontWeightMap[variant][size],
        style: labelStyle
      },
      label
    ) : null))
  );
};

// src/components/Separator/Separator.tsx
var import_react10 = __toESM(require("react"));
var import_react_native4 = require("react-native");

// src/components/Separator/theme/useSeparatorTheme.ts
var import_react9 = require("react");
var useSeparatorTheme = (direction) => {
  const theme = useBaseTheme();
  const style = (0, import_react9.useMemo)(
    () => direction === "vertical" ? {
      width: theme.spacing["spacing-sm"]
    } : {
      height: theme.spacing["spacing-sm"]
    },
    [direction, theme]
  );
  return { style };
};

// src/components/Separator/Separator.tsx
var Separator = (0, import_react10.memo)(({ direction = "horizontal" }) => {
  const { style } = useSeparatorTheme(direction);
  return /* @__PURE__ */ import_react10.default.createElement(import_react_native4.View, { style });
});

// src/components/TextInput/TextInput.tsx
var import_react13 = __toESM(require("react"));
var import_react_native5 = require("react-native");

// src/components/TextInput/hooks/useTextInput.ts
var import_react11 = require("react");
var useTextInput = (secureTextEntry) => {
  const [isVisible, setIsVisible] = (0, import_react11.useState)(false);
  const handleToggleVisibility = () => setIsVisible((v) => !v);
  return {
    isVisible,
    handleToggleVisibility,
    // When secureTextEntry is true, visibility toggle inverts it.
    // When secureTextEntry is false/undefined, propagate as-is.
    resolvedSecureTextEntry: secureTextEntry ? !isVisible : secureTextEntry
  };
};

// src/components/TextInput/theme/useTextInputTheme.ts
var import_react12 = require("react");
var useTextInputTheme = ({
  error = false,
  color = "font-primary",
  placeholderColor = "font-placeholder"
} = {}) => {
  const theme = useBaseTheme();
  const containerStyle = (0, import_react12.useMemo)(
    () => ({
      width: "100%",
      gap: theme.spacing["spacing-xxs"]
    }),
    [theme]
  );
  const inputWrapperStyle = (0, import_react12.useMemo)(
    () => ({
      flexDirection: "row",
      alignItems: "center",
      minHeight: theme.spacing["spacing-xxxxl"],
      borderWidth: 1,
      borderRadius: theme.cornerRad["corner-rad-md"],
      backgroundColor: theme.surfaceColor["surface-primary"],
      borderColor: error ? theme.borderColor["border-error"] : theme.borderColor["border-primary"],
      paddingHorizontal: theme.spacing["spacing-sm"]
    }),
    [error, theme]
  );
  const inputStyle = (0, import_react12.useMemo)(
    () => ({
      flex: 1,
      fontFamily: POPPINS_FAMILY.regular,
      fontSize: theme.fontSize["font-size-md"],
      color: theme.fontColor[color]
    }),
    [color, theme]
  );
  const footerStyle = { flexDirection: "row", justifyContent: "flex-end" };
  const errorTextStyle = { flex: 1 };
  const styles3 = {
    container: containerStyle,
    inputWrapper: inputWrapperStyle,
    input: inputStyle,
    footer: footerStyle,
    errorText: errorTextStyle
  };
  return { styles: styles3, placeholderTextColor: theme.fontColor[placeholderColor] };
};

// src/components/TextInput/TextInput.tsx
var TextInput = ({
  label,
  error,
  color,
  placeholderColor,
  value,
  secureTextEntry,
  editable,
  maxLength,
  onChangeText,
  placeholder
}) => {
  const { styles: styles3, placeholderTextColor } = useTextInputTheme({ error: !!error, color, placeholderColor });
  const { resolvedSecureTextEntry } = useTextInput(secureTextEntry);
  const remaining = maxLength !== void 0 ? maxLength - (value?.length ?? 0) : void 0;
  return /* @__PURE__ */ import_react13.default.createElement(import_react_native5.View, { style: styles3.container }, label ? /* @__PURE__ */ import_react13.default.createElement(Text, { fontSize: "font-size-sm", fontWeight: "semibold" }, label) : null, /* @__PURE__ */ import_react13.default.createElement(import_react_native5.View, { style: styles3.inputWrapper }, /* @__PURE__ */ import_react13.default.createElement(
    import_react_native5.TextInput,
    {
      style: styles3.input,
      placeholderTextColor,
      value,
      onChangeText,
      placeholder,
      secureTextEntry: resolvedSecureTextEntry,
      editable,
      maxLength
    }
  )), /* @__PURE__ */ import_react13.default.createElement(import_react_native5.View, { style: styles3.footer }, error ? /* @__PURE__ */ import_react13.default.createElement(Text, { fontSize: "font-size-xs", color: "font-error", style: styles3.errorText }, error) : null, remaining !== void 0 ? /* @__PURE__ */ import_react13.default.createElement(Text, { fontSize: "font-size-xs", color: "font-placeholder" }, remaining) : null));
};

// src/components/Switch/Switch.tsx
var import_react16 = __toESM(require("react"));
var import_react_native7 = require("react-native");

// src/components/Switch/hooks/useSwitchAnimation.ts
var import_react14 = require("react");
var import_react_native6 = require("react-native");
var useSwitchAnimation = (value, thumbTravel) => {
  const translateX = (0, import_react14.useRef)(new import_react_native6.Animated.Value(value ? thumbTravel : 0)).current;
  const trackOpacity = (0, import_react14.useRef)(new import_react_native6.Animated.Value(value ? 1 : 0)).current;
  (0, import_react14.useEffect)(() => {
    import_react_native6.Animated.parallel([
      import_react_native6.Animated.spring(translateX, {
        toValue: value ? thumbTravel : 0,
        useNativeDriver: true,
        bounciness: 0
      }),
      import_react_native6.Animated.timing(trackOpacity, {
        toValue: value ? 1 : 0,
        duration: 200,
        // trackOpacity drives backgroundColor which is not supported by the native driver
        useNativeDriver: false
      })
    ]).start();
  }, [value, translateX, trackOpacity, thumbTravel]);
  return { translateX, trackOpacity };
};

// src/components/Switch/theme/useSwitchTheme.ts
var import_react15 = require("react");
var TRACK_WIDTH = 48;
var TRACK_HEIGHT = 28;
var THUMB_SIZE = 22;
var THUMB_MARGIN = 3;
var THUMB_TRAVEL = TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2;
var useSwitchTheme = (disabled) => {
  const theme = useBaseTheme();
  const trackOverlayStyle = (0, import_react15.useMemo)(
    () => ({
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: theme.surfaceColor["surface-invert"]
    }),
    [theme]
  );
  const thumbStyle = (0, import_react15.useMemo)(
    () => ({
      width: THUMB_SIZE,
      height: THUMB_SIZE,
      borderRadius: theme.cornerRad["corner-rad-full"],
      backgroundColor: theme.borderColor["border-invert"]
    }),
    [theme]
  );
  const trackStyle = (0, import_react15.useMemo)(
    () => ({
      width: TRACK_WIDTH,
      height: TRACK_HEIGHT,
      borderRadius: theme.cornerRad["corner-rad-full"],
      backgroundColor: theme.surfaceColor["surface-background"],
      justifyContent: "center",
      padding: THUMB_MARGIN,
      overflow: "hidden",
      opacity: disabled ? 0.4 : 1
    }),
    [disabled, theme]
  );
  return { trackOverlayStyle, thumbStyle, trackStyle, thumbTravel: THUMB_TRAVEL };
};

// src/components/Switch/Switch.tsx
var Switch = ({ value, onValueChange, disabled = false }) => {
  const { trackOverlayStyle, thumbStyle, trackStyle, thumbTravel } = useSwitchTheme(disabled);
  const { translateX, trackOpacity } = useSwitchAnimation(value, thumbTravel);
  return /* @__PURE__ */ import_react16.default.createElement(
    import_react_native7.Pressable,
    {
      onPress: () => !disabled && onValueChange(!value),
      style: trackStyle,
      accessibilityRole: "switch",
      accessibilityState: { checked: value, disabled }
    },
    /* @__PURE__ */ import_react16.default.createElement(import_react_native7.Animated.View, { style: [trackOverlayStyle, { opacity: trackOpacity }] }),
    /* @__PURE__ */ import_react16.default.createElement(import_react_native7.Animated.View, { style: [thumbStyle, { transform: [{ translateX }] }] })
  );
};

// src/components/SvgIcon/SvgIcon.tsx
var import_react17 = __toESM(require("react"));
var import_react_native8 = require("react-native");

// src/components/SvgIcon/icons/AlertCircle.tsx
var React9 = __toESM(require("react"));
var import_react_native_svg = __toESM(require("react-native-svg"));
var SvgAlertCircle = (props) => /* @__PURE__ */ React9.createElement(
  import_react_native_svg.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React9.createElement(
    import_react_native_svg.Path,
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
var React10 = __toESM(require("react"));
var import_react_native_svg2 = __toESM(require("react-native-svg"));
var SvgCheck = (props) => /* @__PURE__ */ React10.createElement(
  import_react_native_svg2.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React10.createElement(
    import_react_native_svg2.Path,
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
var React11 = __toESM(require("react"));
var import_react_native_svg3 = __toESM(require("react-native-svg"));
var SvgAlertTriangle = (props) => /* @__PURE__ */ React11.createElement(
  import_react_native_svg3.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React11.createElement(
    import_react_native_svg3.G,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      clipPath: "url(#alert-triangle_svg__a)"
    },
    /* @__PURE__ */ React11.createElement(import_react_native_svg3.Path, { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0M12 9v4M12 17h.01" })
  ),
  /* @__PURE__ */ React11.createElement(import_react_native_svg3.Defs, null, /* @__PURE__ */ React11.createElement(import_react_native_svg3.ClipPath, { id: "alert-triangle_svg__a" }, /* @__PURE__ */ React11.createElement(import_react_native_svg3.Path, { fill: "#fff", d: "M0 0h24v24H0z" })))
);
var AlertTriangle_default = SvgAlertTriangle;

// src/components/SvgIcon/icons/ArrowLeftCircle.tsx
var React12 = __toESM(require("react"));
var import_react_native_svg4 = __toESM(require("react-native-svg"));
var SvgArrowLeftCircle = (props) => /* @__PURE__ */ React12.createElement(
  import_react_native_svg4.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React12.createElement(
    import_react_native_svg4.Path,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    }
  ),
  /* @__PURE__ */ React12.createElement(
    import_react_native_svg4.Path,
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
var React13 = __toESM(require("react"));
var import_react_native_svg5 = __toESM(require("react-native-svg"));
var SvgArrowRightCircle = (props) => /* @__PURE__ */ React13.createElement(
  import_react_native_svg5.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React13.createElement(
    import_react_native_svg5.Path,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    }
  ),
  /* @__PURE__ */ React13.createElement(
    import_react_native_svg5.Path,
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
var React14 = __toESM(require("react"));
var import_react_native_svg6 = __toESM(require("react-native-svg"));
var SvgBell = (props) => /* @__PURE__ */ React14.createElement(
  import_react_native_svg6.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React14.createElement(
    import_react_native_svg6.Path,
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
var React15 = __toESM(require("react"));
var import_react_native_svg7 = __toESM(require("react-native-svg"));
var SvgChevronLeft = (props) => /* @__PURE__ */ React15.createElement(
  import_react_native_svg7.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React15.createElement(
    import_react_native_svg7.Path,
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
var React16 = __toESM(require("react"));
var import_react_native_svg8 = __toESM(require("react-native-svg"));
var SvgChevronRight = (props) => /* @__PURE__ */ React16.createElement(
  import_react_native_svg8.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React16.createElement(
    import_react_native_svg8.Path,
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
var React17 = __toESM(require("react"));
var import_react_native_svg9 = __toESM(require("react-native-svg"));
var SvgCross = (props) => /* @__PURE__ */ React17.createElement(
  import_react_native_svg9.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React17.createElement(
    import_react_native_svg9.Path,
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
var React18 = __toESM(require("react"));
var import_react_native_svg10 = __toESM(require("react-native-svg"));
var SvgClipboard = (props) => /* @__PURE__ */ React18.createElement(
  import_react_native_svg10.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React18.createElement(
    import_react_native_svg10.Path,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }
  ),
  /* @__PURE__ */ React18.createElement(
    import_react_native_svg10.Path,
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
var React19 = __toESM(require("react"));
var import_react_native_svg11 = __toESM(require("react-native-svg"));
var SvgClock = (props) => /* @__PURE__ */ React19.createElement(
  import_react_native_svg11.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React19.createElement(
    import_react_native_svg11.Path,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    }
  ),
  /* @__PURE__ */ React19.createElement(
    import_react_native_svg11.Path,
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
var React20 = __toESM(require("react"));
var import_react_native_svg12 = __toESM(require("react-native-svg"));
var SvgCreditCard = (props) => /* @__PURE__ */ React20.createElement(
  import_react_native_svg12.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React20.createElement(
    import_react_native_svg12.Path,
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
var React21 = __toESM(require("react"));
var import_react_native_svg13 = __toESM(require("react-native-svg"));
var SvgDroplet = (props) => /* @__PURE__ */ React21.createElement(
  import_react_native_svg13.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React21.createElement(
    import_react_native_svg13.Path,
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
var React22 = __toESM(require("react"));
var import_react_native_svg14 = __toESM(require("react-native-svg"));
var SvgEdit = (props) => /* @__PURE__ */ React22.createElement(
  import_react_native_svg14.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React22.createElement(
    import_react_native_svg14.Path,
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
var React23 = __toESM(require("react"));
var import_react_native_svg15 = __toESM(require("react-native-svg"));
var SvgGift = (props) => /* @__PURE__ */ React23.createElement(
  import_react_native_svg15.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React23.createElement(
    import_react_native_svg15.Path,
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
var React24 = __toESM(require("react"));
var import_react_native_svg16 = __toESM(require("react-native-svg"));
var SvgInfo = (props) => /* @__PURE__ */ React24.createElement(
  import_react_native_svg16.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React24.createElement(
    import_react_native_svg16.Path,
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
var React25 = __toESM(require("react"));
var import_react_native_svg17 = __toESM(require("react-native-svg"));
var SvgLogOut = (props) => /* @__PURE__ */ React25.createElement(
  import_react_native_svg17.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React25.createElement(
    import_react_native_svg17.Path,
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
var React26 = __toESM(require("react"));
var import_react_native_svg18 = __toESM(require("react-native-svg"));
var SvgLuvoCircle = (props) => /* @__PURE__ */ React26.createElement(
  import_react_native_svg18.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 37 39",
    ...props
  },
  /* @__PURE__ */ React26.createElement(
    import_react_native_svg18.Path,
    {
      fill: "#CAABD5",
      d: "M11.064 4.635q.117-.248.236-.494c.473-.976.992-2.127.49-3.089-.573-1.1-2.12-1.214-3.32-.899-2.126.559-3.306 1.929-4.388 3.756-1.203 2.032-2.226 4.177-2.95 6.427-.598 1.859-.988 3.79-1.105 5.74-.18 2.966.49 5.965 3.822 6.648 1.196.245 2.44.128 3.638-.106 4.73-.919 9.295-3.497 12.682-6.9.318-.321.637-.665.78-1.093.266-.8-.18-1.713-.879-2.186-.697-.473-1.585-.577-2.426-.527-2.255.134-4.212 1.29-6.093 2.435-.731.446-1.937 1.492-2.814 1.535-.893.043-.674-1.848-.557-2.442a38.6 38.6 0 0 1 2.884-8.806zM25.574 2.706a2.3 2.3 0 0 0-.38-.351c-.613-.448-1.514-.601-2.256-.535-2.388.214-2.515 3.064-2.235 4.903.425 2.783 1.168 5.463 3.27 7.483 2.754 2.646 8.516 3.832 10.427-.413.474-1.05.645-2.21.731-3.36.227-3.026-.225-10.422-5.05-9.194-.269.068-.54.178-.717.392-.767.927.29 3.24.469 4.26.235 1.344.388 2.689.13 4.043-.088.463-.261.975-.692 1.168-.406.183-.904-.008-1.204-.338s-.445-.768-.572-1.196c-.479-1.612-.773-3.25-1.084-4.897-.134-.706-.373-1.433-.837-1.966M11.23 38.199c-.68-.395-1.297-.899-1.892-1.417-2.49-2.172-4.694-4.643-6.393-7.485-.481-.806-.937-1.688-.898-2.626.03-.729.303-1.393 1.038-1.658.553-.2 1.168-.125 1.735.026 1.66.444 3.125 1.495 4.46 2.541a20.8 20.8 0 0 1 3.76 3.853c-.053-.07.318-.804.361-.913l.417-1.053c.818-2.068 1.554-4.183 2.45-6.218.31-.7.658-1.4 1.189-1.952.717-.746 1.922-1.205 2.91-.72.775.38 1.089 1.353 1.117 2.157.038 1.096-.116 2.288-.28 3.371a28.5 28.5 0 0 1-.78 3.547c-.579 2.02-1.291 4.034-2.397 5.83q-.29.472-.615.922c-.642.888-1.426 1.733-2.422 2.224-1.095.54-2.25.325-3.317-.193a7 7 0 0 1-.442-.236M32.03 18.426c-2.219-.323-4.319 1.035-5.726 2.611-3.08 3.448-6.876 13.353.384 14.703 3.752.698 7.344-3.163 8.926-6.12.506-.944.86-2.094 1.018-3.292.457-3.46-.718-7.334-4.603-7.902m.553 9.417c-.629 1.603-1.91 3.053-3.564 3.4-1.61.34-2.655-.708-2.714-2.275-.066-1.76.808-3.788 1.971-5.09.683-.764 1.631-1.443 2.647-1.306 1.633.22 2.186 2.139 2.072 3.542a6.1 6.1 0 0 1-.412 1.73"
    }
  )
);
var LuvoCircle_default = SvgLuvoCircle;

// src/components/SvgIcon/icons/MapPin.tsx
var React27 = __toESM(require("react"));
var import_react_native_svg19 = __toESM(require("react-native-svg"));
var SvgMapPin = (props) => /* @__PURE__ */ React27.createElement(
  import_react_native_svg19.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React27.createElement(
    import_react_native_svg19.Path,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0"
    }
  ),
  /* @__PURE__ */ React27.createElement(
    import_react_native_svg19.Path,
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
var React28 = __toESM(require("react"));
var import_react_native_svg20 = __toESM(require("react-native-svg"));
var SvgMap = (props) => /* @__PURE__ */ React28.createElement(
  import_react_native_svg20.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React28.createElement(
    import_react_native_svg20.Path,
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
var React29 = __toESM(require("react"));
var import_react_native_svg21 = __toESM(require("react-native-svg"));
var SvgProfile = (props) => /* @__PURE__ */ React29.createElement(
  import_react_native_svg21.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React29.createElement(
    import_react_native_svg21.Path,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.905,
      d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"
    }
  ),
  /* @__PURE__ */ React29.createElement(
    import_react_native_svg21.Path,
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
var React30 = __toESM(require("react"));
var import_react_native_svg22 = __toESM(require("react-native-svg"));
var SvgQrCode = (props) => /* @__PURE__ */ React30.createElement(
  import_react_native_svg22.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React30.createElement(
    import_react_native_svg22.Path,
    {
      fill: props.color || "currentColor",
      d: "M1.505 14.777c.017-.027.039-.054.05-.082.164-.372.487-.553.87-.493.35.055.592.35.641.745.099.783.159 1.583.334 2.35.389 1.719 2.037 3.159 3.784 3.383.668.088 1.342.165 2.01.241.416.044.711.334.744.74.028.372-.224.69-.624.788-.01 0-.01.022-.022.033h-.575c-.038-.017-.076-.038-.12-.044-.657-.088-1.32-.131-1.966-.274-2.24-.493-3.74-1.862-4.594-3.964-.269-.657-.318-1.364-.417-2.06-.038-.262-.082-.53-.12-.793v-.575zM1.505 8.628c.039-.263.077-.531.126-.794.12-.64.16-1.314.378-1.922.794-2.19 2.333-3.603 4.633-4.096.805-.175 1.632-.23 2.453-.312.449-.05.816.29.843.734.028.416-.295.766-.744.82-.81.1-1.638.16-2.432.33-1.741.366-3.203 1.982-3.455 3.74-.093.635-.17 1.27-.241 1.91-.044.395-.29.69-.64.745-.39.06-.707-.12-.871-.492-.011-.028-.033-.055-.05-.083v-.58M14.626 22.482c-.044-.027-.088-.06-.132-.082a.77.77 0 0 1-.41-.854c.07-.35.356-.575.722-.62.827-.098 1.66-.158 2.47-.333 1.714-.367 3.17-1.988 3.417-3.724.093-.657.164-1.314.246-1.971a.773.773 0 0 1 .81-.701c.4.016.767.334.735.728-.099 1.221-.132 2.464-.658 3.603-.892 1.928-2.354 3.198-4.462 3.642-.663.142-1.353.186-2.027.274-.049.005-.093.027-.142.038h-.575z"
    }
  ),
  /* @__PURE__ */ React30.createElement(
    import_react_native_svg22.Path,
    {
      fill: props.color || "currentColor",
      d: "M11.488 8.332c-.05.536-.082 1.067-.148 1.593-.088.685-.706 1.298-1.39 1.402a10.8 10.8 0 0 1-3.204 0c-.668-.099-1.276-.695-1.386-1.358-.17-1.04-.17-2.08-.027-3.121.115-.844.68-1.413 1.522-1.528 1.04-.142 2.081-.142 3.122.027.673.11 1.275.707 1.363 1.38.071.531.104 1.073.153 1.61zm-1.566 0L9.823 7.11c-.01-.16-.076-.236-.252-.258a10 10 0 0 0-2.486 0c-.142.017-.197.082-.213.22q-.165 1.246 0 2.485c.022.165.093.225.24.241a9.8 9.8 0 0 0 2.47 0c.154-.022.23-.093.241-.246l.099-1.227zM12.512 8.326c.05-.536.082-1.078.153-1.61.093-.673.696-1.264 1.37-1.374 1.04-.17 2.08-.17 3.12-.022.838.12 1.397.68 1.512 1.517.148 1.04.148 2.08-.022 3.121-.11.674-.7 1.265-1.375 1.37a10.6 10.6 0 0 1-3.225 0c-.679-.105-1.292-.713-1.38-1.392-.07-.53-.104-1.073-.153-1.61m3.149 1.583 1.226-.099c.148-.01.225-.07.247-.24.104-.833.11-1.66 0-2.487-.022-.147-.088-.208-.23-.224a9.3 9.3 0 0 0-2.47 0c-.17.022-.236.098-.252.257a9.6 9.6 0 0 0 0 2.448c.022.164.099.241.263.252.405.027.816.066 1.227.098zM11.477 15.801c-.038.39-.071.92-.137 1.446-.088.674-.69 1.27-1.358 1.385-1.046.17-2.097.17-3.143.022-.832-.12-1.39-.684-1.506-1.522-.142-1.04-.142-2.08.027-3.121.11-.674.723-1.265 1.408-1.364a11 11 0 0 1 3.165 0c.695.099 1.314.712 1.418 1.402.033.214.066.433.077.652.022.317.033.64.054 1.106zm-1.555-.159-.099-1.22c-.01-.148-.07-.236-.235-.258a9.7 9.7 0 0 0-2.492 0c-.137.017-.213.077-.23.23q-.165 1.248 0 2.486c.022.148.077.214.225.23q1.247.165 2.486 0c.164-.022.224-.098.235-.246l.099-1.227zM15.66 12.5c.537.049 1.074.082 1.61.153.723.098 1.298.723 1.402 1.506.143 1.04.143 2.08-.027 3.121-.11.657-.69 1.243-1.347 1.347q-1.642.262-3.286 0c-.668-.11-1.26-.723-1.358-1.39a10.7 10.7 0 0 1 0-3.182c.099-.69.712-1.32 1.408-1.408.525-.065 1.056-.098 1.593-.148zm0 1.566-1.22.098c-.16.011-.241.088-.263.252a9.8 9.8 0 0 0 0 2.47c.016.137.07.213.23.235.838.11 1.67.11 2.508 0 .142-.016.197-.082.213-.219q.163-1.23.006-2.47c-.022-.18-.099-.251-.269-.262-.4-.028-.8-.066-1.21-.099z"
    }
  ),
  /* @__PURE__ */ React30.createElement(
    import_react_native_svg22.Path,
    {
      fill: props.color || "currentColor",
      d: "M22.494 8.825c.006.591-.306.936-.717.958-.444.027-.783-.28-.838-.717-.098-.8-.159-1.605-.334-2.388-.383-1.686-1.988-3.121-3.701-3.373-.701-.104-1.408-.175-2.114-.252-.416-.044-.74-.394-.723-.8.016-.41.345-.782.745-.75 1.243.105 2.508.121 3.669.641 2.102.947 3.422 2.536 3.778 4.852.104.662.175 1.325.24 1.823z"
    }
  )
);
var QrCode_default = SvgQrCode;

// src/components/SvgIcon/icons/Settings.tsx
var React31 = __toESM(require("react"));
var import_react_native_svg23 = __toESM(require("react-native-svg"));
var SvgSettings = (props) => /* @__PURE__ */ React31.createElement(
  import_react_native_svg23.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React31.createElement(
    import_react_native_svg23.G,
    {
      stroke: props.color || "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      clipPath: "url(#settings_svg__a)"
    },
    /* @__PURE__ */ React31.createElement(import_react_native_svg23.Path, { d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" }),
    /* @__PURE__ */ React31.createElement(import_react_native_svg23.Path, { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 3.417 1.415 2 2 0 0 1-.587 1.415l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1" })
  ),
  /* @__PURE__ */ React31.createElement(import_react_native_svg23.Defs, null, /* @__PURE__ */ React31.createElement(import_react_native_svg23.ClipPath, { id: "settings_svg__a" }, /* @__PURE__ */ React31.createElement(import_react_native_svg23.Path, { fill: "#fff", d: "M0 0h24v24H0z" })))
);
var Settings_default = SvgSettings;

// src/components/SvgIcon/icons/Star.tsx
var React32 = __toESM(require("react"));
var import_react_native_svg24 = __toESM(require("react-native-svg"));
var SvgStar = (props) => /* @__PURE__ */ React32.createElement(
  import_react_native_svg24.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React32.createElement(
    import_react_native_svg24.Path,
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
var React33 = __toESM(require("react"));
var import_react_native_svg25 = __toESM(require("react-native-svg"));
var SvgTool = (props) => /* @__PURE__ */ React33.createElement(
  import_react_native_svg25.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React33.createElement(
    import_react_native_svg25.Path,
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
var React34 = __toESM(require("react"));
var import_react_native_svg26 = __toESM(require("react-native-svg"));
var SvgUser = (props) => /* @__PURE__ */ React34.createElement(
  import_react_native_svg26.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React34.createElement(
    import_react_native_svg26.Path,
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
var React35 = __toESM(require("react"));
var import_react_native_svg27 = __toESM(require("react-native-svg"));
var SvgWind = (props) => /* @__PURE__ */ React35.createElement(
  import_react_native_svg27.default,
  {
    width: props.width ?? 24,
    height: props.height ?? 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...props
  },
  /* @__PURE__ */ React35.createElement(
    import_react_native_svg27.Path,
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
    return /* @__PURE__ */ import_react17.default.createElement(import_react_native8.View, { style: [styles.placeholder, { width: sizeValue, height: sizeValue }, style] });
  }
  return /* @__PURE__ */ import_react17.default.createElement(
    import_react_native8.View,
    {
      style: [styles.container, { width: sizeValue, height: sizeValue }, style],
      accessibilityLabel: accessibilityLabel ?? name,
      accessible,
      accessibilityRole: "image"
    },
    /* @__PURE__ */ import_react17.default.createElement(Icon2, { width: sizeValue, height: sizeValue, color: colorValue, ...rest })
  );
};
var styles = import_react_native8.StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  placeholder: { opacity: 0 }
});
var SvgIcon = (0, import_react17.memo)(SvgIconComponent);

// src/components/SvgImage/SvgImage.tsx
var import_react18 = __toESM(require("react"));
var import_react_native9 = require("react-native");

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
var React37 = __toESM(require("react"));
var import_react_native_svg28 = __toESM(require("react-native-svg"));
var LuvoLogoPink = (props) => /* @__PURE__ */ React37.createElement(
  import_react_native_svg28.default,
  {
    width: props.width ?? 32,
    height: props.height ?? 34,
    viewBox: "0 0 32 34",
    fill: "none",
    ...props
  },
  /* @__PURE__ */ React37.createElement(
    import_react_native_svg28.Path,
    {
      d: "M9.64076 4.03868C9.70789 3.8949 9.77661 3.75112 9.84586 3.60786C10.2582 2.75786 10.7101 1.75455 10.2735 0.916704C9.77344 -0.0421966 8.42495 -0.141576 7.37936 0.133302C5.52763 0.620153 4.49948 1.81376 3.55697 3.40593C2.50873 5.17625 1.6175 7.04542 0.986863 9.00604C0.465652 10.6257 0.125755 12.3083 0.0232046 14.0083C-0.133264 16.5921 0.450322 19.2051 3.35345 19.7997C4.39588 20.0133 5.479 19.9113 6.52354 19.7078C10.6446 18.9069 14.6224 16.6603 17.5736 13.6948C17.8511 13.4157 18.1287 13.1165 18.2529 12.7428C18.4849 12.0461 18.0959 11.251 17.488 10.8387C16.8801 10.4264 16.1067 10.3355 15.3735 10.3788C13.4092 10.4962 11.7039 11.5027 10.0647 12.5012C9.42772 12.8892 8.37737 13.8011 7.61247 13.8381C6.83436 13.8756 7.02519 12.2279 7.12774 11.7104C7.30271 10.8287 7.51362 9.95384 7.7589 9.0885C8.24945 7.35836 8.87903 5.66733 9.64076 4.03815V4.03868Z",
      fill: "#D75B71"
    }
  ),
  /* @__PURE__ */ React37.createElement(
    import_react_native_svg28.Path,
    {
      d: "M22.2828 2.35782C22.1845 2.24522 22.0746 2.14215 21.9514 2.05228C21.4175 1.66217 20.6325 1.52843 19.9855 1.58605C17.9049 1.77212 17.7944 4.25606 18.0386 5.85828C18.4087 8.28302 19.0557 10.6184 20.8873 12.3787C23.2867 14.684 28.308 15.7169 29.9731 12.0187C30.3854 11.1032 30.535 10.0925 30.6101 9.09127C30.8078 6.45455 30.4134 0.00972849 26.2094 1.07964C25.9752 1.13937 25.7384 1.23505 25.5846 1.42112C24.9164 2.22884 25.8383 4.24496 25.9932 5.1325C26.1983 6.30443 26.3315 7.47583 26.1068 8.65569C26.0302 9.05902 25.879 9.5057 25.5042 9.6738C25.15 9.83291 24.7166 9.6664 24.4549 9.37936C24.1932 9.09232 24.0669 8.71014 23.9564 8.33747C23.5394 6.93242 23.283 5.5057 23.0118 4.07052C22.8955 3.45522 22.6867 2.82141 22.2823 2.35729L22.2828 2.35782Z",
      fill: "#D75B71"
    }
  ),
  /* @__PURE__ */ React37.createElement(
    import_react_native_svg28.Path,
    {
      d: "M9.78477 33.2835C9.19167 32.9394 8.65407 32.5006 8.13603 32.0492C5.96556 30.1567 4.04564 28.0037 2.56553 25.5272C2.14581 24.8252 1.74883 24.0566 1.78266 23.2388C1.80856 22.604 2.04696 22.0257 2.68764 21.7947C3.1692 21.6207 3.70469 21.6852 4.19947 21.8174C5.64522 22.2038 6.92234 23.1199 8.08476 24.0312C9.31589 24.9959 10.4202 26.1398 11.3611 27.3884C11.3151 27.3271 11.6386 26.6875 11.6761 26.5929C11.7972 26.2868 11.9182 25.9812 12.0393 25.6752C12.7524 23.8737 13.3936 22.0304 14.1744 20.2574C14.4434 19.6469 14.7474 19.0379 15.2099 18.5569C15.8353 17.9062 16.8851 17.5066 17.7451 17.9289C18.4212 18.2609 18.6945 19.1077 18.7188 19.8087C18.7521 20.7633 18.6179 21.8026 18.4751 22.7462C18.3171 23.7896 18.0845 24.8215 17.7948 25.8364C17.291 27.5972 16.6699 29.3511 15.7068 30.9158C15.5382 31.1902 15.3595 31.4587 15.1708 31.7199C14.611 32.4937 13.9286 33.2301 13.0606 33.6577C12.1064 34.1282 11.1 33.9411 10.1707 33.4891C10.0396 33.4252 9.91111 33.3564 9.7853 33.2835H9.78477Z",
      fill: "#D75B71"
    }
  ),
  /* @__PURE__ */ React37.createElement(
    import_react_native_svg28.Path,
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
    return /* @__PURE__ */ import_react18.default.createElement(import_react_native9.View, { style: [styles2.placeholder, style] });
  }
  return /* @__PURE__ */ import_react18.default.createElement(
    import_react_native9.View,
    {
      style: styles2.container,
      accessibilityLabel: accessibilityLabel ?? name,
      accessible,
      accessibilityRole: "image"
    },
    /* @__PURE__ */ import_react18.default.createElement(Image, { height: resolvedHeight, width: resolvedWidth, color, ...rest })
  );
};
var styles2 = import_react_native9.StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  placeholder: { opacity: 0 }
});
var SvgImage = (0, import_react18.memo)(SvgImageComponent);

// src/components/Icon/Icon.tsx
var import_Ionicons = __toESM(require("react-native-vector-icons/Ionicons"));
var Icon = ({ name, size = "font-size-md", color = "font-primary" }) => {
  const theme = useBaseTheme();
  return /* @__PURE__ */ React.createElement(import_Ionicons.default, { name, size: theme.fontSize[size], color: theme.fontColor[color] });
};

// src/components/Tag/Tag.tsx
var import_react20 = __toESM(require("react"));
var import_react_native10 = require("react-native");

// src/components/Tag/theme/useTagTheme.ts
var import_react19 = require("react");
var useTagTheme = ({ surfaceColor, borderColor, fullWidth, disabled }) => {
  const theme = useBaseTheme();
  const containerStyle = (0, import_react19.useMemo)(() => {
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
  return /* @__PURE__ */ import_react20.default.createElement(import_react_native10.View, { style: [containerStyle, style] }, iconName ? /* @__PURE__ */ import_react20.default.createElement(SvgIcon, { name: iconName, size: iconSize, color: props.color }) : null, props.children ? /* @__PURE__ */ import_react20.default.createElement(Text, { ...props }) : null);
};

// src/components/Label/Label.tsx
var import_react21 = __toESM(require("react"));
var import_react_native12 = require("react-native");

// src/components/Label/theme/useLabelTheme.ts
var import_react_native11 = require("react-native");
var useLabelTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native11.StyleSheet.create({
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
  return /* @__PURE__ */ import_react21.default.createElement(import_react_native12.View, { style: [styles3.container, style] }, /* @__PURE__ */ import_react21.default.createElement(SvgIcon, { name: iconName, size: iconSize, color }), /* @__PURE__ */ import_react21.default.createElement(Text, { fontSize, color, style: styles3.text, numberOfLines }, children));
};

// src/components/ConcurrencyTag/ConcurrencyTag.tsx
var import_react23 = __toESM(require("react"));
var import_react_native14 = require("react-native");

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
var import_react22 = require("react");
var import_react_native13 = require("react-native");
var useConcurrencyTagTheme = (color) => {
  const theme = useBaseTheme();
  const styles3 = import_react_native13.StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing["spacing-xs"]
    }
  });
  const dotStyle = (0, import_react22.useMemo)(() => {
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
  return /* @__PURE__ */ import_react23.default.createElement(import_react_native14.View, { style: styles3.row }, /* @__PURE__ */ import_react23.default.createElement(import_react_native14.View, { style: dotStyle }), /* @__PURE__ */ import_react23.default.createElement(Text, { fontSize: "font-size-sm", color }, label));
};

// src/components/TimeTag/TimeTag.tsx
var import_react25 = __toESM(require("react"));

// src/components/TimeTag/hooks/useTimeTag.ts
var import_react24 = require("react");
function formatHHMMSS(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor(secs % 3600 / 60);
  const s = secs % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
var useTimeTag = ({ seconds, extended, endsInLabel }) => {
  const [remaining, setRemaining] = (0, import_react24.useState)(seconds);
  (0, import_react24.useEffect)(() => {
    setRemaining(seconds);
  }, [seconds]);
  (0, import_react24.useEffect)(() => {
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
  return /* @__PURE__ */ import_react25.default.createElement(
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
var import_react26 = __toESM(require("react"));

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
  return /* @__PURE__ */ import_react26.default.createElement(Tag, { color, surfaceColor, fontWeight: "semibold" }, label);
};

// src/components/StepIndicator/StepIndicator.tsx
var import_react29 = __toESM(require("react"));
var import_react_native16 = require("react-native");

// src/components/StepIndicator/components/Dot.tsx
var import_react28 = __toESM(require("react"));
var import_react_native_reanimated2 = __toESM(require("react-native-reanimated"));

// src/components/StepIndicator/theme/useDotAnimation.ts
var import_react27 = require("react");
var import_react_native_reanimated = require("react-native-reanimated");

// src/components/StepIndicator/theme/useStepIndicatorTheme.ts
var import_react_native15 = require("react-native");
var DOT_SIZE = 6;
var DOT_ACTIVE_WIDTH = 18;
var useStepIndicatorTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native15.StyleSheet.create({
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
  const width = (0, import_react_native_reanimated.useSharedValue)(active ? dotActiveWidth : dotSize);
  const opacity = (0, import_react_native_reanimated.useSharedValue)(active ? 1 : 0.35);
  (0, import_react27.useEffect)(() => {
    width.value = (0, import_react_native_reanimated.withSpring)(active ? dotActiveWidth : dotSize, SPRING);
    opacity.value = (0, import_react_native_reanimated.withSpring)(active ? 1 : 0.35, SPRING);
  }, [active, dotActiveWidth, dotSize, width, opacity]);
  const animStyle = (0, import_react_native_reanimated.useAnimatedStyle)(() => ({
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
  return /* @__PURE__ */ import_react28.default.createElement(import_react_native_reanimated2.default.View, { style: [dotStyle, { backgroundColor }, animStyle] });
};

// src/components/StepIndicator/StepIndicator.tsx
var StepIndicator = ({ total, current }) => {
  const { styles: styles3 } = useStepIndicatorTheme();
  if (total <= 1) return null;
  return /* @__PURE__ */ import_react29.default.createElement(import_react_native16.View, { style: styles3.row }, Array.from({ length: total }).map((_, i) => /* @__PURE__ */ import_react29.default.createElement(Dot, { key: i, active: i === current })));
};

// src/components/ActionModal/ActionModal.tsx
var import_react30 = __toESM(require("react"));
var import_react_native18 = require("react-native");

// src/components/ActionModal/theme/useActionModalTheme.ts
var import_react_native17 = require("react-native");
var COLOR_RED_50 = "#fbeef0";
var COLOR_RED_600 = "#FF3B3B";
var useActionModalTheme = (variant = "neutral") => {
  const theme = useBaseTheme();
  const isDestructive = variant === "destructive";
  const styles3 = import_react_native17.StyleSheet.create({
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
  return /* @__PURE__ */ import_react30.default.createElement(import_react_native18.Modal, { visible, transparent: true, animationType: "fade", onRequestClose: onCancel }, /* @__PURE__ */ import_react30.default.createElement(import_react_native18.Pressable, { style: styles3.overlay, onPress: onCancel }, /* @__PURE__ */ import_react30.default.createElement(import_react_native18.Pressable, { style: styles3.card, onPress: () => {
  } }, /* @__PURE__ */ import_react30.default.createElement(import_react_native18.View, { style: styles3.iconContainer }, /* @__PURE__ */ import_react30.default.createElement(
    SvgIcon,
    {
      name: icon,
      size: "icon-size-xl",
      color: variant === "destructive" ? "font-error" : "font-secondary"
    }
  )), /* @__PURE__ */ import_react30.default.createElement(Text, { fontSize: "font-size-lg", fontWeight: "extrabold", style: styles3.title }, title), /* @__PURE__ */ import_react30.default.createElement(Text, { fontSize: "font-size-xs", color: "font-light", style: styles3.body }, body), /* @__PURE__ */ import_react30.default.createElement(import_react_native18.View, { style: styles3.actions }, /* @__PURE__ */ import_react30.default.createElement(import_react_native18.TouchableOpacity, { style: styles3.confirmButton, onPress: onConfirm, activeOpacity: 0.8 }, /* @__PURE__ */ import_react30.default.createElement(Text, { fontSize: "font-size-md", fontWeight: "bold", color: "font-invert" }, confirmLabel)), /* @__PURE__ */ import_react30.default.createElement(import_react_native18.TouchableOpacity, { style: styles3.cancelButton, onPress: onCancel, activeOpacity: 0.7 }, /* @__PURE__ */ import_react30.default.createElement(Text, { fontSize: "font-size-sm", fontWeight: "semibold" }, cancelLabel))))));
};

// src/components/SocialAuth/SocialAuth.tsx
var import_react33 = __toESM(require("react"));
var import_react_native24 = require("react-native");

// src/components/AppleSignInButton/AppleSignInButton.tsx
var import_react31 = __toESM(require("react"));
var import_react_native20 = require("react-native");
var import_react_native_svg29 = __toESM(require("react-native-svg"));

// src/components/AppleSignInButton/theme/useAppleSignInButtonTheme.ts
var import_react_native19 = require("react-native");
var useAppleSignInButtonTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native19.StyleSheet.create({
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
var AppleLogo = () => /* @__PURE__ */ import_react31.default.createElement(import_react_native_svg29.default, { width: 17, height: 20, viewBox: "0 0 170 209" }, /* @__PURE__ */ import_react31.default.createElement(
  import_react_native_svg29.Path,
  {
    fill: "#FFFFFF",
    d: "M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.241z"
  }
));
var AppleSignInButton = ({ label, onPress, disabled, submitting }) => {
  const { styles: styles3 } = useAppleSignInButtonTheme();
  return /* @__PURE__ */ import_react31.default.createElement(import_react_native20.TouchableOpacity, { style: styles3.button, onPress, disabled: disabled || submitting, activeOpacity: 0.85 }, /* @__PURE__ */ import_react31.default.createElement(import_react_native20.View, { style: styles3.content }, /* @__PURE__ */ import_react31.default.createElement(AppleLogo, null), /* @__PURE__ */ import_react31.default.createElement(Text, { fontSize: "font-size-sm", fontWeight: "medium", color: "font-invert" }, label)));
};

// src/components/GoogleSignInButton/GoogleSignInButton.tsx
var import_react32 = __toESM(require("react"));
var import_react_native22 = require("react-native");
var import_react_native_svg30 = __toESM(require("react-native-svg"));

// src/components/GoogleSignInButton/theme/useGoogleSignInButtonTheme.ts
var import_react_native21 = require("react-native");
var useGoogleSignInButtonTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native21.StyleSheet.create({
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
var GoogleLogo = () => /* @__PURE__ */ import_react32.default.createElement(import_react_native_svg30.default, { width: 20, height: 20, viewBox: "0 0 48 48" }, /* @__PURE__ */ import_react32.default.createElement(import_react_native_svg30.Path, { fill: "#FFC107", d: "M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" }), /* @__PURE__ */ import_react32.default.createElement(import_react_native_svg30.Path, { fill: "#FF3D00", d: "m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" }), /* @__PURE__ */ import_react32.default.createElement(import_react_native_svg30.Path, { fill: "#4CAF50", d: "M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" }), /* @__PURE__ */ import_react32.default.createElement(import_react_native_svg30.Path, { fill: "#1976D2", d: "M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" }));
var GoogleSignInButton = ({ label, onPress, disabled, submitting }) => {
  const { styles: styles3 } = useGoogleSignInButtonTheme();
  return /* @__PURE__ */ import_react32.default.createElement(import_react_native22.TouchableOpacity, { style: styles3.button, onPress, disabled: disabled || submitting, activeOpacity: 0.85 }, /* @__PURE__ */ import_react32.default.createElement(import_react_native22.View, { style: styles3.content }, /* @__PURE__ */ import_react32.default.createElement(GoogleLogo, null), /* @__PURE__ */ import_react32.default.createElement(Text, { fontSize: "font-size-sm", fontWeight: "medium", color: "font-primary" }, label)));
};

// src/components/SocialAuth/theme/useSocialAuthTheme.ts
var import_react_native23 = require("react-native");
var useSocialAuthTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native23.StyleSheet.create({
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
  return /* @__PURE__ */ import_react33.default.createElement(import_react_native24.View, { style: styles3.container }, error && /* @__PURE__ */ import_react33.default.createElement(Text, { fontSize: "font-size-xs", color: "font-error" }, error), /* @__PURE__ */ import_react33.default.createElement(import_react_native24.View, { style: styles3.dividerRow }, /* @__PURE__ */ import_react33.default.createElement(import_react_native24.View, { style: styles3.dividerLine }), /* @__PURE__ */ import_react33.default.createElement(Text, { fontSize: "font-size-xs", color: "font-secondary" }, dividerLabel), /* @__PURE__ */ import_react33.default.createElement(import_react_native24.View, { style: styles3.dividerLine })), /* @__PURE__ */ import_react33.default.createElement(import_react_native24.View, { style: styles3.buttonsRow }, /* @__PURE__ */ import_react33.default.createElement(
    GoogleSignInButton,
    {
      label: googleLabel,
      onPress: () => onSignIn("google"),
      disabled,
      submitting
    }
  ), showApple && /* @__PURE__ */ import_react33.default.createElement(
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
var import_react34 = __toESM(require("react"));
var import_react_native26 = require("react-native");

// src/components/AuthModeToggle/theme/useAuthModeToggleTheme.ts
var import_react_native25 = require("react-native");
var useAuthModeToggleTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native25.StyleSheet.create({
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
  return /* @__PURE__ */ import_react34.default.createElement(
    import_react_native26.TouchableOpacity,
    {
      style: styles3.row,
      onPress,
      disabled,
      accessibilityLabel: linkLabel,
      accessibilityRole: "button"
    },
    /* @__PURE__ */ import_react34.default.createElement(Text, { fontSize: "font-size-sm", color: "font-light" }, promptLabel),
    /* @__PURE__ */ import_react34.default.createElement(Text, { fontSize: "font-size-sm", color: "font-highlight", fontWeight: "semibold" }, linkLabel)
  );
};

// src/components/ErrorBoundary/ErrorBoundary.tsx
var import_react36 = __toESM(require("react"));

// src/components/ErrorBoundary/ErrorScreen.tsx
var import_react35 = __toESM(require("react"));
var import_react_native28 = require("react-native");

// src/components/ErrorBoundary/theme/useErrorScreenTheme.ts
var import_react_native27 = require("react-native");
var useErrorScreenTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native27.StyleSheet.create({
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
  const handleRetry = (0, import_react35.useCallback)(() => onReset(), [onReset]);
  return /* @__PURE__ */ import_react35.default.createElement(import_react_native28.View, { style: styles3.container }, /* @__PURE__ */ import_react35.default.createElement(import_react_native28.View, { style: styles3.content }, /* @__PURE__ */ import_react35.default.createElement(SvgIcon, { name: "AlertTriangle", size: "icon-size-xxxxxxl", color: "font-error" }), /* @__PURE__ */ import_react35.default.createElement(Text, { fontSize: "font-size-lg", fontWeight: "semibold", color: "font-primary" }, title), /* @__PURE__ */ import_react35.default.createElement(Text, { fontSize: "font-size-sm", color: "font-secondary", textAlign: "center" }, body)), /* @__PURE__ */ import_react35.default.createElement(Button, { label: retryLabel, onPress: handleRetry, variant: "primary", size: "md" }));
};

// src/components/ErrorBoundary/ErrorBoundary.tsx
var ErrorBoundary = class extends import_react36.default.Component {
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
      return /* @__PURE__ */ import_react36.default.createElement(
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

// src/components/LoadErrorState/LoadErrorState.tsx
var import_react37 = __toESM(require("react"));
var import_react_native30 = require("react-native");

// src/components/LoadErrorState/theme/useLoadErrorStateTheme.ts
var import_react_native29 = require("react-native");
var useLoadErrorStateTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native29.StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      gap: theme.spacing["spacing-md"],
      justifyContent: "space-between",
      paddingHorizontal: theme.spacing["spacing-xl"]
    },
    contentContainer: {
      flex: 1,
      gap: theme.spacing["spacing-md"],
      alignItems: "center",
      justifyContent: "center"
    }
  });
  return { styles: styles3 };
};

// src/components/LoadErrorState/LoadErrorState.tsx
var LoadErrorState = ({ message, title, retryLabel, onRetry, logo }) => {
  const { styles: styles3 } = useLoadErrorStateTheme();
  return /* @__PURE__ */ import_react37.default.createElement(import_react_native30.View, { style: styles3.container }, /* @__PURE__ */ import_react37.default.createElement(import_react_native30.View, { style: styles3.contentContainer }, logo ?? null, /* @__PURE__ */ import_react37.default.createElement(Text, { fontSize: "font-size-lg", fontWeight: "semibold", color: "font-primary" }, title), /* @__PURE__ */ import_react37.default.createElement(Text, { fontSize: "font-size-sm", color: "font-secondary", textAlign: "center" }, message)), /* @__PURE__ */ import_react37.default.createElement(Button, { label: retryLabel, variant: "primary", size: "md", onPress: onRetry }));
};

// src/components/AuthRequiredScreen/AuthRequiredScreen.tsx
var import_react38 = __toESM(require("react"));
var import_react_native32 = require("react-native");

// src/components/AuthRequiredScreen/theme/useAuthRequiredScreenTheme.ts
var import_react_native31 = require("react-native");
var useAuthRequiredScreenTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native31.StyleSheet.create({
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
  return /* @__PURE__ */ import_react38.default.createElement(import_react_native32.View, { style: styles3.container }, /* @__PURE__ */ import_react38.default.createElement(import_react_native32.View, { style: styles3.contentContainer }, logo ?? null, /* @__PURE__ */ import_react38.default.createElement(Text, { fontSize: "font-size-lg", fontWeight: "semibold" }, title), /* @__PURE__ */ import_react38.default.createElement(Text, { color: "font-light", fontSize: "font-size-sm" }, subtitle ?? defaultSubtitle)), /* @__PURE__ */ import_react38.default.createElement(Button, { label: signInLabel, onPress: onSignIn }));
};

// src/components/Loader/Loader.tsx
var import_react40 = __toESM(require("react"));
var import_react_native34 = require("react-native");
var import_react_native_reanimated4 = __toESM(require("react-native-reanimated"));

// src/components/Loader/hooks/useLoader.ts
var import_react39 = require("react");
var import_react_native_reanimated3 = require("react-native-reanimated");
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
  const [index, setIndex] = (0, import_react39.useState)(0);
  const scale = (0, import_react_native_reanimated3.useSharedValue)(0);
  const opacity = (0, import_react_native_reanimated3.useSharedValue)(0);
  const nextAvatar = (0, import_react39.useCallback)(() => {
    setIndex((i) => (i + 1) % AVATARS.length);
  }, []);
  (0, import_react39.useEffect)(() => {
    scale.value = 0;
    opacity.value = 0;
    scale.value = (0, import_react_native_reanimated3.withTiming)(1, { duration: ENTER_MS, easing: import_react_native_reanimated3.Easing.out(import_react_native_reanimated3.Easing.back(2.2)) });
    opacity.value = (0, import_react_native_reanimated3.withTiming)(1, { duration: 200 });
    const timer = setTimeout(() => {
      scale.value = (0, import_react_native_reanimated3.withTiming)(0.6, { duration: EXIT_MS });
      opacity.value = (0, import_react_native_reanimated3.withTiming)(0, { duration: EXIT_MS }, (finished) => {
        if (finished) (0, import_react_native_reanimated3.runOnJS)(nextAvatar)();
      });
    }, ENTER_MS + HOLD_MS);
    return () => clearTimeout(timer);
  }, [index]);
  const animatedStyle = (0, import_react_native_reanimated3.useAnimatedStyle)(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }]
  }));
  return { avatar: AVATARS[index], animatedStyle };
};

// src/components/Loader/theme/useLoaderTheme.ts
var import_react_native33 = require("react-native");
var useLoaderTheme = (size) => {
  const theme = useBaseTheme();
  const styles3 = import_react_native33.StyleSheet.create({
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
  return /* @__PURE__ */ import_react40.default.createElement(import_react_native34.View, { style: styles3.container }, /* @__PURE__ */ import_react40.default.createElement(import_react_native_reanimated4.default.View, { style: animatedStyle }, avatar && /* @__PURE__ */ import_react40.default.createElement(SvgImage, { name: avatar.imageName, height: iconSize, width: iconSize })));
};

// src/components/BottomSheet/BottomSheet.tsx
var import_react42 = __toESM(require("react"));
var import_react_native37 = require("react-native");
var import_react_native_reanimated6 = __toESM(require("react-native-reanimated"));

// src/components/BottomSheet/hooks/useBottomSheet.ts
var import_react41 = require("react");
var import_react_native35 = require("react-native");
var import_react_native_reanimated5 = require("react-native-reanimated");
var useBottomSheet = (visible) => {
  const { height } = (0, import_react_native35.useWindowDimensions)();
  const [mounted, setMounted] = (0, import_react41.useState)(visible);
  const opacity = (0, import_react_native_reanimated5.useSharedValue)(0);
  const translateY = (0, import_react_native_reanimated5.useSharedValue)(height);
  (0, import_react41.useEffect)(() => {
    if (visible) {
      setMounted(true);
      opacity.value = (0, import_react_native_reanimated5.withTiming)(1, { duration: 200 });
      translateY.value = (0, import_react_native_reanimated5.withTiming)(0, { duration: 280 });
    } else {
      opacity.value = (0, import_react_native_reanimated5.withTiming)(0, { duration: 200 });
      translateY.value = (0, import_react_native_reanimated5.withTiming)(height, { duration: 280 }, (finished) => {
        if (finished) (0, import_react_native_reanimated5.runOnJS)(setMounted)(false);
      });
    }
  }, [visible, height, opacity, translateY]);
  const backdropStyle = (0, import_react_native_reanimated5.useAnimatedStyle)(() => ({ opacity: opacity.value }));
  const sheetStyle = (0, import_react_native_reanimated5.useAnimatedStyle)(() => ({
    transform: [{ translateY: translateY.value }]
  }));
  return { mounted, backdropStyle, sheetStyle };
};

// src/components/BottomSheet/theme/useBottomSheetTheme.ts
var import_react_native36 = require("react-native");
var COLOR_SEMI_TRANSPARENT = "rgba(0, 0, 0, 0.5)";
var COLOR_GREY_100 = "#d5d6d7";
var useBottomSheetTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native36.StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end"
    },
    backdrop: {
      ...import_react_native36.StyleSheet.absoluteFillObject,
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
  return /* @__PURE__ */ import_react42.default.createElement(import_react_native37.Modal, { visible: mounted, transparent: true, animationType: "none", onRequestClose: onClose }, /* @__PURE__ */ import_react42.default.createElement(import_react_native37.View, { style: styles3.container }, /* @__PURE__ */ import_react42.default.createElement(import_react_native_reanimated6.default.View, { style: [styles3.backdrop, backdropStyle] }, /* @__PURE__ */ import_react42.default.createElement(import_react_native37.TouchableOpacity, { style: styles3.backdropPress, activeOpacity: 1, onPress: onClose })), /* @__PURE__ */ import_react42.default.createElement(import_react_native_reanimated6.default.View, { style: [styles3.sheet, sheetStyle] }, /* @__PURE__ */ import_react42.default.createElement(import_react_native37.View, { style: styles3.handle }), title && /* @__PURE__ */ import_react42.default.createElement(Text, { fontSize: "font-size-md", fontWeight: "semibold", style: styles3.title }, title), children)));
};

// src/components/PillSelector/PillSelector.tsx
var import_react44 = __toESM(require("react"));
var import_react_native39 = require("react-native");
var import_react_native_reanimated8 = __toESM(require("react-native-reanimated"));

// src/components/PillSelector/hooks/useAnimatedStyles.ts
var import_react43 = require("react");
var import_react_native_reanimated7 = require("react-native-reanimated");
var useAnimatedStyles = ({ options, value, onChange }) => {
  const [containerW, setContainerW] = (0, import_react43.useState)(0);
  const index = Math.max(
    0,
    options.findIndex((o) => o.value === value)
  );
  const segmentW = containerW > 0 ? containerW / options.length : 0;
  const translateX = (0, import_react_native_reanimated7.useSharedValue)(index);
  const progress = (0, import_react_native_reanimated7.useDerivedValue)(() => translateX.value);
  const thumbStyle = (0, import_react_native_reanimated7.useAnimatedStyle)(() => ({
    transform: [{ translateX: (0, import_react_native_reanimated7.withSpring)(progress.value * segmentW) }]
  }));
  const segmentWidthStyle = containerW > 0 ? { width: segmentW } : {};
  const onLayout = (e) => {
    setContainerW(e.nativeEvent.layout.width);
    translateX.value = index;
  };
  const handlePress = (0, import_react43.useCallback)(
    (i) => {
      translateX.value = (0, import_react_native_reanimated7.withSpring)(i);
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
var import_react_native38 = require("react-native");
var usePillSelectorTheme = ({ backgroundColor, thumbColor }) => {
  const theme = useBaseTheme();
  const styles3 = import_react_native38.StyleSheet.create({
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
  return /* @__PURE__ */ import_react44.default.createElement(import_react_native39.View, { style: styles3.outerContainer }, /* @__PURE__ */ import_react44.default.createElement(import_react_native39.View, { style: styles3.container, onLayout, ...props }, /* @__PURE__ */ import_react44.default.createElement(import_react_native_reanimated8.default.View, { style: [styles3.thumb, thumbStyle, segmentWidthStyle] }), /* @__PURE__ */ import_react44.default.createElement(import_react_native39.View, { style: styles3.row }, options.map((o, i) => /* @__PURE__ */ import_react44.default.createElement(
    import_react_native39.Pressable,
    {
      key: o.value,
      style: [styles3.segment, segmentWidthStyle],
      onPress: () => handlePress(i)
    },
    /* @__PURE__ */ import_react44.default.createElement(Text, { fontSize: "font-size-sm", fontWeight: "medium" }, o.label)
  )))));
};

// src/components/SelectInput/SelectInput.tsx
var import_react48 = __toESM(require("react"));
var import_react_native43 = require("react-native");
var import_react_native_reanimated10 = __toESM(require("react-native-reanimated"));

// src/components/SelectInput/components/SelectInputOption/SelectInputOption.tsx
var import_react46 = __toESM(require("react"));
var import_react_native41 = require("react-native");

// src/components/SelectInput/components/SelectInputOption/theme/useSelectInputOptionTheme.ts
var import_react45 = require("react");
var import_react_native40 = require("react-native");
var useSelectInputOptionTheme = (selected, isLast) => {
  const theme = useBaseTheme();
  const styles3 = import_react_native40.StyleSheet.create({
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
  const containerStyle = (0, import_react45.useMemo)(
    () => [styles3.container, selected && { backgroundColor: theme.surfaceColor["surface-button"] }],
    [styles3.container, selected, theme]
  );
  return { containerStyle };
};

// src/components/SelectInput/components/SelectInputOption/SelectInputOption.tsx
var SelectInputOption = ({ option, selected, isLast, onPress }) => {
  const { containerStyle } = useSelectInputOptionTheme(selected, isLast);
  return /* @__PURE__ */ import_react46.default.createElement(import_react_native41.Pressable, { style: containerStyle, onPress }, /* @__PURE__ */ import_react46.default.createElement(
    Text,
    {
      fontSize: "font-size-sm",
      color: selected ? "font-primary" : "font-secondary",
      fontWeight: selected ? "semibold" : "regular"
    },
    option.label
  ), selected && /* @__PURE__ */ import_react46.default.createElement(SvgIcon, { name: "Check", size: "icon-size-sm", color: "font-highlight" }));
};

// src/components/SelectInput/hooks/useSelectInput.ts
var import_react47 = require("react");
var import_react_native_reanimated9 = require("react-native-reanimated");
var useSelectInput = ({ value, options, onChange }) => {
  const [modalVisible, setModalVisible] = (0, import_react47.useState)(false);
  const selectedLabel = options.find((o) => o.value === value)?.label;
  const showModal = (0, import_react47.useCallback)(() => setModalVisible(true), []);
  const hideModal = (0, import_react47.useCallback)(() => setModalVisible(false), []);
  const select = (0, import_react47.useCallback)(
    (val) => {
      onChange(val);
      setModalVisible(false);
    },
    [onChange]
  );
  const rotation = (0, import_react_native_reanimated9.useSharedValue)(0);
  (0, import_react47.useEffect)(() => {
    rotation.value = (0, import_react_native_reanimated9.withTiming)(modalVisible ? 90 : 0, { duration: 180 });
  }, [modalVisible, rotation]);
  const chevronStyle = (0, import_react_native_reanimated9.useAnimatedStyle)(() => ({
    transform: [{ rotate: `${rotation.value}deg` }]
  }));
  return { modalVisible, showModal, hideModal, select, selectedLabel, chevronStyle };
};

// src/components/SelectInput/theme/useSelectInputTheme.ts
var import_react_native42 = require("react-native");
var useSelectInputTheme = ({ error = false, disabled = false } = {}) => {
  const theme = useBaseTheme();
  const styles3 = import_react_native42.StyleSheet.create({
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
  return /* @__PURE__ */ import_react48.default.createElement(import_react_native43.View, { style: styles3.container }, label && /* @__PURE__ */ import_react48.default.createElement(Text, { fontSize: "font-size-sm", fontWeight: "semibold" }, label), /* @__PURE__ */ import_react48.default.createElement(import_react_native43.Pressable, { style: styles3.trigger, onPress: disabled ? void 0 : showModal }, /* @__PURE__ */ import_react48.default.createElement(
    Text,
    {
      fontSize: "font-size-md",
      color: selectedLabel ? "font-primary" : "font-placeholder"
    },
    selectedLabel ?? placeholder ?? ""
  ), /* @__PURE__ */ import_react48.default.createElement(import_react_native_reanimated10.default.View, { style: chevronStyle }, /* @__PURE__ */ import_react48.default.createElement(SvgIcon, { name: "ChevronRight", size: "icon-size-md", color: "font-secondary" }))), /* @__PURE__ */ import_react48.default.createElement(BottomSheet, { visible: modalVisible, onClose: hideModal, title: label }, /* @__PURE__ */ import_react48.default.createElement(import_react_native43.View, { style: styles3.optionsList }, options.map((option, idx) => /* @__PURE__ */ import_react48.default.createElement(
    SelectInputOption,
    {
      key: option.value,
      option,
      selected: value === option.value,
      isLast: idx === options.length - 1,
      onPress: () => select(option.value)
    }
  )))), error && /* @__PURE__ */ import_react48.default.createElement(import_react_native43.View, { style: styles3.footer }, /* @__PURE__ */ import_react48.default.createElement(Text, { fontSize: "font-size-xs", color: "font-error" }, error)));
};

// src/components/ScreenHeader/ScreenHeader.tsx
var import_react51 = __toESM(require("react"));
var import_react_native46 = require("react-native");
var import_native = require("@react-navigation/native");

// src/components/IconButton/IconButton.tsx
var import_react50 = __toESM(require("react"));
var import_react_native44 = require("react-native");

// src/components/IconButton/theme/useIconButtonTheme.ts
var import_react49 = require("react");
var useIconButtonTheme = ({ iconSize, surfaceColor }) => {
  const theme = useBaseTheme();
  const containerStyle = (0, import_react49.useMemo)(() => {
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
  return /* @__PURE__ */ import_react50.default.createElement(import_react_native44.TouchableOpacity, { activeOpacity: 0.8, ...props, style: [containerStyle, style] }, /* @__PURE__ */ import_react50.default.createElement(SvgIcon, { name: iconName, size: iconSize, color: iconColor }));
};

// src/components/ScreenHeader/theme/useScreenHeaderTheme.ts
var import_react_native45 = require("react-native");
var useScreenHeaderTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native45.StyleSheet.create({
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
  const navigation = (0, import_native.useNavigation)();
  const { styles: styles3 } = useScreenHeaderTheme();
  const handleBack = onBack ?? (() => navigation.goBack());
  return /* @__PURE__ */ import_react51.default.createElement(import_react_native46.View, { style: styles3.container }, !hideBack ? /* @__PURE__ */ import_react51.default.createElement(
    IconButton,
    {
      iconName: "ChevronLeft",
      iconSize: "icon-size-lg",
      onPress: handleBack,
      accessibilityLabel: backAccessibilityLabel
    }
  ) : null, /* @__PURE__ */ import_react51.default.createElement(import_react_native46.View, { style: styles3.titleGroup }, /* @__PURE__ */ import_react51.default.createElement(Text, { fontSize: "font-size-xxl", fontWeight: "bold" }, title), subtitle ? /* @__PURE__ */ import_react51.default.createElement(Text, { fontSize: "font-size-sm", color: "font-secondary" }, subtitle) : null));
};

// src/components/SafeScreenHeader/SafeScreenHeader.tsx
var import_react52 = __toESM(require("react"));
var import_react_native48 = require("react-native");

// src/components/SafeScreenHeader/theme/useSafeScreenHeaderTheme.ts
var import_react_native47 = require("react-native");
var useSafeScreenHeaderTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native47.StyleSheet.create({
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
  return /* @__PURE__ */ import_react52.default.createElement(import_react_native48.View, { style: styles3.wrapper }, /* @__PURE__ */ import_react52.default.createElement(
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
var import_react54 = __toESM(require("react"));
var import_react_native52 = require("react-native");

// src/components/SettingsMenu/components/SettingsMenuItem/SettingsMenuItem.tsx
var import_react53 = __toESM(require("react"));
var import_react_native50 = require("react-native");

// src/components/SettingsMenu/components/SettingsMenuItem/theme/useSettingsMenuItemTheme.ts
var import_react_native49 = require("react-native");
var useSettingsMenuItemTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native49.StyleSheet.create({
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
  return /* @__PURE__ */ import_react53.default.createElement(import_react_native50.TouchableOpacity, { style: styles3.container, onPress, activeOpacity: 0.6 }, /* @__PURE__ */ import_react53.default.createElement(SvgIcon, { name: iconName, size: "icon-size-xxl", color: "font-primary" }), /* @__PURE__ */ import_react53.default.createElement(Text, { fontSize: "font-size-lg", fontWeight: "medium", style: styles3.label }, label), /* @__PURE__ */ import_react53.default.createElement(SvgIcon, { name: "ChevronRight", size: "icon-size-lg", color: "font-primary" }));
};

// src/components/SettingsMenu/theme/useSettingsMenuTheme.ts
var import_react_native51 = require("react-native");
var useSettingsMenuTheme = () => {
  const theme = useBaseTheme();
  const styles3 = import_react_native51.StyleSheet.create({
    container: {
      gap: theme.spacing["spacing-md"]
    }
  });
  return { styles: styles3, theme };
};

// src/components/SettingsMenu/SettingsMenu.tsx
var SettingsMenu = ({ items }) => {
  const { styles: styles3 } = useSettingsMenuTheme();
  return /* @__PURE__ */ import_react54.default.createElement(import_react_native52.View, { style: styles3.container }, items.map((item) => /* @__PURE__ */ import_react54.default.createElement(
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
var import_react55 = __toESM(require("react"));
var import_react_native53 = require("react-native");
var TagButton = ({
  onPress,
  loading = false,
  disabled = false,
  iconName,
  ...tagProps
}) => {
  return /* @__PURE__ */ import_react55.default.createElement(import_react_native53.TouchableOpacity, { onPress, disabled: disabled || loading }, /* @__PURE__ */ import_react55.default.createElement(
    Tag,
    {
      ...tagProps,
      disabled,
      iconName: loading ? void 0 : iconName
    },
    loading ? /* @__PURE__ */ import_react55.default.createElement(ActivityIndicator, { size: "small", color: tagProps.color }) : tagProps.children
  ));
};

// src/components/LocationLabel/LocationLabel.tsx
var import_react56 = __toESM(require("react"));
var LocationLabel = ({ location, numberOfLines = 1, style }) => {
  return /* @__PURE__ */ import_react56.default.createElement(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActionModal,
  ActivityIndicator,
  AppleSignInButton,
  AuthModeToggle,
  AuthRequiredScreen,
  AvailabilityTag,
  BottomSheet,
  Button,
  Colors,
  ConcurrencyTag,
  ErrorBoundary,
  GoogleSignInButton,
  Icon,
  IconButton,
  Label,
  LoadErrorState,
  Loader,
  LocationLabel,
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
  useBaseTheme
});
//# sourceMappingURL=index.js.map