import React from 'react';
import { Pressable, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { BottomSheet } from '../BottomSheet/BottomSheet';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { Text } from '../Text/Text';
import { SelectInputOption } from './components/SelectInputOption/SelectInputOption';
import { useSelectInput } from './hooks/useSelectInput';
import { useSelectInputTheme } from './theme/useSelectInputTheme';
import type { SelectInputProps } from './types';

export const SelectInput = ({
  label,
  placeholder,
  value,
  options,
  onChange,
  error,
  disabled,
}: SelectInputProps) => {
  const { styles } = useSelectInputTheme({ error: !!error, disabled });
  const { modalVisible, showModal, hideModal, select, selectedLabel, chevronStyle } = useSelectInput({
    value,
    options,
    onChange,
  });

  return (
    <View style={styles.container}>
      {label && (
        <Text fontSize="font-size-sm" fontWeight="semibold">
          {label}
        </Text>
      )}
      <Pressable style={styles.trigger} onPress={disabled ? undefined : showModal}>
        <Text
          fontSize="font-size-md"
          color={selectedLabel ? 'font-primary' : 'font-placeholder'}
        >
          {selectedLabel ?? placeholder ?? ''}
        </Text>
        <Animated.View style={chevronStyle}>
          <SvgIcon name="ChevronRight" size="icon-size-md" color="font-secondary" />
        </Animated.View>
      </Pressable>

      <BottomSheet visible={modalVisible} onClose={hideModal} title={label}>
        <View style={styles.optionsList}>
          {options.map((option, idx) => (
            <SelectInputOption
              key={option.value}
              option={option}
              selected={value === option.value}
              isLast={idx === options.length - 1}
              onPress={() => select(option.value)}
            />
          ))}
        </View>
      </BottomSheet>

      {error && (
        <View style={styles.footer}>
          <Text fontSize="font-size-xs" color="font-error">
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};
