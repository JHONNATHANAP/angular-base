import { AbstractControl, Validators } from '@angular/forms';
import { ButtonProperties } from './buttons-model';
import {
  DateProperties,
  InputProperties,
  SelectProperties,
  TextAreaProperties,
} from './controls-model';

export interface FormFieldProperties extends InputProperties {
  formControl: AbstractControl;
}

export interface FormButton {
  label?: string;
  show?: boolean;
  class?: string;
  properties: ButtonProperties;
}
export interface FormControlProperties {
  class?: string;
  formControlName: string;
  type?: FormControlType;
  control: ControlType;
  validators?: any[];
}

export interface FormGenericProperties {
  controls: FormControlProperties[];
  headerTemplate?: any;
  footerTemplate?: any;
  submit: FormButton;
  clean: FormButton;
  class?: string;
}
export type ControlType =
  | InputProperties
  | SelectProperties
  | DateProperties
  | TextAreaProperties;
export type FormControlType =
  | 'text'
  | 'select'
  | 'number'
  | 'checkbox'
  | 'radio'
  | 'date'
  | 'textarea';
