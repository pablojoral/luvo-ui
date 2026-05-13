import React from 'react';
import { useBaseTheme } from '../../theme/useBaseTheme';
import { useButtonTheme } from './theme/useButtonTheme.web';
import {
  fontSizeMap,
  fontWeightMap,
  textColorMap,
  textDecorationMap,
} from './hooks/useButton';
import { CSS_FONT_WEIGHT } from '../Text/hooks/useText';
import { toPx } from '../../web/cssAdapter';
import type { ButtonProps } from './types';

export const Button = ({
  label,
  variant = 'primary',
  size = 'md',
  // iconName is accepted for API parity but not rendered on web (no react-native-svg)
  iconName: _iconName,
  onPress,
  fullWidth,
  alignLeft,
  disabled,
  submitting,
  stale,
  rounded,
}: ButtonProps) => {
  const theme = useBaseTheme();
  const isDisabled = disabled || stale || submitting;
  const { containerStyle, buttonStyle } = useButtonTheme({
    variant,
    size,
    fullWidth,
    alignLeft,
    rounded,
    disabled: isDisabled,
  });

  const textDecoration = textDecorationMap[variant];
  const fontWeight = fontWeightMap[variant][size];
  const fontSize = fontSizeMap[size];
  const color = textColorMap[variant];

  const textStyle: React.CSSProperties = {
    fontFamily: theme.fontFamily.poppins,
    fontWeight: CSS_FONT_WEIGHT[fontWeight],
    fontSize: toPx(theme.fontSize[fontSize]),
    color: theme.fontColor[color],
    ...(textDecoration ? { textDecoration } : {}),
  };

  return (
    <div style={containerStyle}>
      <button
        type="button"
        disabled={isDisabled}
        onClick={onPress}
        style={buttonStyle}
      >
        {submitting ? (
          <SpinnerIcon color={theme.fontColor[color]} />
        ) : (
          label ? <span style={textStyle}>{label}</span> : null
        )}
      </button>
    </div>
  );
};

// Inline SVG spinner — no external dep required for web
interface SpinnerIconProps {
  readonly color: string;
}

const SpinnerIcon = ({ color }: SpinnerIconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    style={{ animation: 'luvo-spin 0.8s linear infinite' }}
  >
    <style>{`@keyframes luvo-spin { to { transform: rotate(360deg); } }`}</style>
    <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="2" strokeOpacity="0.25" />
    <path
      d="M14 8a6 6 0 0 0-6-6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
