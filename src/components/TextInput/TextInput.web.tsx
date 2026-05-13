import React from 'react';
import { useTextInput } from './hooks/useTextInput';
import { useTextInputTheme } from './theme/useTextInputTheme.web';
import { toPx } from '../../web/cssAdapter';
import type { TextInputProps } from './types';

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
  placeholder,
}: TextInputProps) => {
  const { containerStyle, inputWrapperStyle, inputStyle, footerStyle, theme } = useTextInputTheme({
    error: !!error,
    color,
    placeholderColor,
  });
  const { resolvedSecureTextEntry } = useTextInput(secureTextEntry);
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
          placeholder={placeholder}
          disabled={!editable}
          maxLength={maxLength}
          style={inputStyle}
        />
      </div>
      <div style={footerStyle}>
        {error ? <span style={errorStyle}>{error}</span> : null}
        {remaining !== undefined ? <span style={remainingStyle}>{remaining}</span> : null}
      </div>
    </div>
  );
};
