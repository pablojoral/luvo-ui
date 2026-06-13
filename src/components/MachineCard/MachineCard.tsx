import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { AvailabilityTag } from '../AvailabilityTag/AvailabilityTag';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { Text } from '../Text/Text';
import { useMachineCard } from './hooks/useMachineCard';
import { useMachineCardTheme } from './theme/useMachineCardTheme';
import type { MachineCardProps } from './types';

export const MachineCard = ({ machine, labels, onPress }: MachineCardProps) => {
  const { styles } = useMachineCardTheme();
  const { iconName, availabilityStatus, remainingTime, showTimer, chevronColor } = useMachineCard(
    machine,
    onPress,
  );

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      {/* TouchableOpacity used directly: MachineCard needs a full-bleed pressable container, not the label-centric Button API */}
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={onPress ? 0.7 : 1}
        disabled={!onPress}
      >
        <View style={styles.contentContainer}>
          <SvgIcon name={iconName} size="icon-size-xxxl" />
          <View style={styles.infoContainer}>
            <View style={styles.machineInfo}>
              <Text fontSize="font-size-lg" fontWeight="semibold">
                {labels.typeLabels[machine.type]} #{machine.number}
              </Text>
              {machine.capacity && (
                <Text fontSize="font-size-sm" color="font-light">
                  {machine.capacity}
                </Text>
              )}
            </View>
            <View style={styles.statusContainer}>
              <AvailabilityTag status={availabilityStatus} labels={labels.availability} />
              {showTimer && (
                <View style={styles.timerContainer}>
                  <SvgIcon name="Clock" size="icon-size-xs" color="font-light" />
                  <Text fontSize="font-size-sm" color="font-light">
                    {remainingTime}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
        <SvgIcon name="ChevronRight" size="icon-size-xxl" color={chevronColor} />
      </TouchableOpacity>
    </Animated.View>
  );
};
