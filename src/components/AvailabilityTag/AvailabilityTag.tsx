import React from 'react';
import { Tag } from '../Tag/Tag';
import { useAvailabilityTag } from './hooks/useAvailabilityTag';
import type { AvailabilityTagProps } from './types';

export const AvailabilityTag = ({ status, labels }: AvailabilityTagProps) => {
  const { label, color, surfaceColor } = useAvailabilityTag({ status, labels });

  return (
    <Tag color={color} surfaceColor={surfaceColor} fontWeight="semibold">
      {label}
    </Tag>
  );
};
