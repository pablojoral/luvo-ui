import React from 'react';
import { useActivityIndicator } from './hooks/useActivityIndicator';
import type { ActivityIndicatorProps } from './types';

// SVG spinner — no external dep required for web.
// The animation is injected inline via a <style> tag scoped by a unique keyframe name.
export const ActivityIndicator = ({ color = 'font-primary', size = 'small' }: ActivityIndicatorProps) => {
  const { resolvedColor } = useActivityIndicator({ color });
  const px = size === 'large' ? 36 : 20;

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 36 36"
      fill="none"
      style={{ animation: 'luvo-spin 0.8s linear infinite' }}
      aria-label="Loading"
      role="status"
    >
      <style>{`@keyframes luvo-spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="18" cy="18" r="14" stroke={resolvedColor} strokeWidth="3" strokeOpacity="0.25" />
      <path
        d="M32 18a14 14 0 0 0-14-14"
        stroke={resolvedColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
