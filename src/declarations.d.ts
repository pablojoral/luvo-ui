declare module '*.svg' {
  import React from 'react';
  import type { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

// @rnmapbox/maps is an optional peer dependency (native maps SDK).
// The full types are provided at runtime by the consuming app.
declare module '@rnmapbox/maps' {
  import React from 'react';

  interface MarkerViewProps {
    id: string;
    coordinate: [number, number];
    key?: string;
    children?: React.ReactNode;
  }

  export const MarkerView: React.ComponentType<MarkerViewProps>;
}
