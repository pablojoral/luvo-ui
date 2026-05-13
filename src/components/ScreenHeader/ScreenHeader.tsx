import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from '../IconButton/IconButton';
import { Text } from '../Text/Text';
import { useScreenHeaderTheme } from './theme/useScreenHeaderTheme';
import type { ScreenHeaderProps } from './types';

export const ScreenHeader = ({
  title,
  subtitle,
  hideBack,
  onBack,
  backAccessibilityLabel = 'Back',
}: ScreenHeaderProps) => {
  const navigation = useNavigation();
  const { styles } = useScreenHeaderTheme();

  const handleBack = onBack ?? (() => navigation.goBack());

  return (
    <View style={styles.container}>
      {!hideBack ? (
        <IconButton
          iconName="ChevronLeft"
          iconSize="icon-size-lg"
          onPress={handleBack}
          accessibilityLabel={backAccessibilityLabel}
        />
      ) : null}
      <View style={styles.titleGroup}>
        <Text fontSize="font-size-xxl" fontWeight="bold">
          {title}
        </Text>
        {subtitle ? (
          <Text fontSize="font-size-sm" color="font-secondary">
            {subtitle}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
