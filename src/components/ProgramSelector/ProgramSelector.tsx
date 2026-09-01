import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '../Text/Text';
import { useProgramSelectorTheme } from './theme/useProgramSelectorTheme';
import type { ProgramOption, ProgramSelectorProps } from './types';

const ProgramCard = ({
  option,
  selected,
  onPress,
}: {
  option:   ProgramOption;
  selected: boolean;
  onPress:  () => void;
}) => {
  const { styles, cardStyle } = useProgramSelectorTheme(selected);

  return (
    <TouchableOpacity style={cardStyle} onPress={onPress} activeOpacity={0.75}>
      <View style={styles.cardContent}>
        <Text fontSize="font-size-md" fontWeight="semibold">
          {option.label}
        </Text>
        <Text fontSize="font-size-sm" color="font-light">
          {option.duration}
        </Text>
        {option.price ? (
          <Text fontSize="font-size-sm" fontWeight="medium">
            {option.price}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export const ProgramSelector = ({ options, value, onChange }: ProgramSelectorProps) => {
  const { styles } = useProgramSelectorTheme(false);

  return (
    <View style={styles.row}>
      {options.map(option => (
        <ProgramCard
          key={option.value}
          option={option}
          selected={option.value === value}
          onPress={() => onChange(option.value)}
        />
      ))}
    </View>
  );
};
