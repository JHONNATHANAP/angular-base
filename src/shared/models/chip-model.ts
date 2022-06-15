import { AbstractControl } from '@angular/forms';
import { IAppControl } from '.';
import { sharedConts } from '..';
import {
  AppControlAppearance,
  Appframework,
  FormControlType,
} from './control-model';

export interface IAppChip extends IAppControl {
  min?: number;
  max?: number;
  maxlength?: number;
  minlength?: number;
  chipType?: 'text' | 'number' | 'date' | 'email';
}

export class AppChip implements IAppChip {
  constructor(entity?: IAppChip) {
    this.type = sharedConts.forms.controls.input.type;
    this.chipType = 'text';
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] || entity[e] == false ? entity[e] : this[e];
    });
    this.disabled = entity.disabled;
  }
  chipType?: 'number' | 'text' | 'date';
  appearance?: AppControlAppearance;
  framework?: Appframework = sharedConts.forms.framework;
  formControlName?: string | undefined;
  validators?: any[] | undefined;
  formControl?: AbstractControl | undefined;
  updateOn?: 'change' | 'blur' | 'submit' | undefined;
  min?: number | undefined;
  max?: number | undefined;
  maxlength?: number | undefined;
  minlength?: number | undefined;
  placeholder?: string | undefined;
  disabled?: boolean | undefined;
  value?: any;
  label?: string | undefined;
  inline?: boolean | undefined;
  required?: boolean | undefined;
  patternError?: string | undefined;
  class?: string | undefined;
  type: FormControlType;
  accept?: string;
}
