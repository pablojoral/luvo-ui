import { useCallback, useEffect, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { SelectorOption } from '../../PillSelector/types';

interface UseSelectInputParams {
  readonly value: string;
  readonly options: SelectorOption[];
  readonly onChange: (value: string) => void;
}

export const useSelectInput = ({ value, options, onChange }: UseSelectInputParams) => {
  const [modalVisible, setModalVisible] = useState(false);

  const selectedLabel = options.find(o => o.value === value)?.label;

  const showModal = useCallback(() => setModalVisible(true), []);
  const hideModal = useCallback(() => setModalVisible(false), []);

  const select = useCallback(
    (val: string) => {
      onChange(val);
      setModalVisible(false);
    },
    [onChange],
  );

  const rotation = useSharedValue(0);
  useEffect(() => {
    rotation.value = withTiming(modalVisible ? 90 : 0, { duration: 180 });
  }, [modalVisible, rotation]);

  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return { modalVisible, showModal, hideModal, select, selectedLabel, chevronStyle };
};
