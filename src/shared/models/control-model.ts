import { AbstractControl } from '@angular/forms';
import {
  AppAutocomplete,
  AppDate,
  AppInput,
  AppSelect,
  AppTextArea,
  IAppFormControl,
  sharedConts,
} from '..';

export type ControlType =
  | AppInput
  | AppSelect
  | AppDate
  | AppTextArea
  | AppAutocomplete;
export type FormControlType =
  | 'text'
  | 'select'
  | 'number'
  | 'checkbox'
  | 'password'
  | 'radio'
  | 'file'
  | 'date'
  | 'textarea'
  | 'autocomplete'
  | 'chips';
export type Appframework = 'material' | 'bootstrap';
export type AppControlAppearance = 'legacy' | 'outline';
export interface IAppControl extends IAppFormControl {
  placeholder?: string;
  appearance?: AppControlAppearance;
  disabled?: boolean;
  value?: any;
  label?: string;
  inline?: boolean;
  required?: boolean;
  patternError?: string;
  class?: string;
  type: FormControlType;
  framework?: Appframework;
  accept?: string;
}

export class AppControl {
  framework?: Appframework = sharedConts.forms.framework;
  constructor(entity?: IAppControl) {
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  }
}
