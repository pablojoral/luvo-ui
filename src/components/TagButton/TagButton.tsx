import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { Tag } from '../Tag/Tag';
import type { TagButtonProps } from './types';

export const TagButton = ({
  onPress,
  loading = false,
  disabled = false,
  iconName,
  ...tagProps
}: TagButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled || loading}>
      <Tag
        {...tagProps}
        disabled={disabled}
        iconName={loading ? undefined : iconName}
      >
        {loading ? <ActivityIndicator size="small" color={tagProps.color} /> : tagProps.children}
      </Tag>
    </TouchableOpacity>
  );
};
