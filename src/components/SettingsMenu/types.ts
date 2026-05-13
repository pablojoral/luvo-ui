import type { IconName } from '../SvgIcon/types';

export interface SettingsMenuItemData {
  readonly label: string;
  readonly iconName: IconName;
  readonly onPress: () => void;
}

export interface SettingsMenuProps {
  readonly items: SettingsMenuItemData[];
}
