export interface ProgramOption {
  value:    string;
  label:    string;
  duration: string;
  price:    string | null;
}

export interface ProgramSelectorProps {
  options:  ProgramOption[];
  value:    string | null;
  onChange: (value: string) => void;
}
