import React from 'react';
import { Label } from '../Label/Label';
import type { LocationLabelProps } from './types';

export const LocationLabel = ({ location, numberOfLines = 1, style }: LocationLabelProps) => {
  return (
    <Label
      iconName="MapPin"
      iconSize="icon-size-sm"
      color="font-placeholder"
      fontSize="font-size-sm"
      numberOfLines={numberOfLines}
      style={style}
    >
      {location}
    </Label>
  );
};
