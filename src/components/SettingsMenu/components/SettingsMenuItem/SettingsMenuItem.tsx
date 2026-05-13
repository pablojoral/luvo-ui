import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgIcon } from '../../../SvgIcon/SvgIcon';
import { Text } from '../../../Text/Text';
import { useSettingsMenuItemTheme } from './theme/useSettingsMenuItemTheme';
import type { SettingsMenuItemData } from '../../types';

interface SettingsMenuItemProps {
  readonly label: string;
  readonly iconName: SettingsMenuItemData['iconName'];
  readonly onPress: () => void;
}

export const SettingsMenuItem = ({ label, iconName, onPress }: SettingsMenuItemProps) => {
  const { styles } = useSettingsMenuItemTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.6}>
      <SvgIcon name={iconName} size="icon-size-xxl" color="font-primary" />
      <Text fontSize="font-size-lg" fontWeight="medium" style={styles.label}>
        {label}
      </Text>
      <SvgIcon name="ChevronRight" size="icon-size-lg" color="font-primary" />
    </TouchableOpacity>
  );
};
