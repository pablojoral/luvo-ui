import React from 'react';
import { Pressable } from 'react-native';
import { SvgIcon } from '../../../SvgIcon/SvgIcon';
import { Text } from '../../../Text/Text';
import type { SelectorOption } from '../../../PillSelector/types';
import { useSelectInputOptionTheme } from './theme/useSelectInputOptionTheme';

interface SelectInputOptionProps {
  readonly option: SelectorOption;
  readonly selected: boolean;
  readonly isLast: boolean;
  readonly onPress: () => void;
}

export const SelectInputOption = ({ option, selected, isLast, onPress }: SelectInputOptionProps) => {
  const { containerStyle } = useSelectInputOptionTheme(selected, isLast);

  return (
    <Pressable style={containerStyle} onPress={onPress}>
      <Text
        fontSize="font-size-sm"
        color={selected ? 'font-primary' : 'font-secondary'}
        fontWeight={selected ? 'semibold' : 'regular'}
      >
        {option.label}
      </Text>
      {selected && <SvgIcon name="Check" size="icon-size-sm" color="font-highlight" />}
    </Pressable>
  );
};
