import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text/Text';
import { useAuthModeToggleTheme } from './theme/useAuthModeToggleTheme';
import type { AuthModeToggleProps } from './types';

export const AuthModeToggle = ({ promptLabel, linkLabel, onPress, disabled }: AuthModeToggleProps) => {
  const { styles } = useAuthModeToggleTheme();

  return (
    <TouchableOpacity
      style={styles.row}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={linkLabel}
      accessibilityRole="button"
    >
      <Text fontSize="font-size-sm" color="font-light">
        {promptLabel}
      </Text>
      <Text fontSize="font-size-sm" color="font-highlight" fontWeight="semibold">
        {linkLabel}
      </Text>
    </TouchableOpacity>
  );
};
