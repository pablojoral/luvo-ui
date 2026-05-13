import React from 'react';
import { View } from 'react-native';
import { SettingsMenuItem } from './components/SettingsMenuItem/SettingsMenuItem';
import { useSettingsMenuTheme } from './theme/useSettingsMenuTheme';
import type { SettingsMenuProps } from './types';

export const SettingsMenu = ({ items }: SettingsMenuProps) => {
  const { styles } = useSettingsMenuTheme();

  return (
    <View style={styles.container}>
      {items.map(item => (
        <SettingsMenuItem
          key={item.label}
          label={item.label}
          iconName={item.iconName}
          onPress={item.onPress}
        />
      ))}
    </View>
  );
};
