import React from 'react';
import { Tag } from '../Tag/Tag';
import { useTimeTag } from './hooks/useTimeTag';
import type { TimeTagProps } from './types';

export const TimeTag = ({ seconds, extended = false, endsInLabel = '' }: TimeTagProps) => {
  const { displayTime } = useTimeTag({ seconds, extended, endsInLabel });

  return (
    <Tag
      color="font-primary"
      surfaceColor="surface-primary"
      fontWeight="semibold"
      iconName="Clock"
      iconSize="icon-size-xs"
    >
      {displayTime}
    </Tag>
  );
};
