import React from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import { Text } from '../Text/Text';
import { useTextInput } from './hooks/useTextInput';
import { useTextInputTheme } from './theme/useTextInputTheme';
import type { TextInputProps } from './types';

export const TextInput = ({
  label,
  error,
  color,
  placeholderColor,
  value,
  secureTextEntry,
  editable,
  maxLength,
  onChangeText,
  placeholder,
}: TextInputProps) => {
  const { styles, placeholderTextColor } = useTextInputTheme({ error: !!error, color, placeholderColor });
  const { resolvedSecureTextEntry } = useTextInput(secureTextEntry);
  const remaining = maxLength !== undefined ? maxLength - (value?.length ?? 0) : undefined;

  return (
    <View style={styles.container}>
      {label ? (
        <Text fontSize="font-size-sm" fontWeight="semibold">
          {label}
        </Text>
      ) : null}
      <View style={styles.inputWrapper}>
        <RNTextInput
          style={styles.input}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={resolvedSecureTextEntry}
          editable={editable}
          maxLength={maxLength}
        />
      </View>
      <View style={styles.footer}>
        {error ? (
          <Text fontSize="font-size-xs" color="font-error" style={styles.errorText}>
            {error}
          </Text>
        ) : null}
        {remaining !== undefined ? (
          <Text fontSize="font-size-xs" color="font-placeholder">
            {remaining}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
