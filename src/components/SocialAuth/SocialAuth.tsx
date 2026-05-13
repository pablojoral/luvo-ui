import React from 'react';
import { View } from 'react-native';
import { AppleSignInButton } from '../AppleSignInButton/AppleSignInButton';
import { GoogleSignInButton } from '../GoogleSignInButton/GoogleSignInButton';
import { Text } from '../Text/Text';
import { useSocialAuthTheme } from './theme/useSocialAuthTheme';
import type { SocialAuthProps } from './types';

export const SocialAuth = ({
  onSignIn,
  disabled,
  submitting,
  showApple,
  error,
  dividerLabel,
  googleLabel,
  appleLabel,
}: SocialAuthProps) => {
  const { styles } = useSocialAuthTheme();

  return (
    <View style={styles.container}>
      {error && (
        <Text fontSize="font-size-xs" color="font-error">
          {error}
        </Text>
      )}
      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <Text fontSize="font-size-xs" color="font-secondary">
          {dividerLabel}
        </Text>
        <View style={styles.dividerLine} />
      </View>
      <View style={styles.buttonsRow}>
        <GoogleSignInButton
          label={googleLabel}
          onPress={() => onSignIn('google')}
          disabled={disabled}
          submitting={submitting}
        />
        {showApple && (
          <AppleSignInButton
            label={appleLabel}
            onPress={() => onSignIn('apple')}
            disabled={disabled}
            submitting={submitting}
          />
        )}
      </View>
    </View>
  );
};
