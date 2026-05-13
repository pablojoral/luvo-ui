export type MachineStatus = 'available' | 'in_use' | 'out_of_order' | 'maintenance';
export type MachineType = 'washing_machine' | 'dryer';

export interface LaundryMachine {
  id: number;
  status: MachineStatus;
  type: MachineType;
}

export interface LaundryLocation {
  latitude: string | null;
  longitude: string | null;
}

export interface LaundryMarkerData {
  id: number;
  location: LaundryLocation;
  machines?: LaundryMachine[];
}

export interface LaundryMapMarkerProps {
  readonly laundry: LaundryMarkerData;
  /** Unique string identifier passed to MapboxGL MarkerView's id prop. */
  readonly uniqueId: string;
  /** Diameter of the pin in logical pixels. Defaults to 40. */
  readonly size?: number;
  /** When true, fill represents availability; otherwise represents occupation. */
  readonly showAvailability?: boolean;
  readonly onPress?: () => void;
}
