import React from 'react';
import { View } from 'react-native';
import { ScreenHeader } from '../ScreenHeader/ScreenHeader';
import { useSafeScreenHeaderTheme } from './theme/useSafeScreenHeaderTheme';
import type { SafeScreenHeaderProps } from './types';

export const SafeScreenHeader = ({
  title,
  subtitle,
  hideBack,
  onBack,
  backAccessibilityLabel,
}: SafeScreenHeaderProps) => {
  const { styles } = useSafeScreenHeaderTheme();

  return (
    <View style={styles.wrapper}>
      <ScreenHeader
        title={title}
        subtitle={subtitle}
        hideBack={hideBack}
        onBack={onBack}
        backAccessibilityLabel={backAccessibilityLabel}
      />
    </View>
  );
};
