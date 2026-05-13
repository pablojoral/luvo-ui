import React from 'react';
import { View } from 'react-native';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { useLoadErrorStateTheme } from './theme/useLoadErrorStateTheme';
import type { LoadErrorStateProps } from './types';

export const LoadErrorState = ({ message, title, retryLabel, onRetry, logo }: LoadErrorStateProps) => {
  const { styles } = useLoadErrorStateTheme();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {logo ?? null}
        <Text fontSize="font-size-lg" fontWeight="semibold" color="font-primary">
          {title}
        </Text>
        <Text fontSize="font-size-sm" color="font-secondary" textAlign="center">
          {message}
        </Text>
      </View>
      <Button label={retryLabel} variant="primary" size="md" onPress={onRetry} />
    </View>
  );
};
