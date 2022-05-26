export interface InputProperties {
  placeholder?: string;
  disabled?: boolean;
  value?: any;
  class?: string;
  label?: string;
  inline?: boolean;
  required?: boolean;
  patternError?: string;
}
export interface TextAreaProperties extends InputProperties {
  rows?: number;
}
export interface DateProperties extends InputProperties {
  min?: string;
  max?: string;
}
export interface SelectProperties extends InputProperties {
  items?: SelectItemProperties[];
}
export interface SelectItemProperties {
  label: string;
  value: any;
}
