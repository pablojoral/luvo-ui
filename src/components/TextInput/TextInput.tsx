import React from 'react';
import { TouchableOpacity, View, TextInput as RNTextInput } from 'react-native';
import type { TextInputProps as RNTextInputProps, StyleProp, TextStyle } from 'react-native';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { useTextInput } from './hooks/useTextInput';
import { useTextInputTheme } from './theme/useTextInputTheme';
import type { TextInputProps } from './types';

// RN-only extension: accepts all RNTextInputProps in addition to the platform-neutral props.
interface RNTextInputComponentProps extends TextInputProps, Omit<RNTextInputProps, keyof TextInputProps> {
  readonly style?: StyleProp<TextStyle>;
}

export const TextInput = ({
  label,
  error,
  color,
  placeholderColor,
  style,
  maxLength,
  value,
  secureTextEntry,
  ...rest
}: RNTextInputComponentProps) => {
  const { styles, placeholderTextColor } = useTextInputTheme({ error: !!error, color, placeholderColor });
  const { isVisible, handleToggleVisibility, resolvedSecureTextEntry } = useTextInput(secureTextEntry);
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
          style={[styles.input, style]}
          placeholderTextColor={placeholderTextColor}
          maxLength={maxLength}
          value={value}
          secureTextEntry={resolvedSecureTextEntry}
          {...rest}
        />
        {secureTextEntry ? (
          <TouchableOpacity onPress={handleToggleVisibility} style={styles.eyeButton}>
            <Icon name={isVisible ? 'eye-outline' : 'eye-off-outline'} size="font-size-xl" color="font-placeholder" />
          </TouchableOpacity>
        ) : null}
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
