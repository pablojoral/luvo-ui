import React from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import { useActivityIndicator } from './hooks/useActivityIndicator';
import type { ActivityIndicatorProps } from './types';

export const ActivityIndicator = ({ color = 'font-primary', size = 'small' }: ActivityIndicatorProps) => {
  const { resolvedColor } = useActivityIndicator({ color });

  return <RNActivityIndicator color={resolvedColor} size={size} />;
};
