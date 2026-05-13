import Ionicon from 'react-native-vector-icons/Ionicons';
import { useBaseTheme } from '../../theme/useBaseTheme';
import type { IconProps } from './types';

export const Icon = ({ name, size = 'font-size-md', color = 'font-primary' }: IconProps) => {
  const theme = useBaseTheme();
  return <Ionicon name={name} size={theme.fontSize[size]} color={theme.fontColor[color]} />;
};
