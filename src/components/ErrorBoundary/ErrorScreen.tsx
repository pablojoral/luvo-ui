import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Button } from '../Button/Button';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { Text } from '../Text/Text';
import { useErrorScreenTheme } from './theme/useErrorScreenTheme';

export interface ErrorScreenProps {
  readonly onReset: () => void;
  /** Title to display — e.g. "Something went wrong". */
  readonly title: string;
  /** Body message. */
  readonly body: string;
  /** Label for the retry button. */
  readonly retryLabel: string;
}

export const ErrorScreen = ({ onReset, title, body, retryLabel }: ErrorScreenProps) => {
  const { styles } = useErrorScreenTheme();
  const handleRetry = useCallback(() => onReset(), [onReset]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SvgIcon name="AlertTriangle" size="icon-size-xxxxxxl" color="font-error" />
        <Text fontSize="font-size-lg" fontWeight="semibold" color="font-primary">
          {title}
        </Text>
        <Text fontSize="font-size-sm" color="font-secondary" textAlign="center">
          {body}
        </Text>
      </View>
      <Button label={retryLabel} onPress={handleRetry} variant="primary" size="md" />
    </View>
  );
};
