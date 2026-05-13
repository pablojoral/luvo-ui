import React from 'react';
import { useTextInput } from './hooks/useTextInput';
import { useTextInputTheme } from './theme/useTextInputTheme.web';
import { toPx } from '../../web/cssAdapter';
import type { TextInputProps } from './types';

// Web-only extension: adds standard React focus event handlers.
interface WebTextInputProps extends TextInputProps {
  readonly onBlur?: React.FocusEventHandler<HTMLInputElement>;
  readonly onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

export const TextInput = ({
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
  placeholder,
}: WebTextInputProps) => {
  const { containerStyle, inputWrapperStyle, inputStyle, footerStyle, eyeButtonStyle, theme } = useTextInputTheme({
    error: !!error,
    color,
    placeholderColor,
  });

  const { isVisible, handleToggleVisibility, resolvedSecureTextEntry } = useTextInput(secureTextEntry);
  const remaining = maxLength !== undefined ? maxLength - (value?.length ?? 0) : undefined;

  const labelStyle: React.CSSProperties = {
    fontFamily: theme.fontFamily.poppins,
    fontSize: toPx(theme.fontSize['font-size-sm']),
    fontWeight: 600,
    color: theme.fontColor['font-primary'],
  };

  const errorStyle: React.CSSProperties = {
    flex: 1,
    fontFamily: theme.fontFamily.poppins,
    fontSize: toPx(theme.fontSize['font-size-xs']),
    color: theme.fontColor['font-error'],
  };

  const remainingStyle: React.CSSProperties = {
    fontFamily: theme.fontFamily.poppins,
    fontSize: toPx(theme.fontSize['font-size-xs']),
    color: theme.fontColor['font-placeholder'],
  };

  return (
    <div style={containerStyle}>
      {label ? <label style={labelStyle}>{label}</label> : null}
      <div style={inputWrapperStyle}>
        <input
          type={resolvedSecureTextEntry ? 'password' : 'text'}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeText?.(e.currentTarget.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          disabled={!editable}
          maxLength={maxLength}
          style={inputStyle}
        />
        {secureTextEntry ? (
          <button
            type="button"
            onClick={handleToggleVisibility}
            style={eyeButtonStyle}
            aria-label={isVisible ? 'Hide password' : 'Show password'}
          >
            {isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </button>
        ) : null}
      </div>
      <div style={footerStyle}>
        {error ? <span style={errorStyle}>{error}</span> : null}
        {remaining !== undefined ? <span style={remainingStyle}>{remaining}</span> : null}
      </div>
    </div>
  );
};

// Minimal inline SVG eye icons — no external dep required for web
const EyeOpenIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <ellipse cx="9" cy="9" rx="7" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="9" r="2" fill="currentColor" />
  </svg>
);

const EyeClosedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M2 9c1.5-4 11.5-4 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="4" y1="13" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="9" y1="14" x2="9" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="13" x2="12.5" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
