import React from 'react';
import { Pressable } from 'react-native';
import { MarkerView } from '@rnmapbox/maps';

import { useLaundryMapMarker } from './hooks/useLaundryMapMarker';
import { useLaundryMapMarkerTheme } from './theme/useLaundryMapMarkerTheme';
import { PinSvg } from './components/PinSvg';
import type { LaundryMapMarkerProps } from './types';

export const LaundryMapMarker = ({
  laundry,
  uniqueId,
  size = 40,
  showAvailability = false,
  onPress,
}: LaundryMapMarkerProps) => {
  const { wrapperStyle } = useLaundryMapMarkerTheme();
  const { ratio, coords, accessibilityLabel } = useLaundryMapMarker({ laundry, showAvailability });

  return (
    <MarkerView key={uniqueId} id={uniqueId} coordinate={coords}>
      <Pressable
        onPress={onPress}
        style={wrapperStyle}
        accessible
        accessibilityLabel={accessibilityLabel}
      >
        <PinSvg ratio={ratio} size={size} />
      </Pressable>
    </MarkerView>
  );
};
