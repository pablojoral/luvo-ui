import React from 'react';
import { View } from 'react-native';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { useAuthRequiredScreenTheme } from './theme/useAuthRequiredScreenTheme';
import type { AuthRequiredScreenProps } from './types';

export const AuthRequiredScreen = ({
  subtitle,
  defaultSubtitle,
  title,
  signInLabel,
  onSignIn,
  logo,
}: AuthRequiredScreenProps) => {
  const { styles } = useAuthRequiredScreenTheme();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {logo ?? null}
        <Text fontSize="font-size-lg" fontWeight="semibold">
          {title}
        </Text>
        <Text color="font-light" fontSize="font-size-sm">
          {subtitle ?? defaultSubtitle}
        </Text>
      </View>
      <Button label={signInLabel} onPress={onSignIn} />
    </View>
  );
};
