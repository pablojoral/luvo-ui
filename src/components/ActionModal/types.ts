import type { IconName } from '../SvgIcon/types';

export interface ActionModalProps {
  readonly visible: boolean;
  readonly title: string;
  readonly body: string;
  readonly confirmLabel: string;
  readonly cancelLabel: string;
  readonly onConfirm: () => void;
  readonly onCancel: () => void;
  readonly variant?: 'destructive' | 'neutral';
  readonly icon?: IconName;
}
