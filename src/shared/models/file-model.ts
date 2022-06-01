import { AbstractControl } from '@angular/forms';
import { IAppControl, IAppInput } from '.';
import { sharedConts } from '..';
import {
  AppControlAppearance,
  Appframework,
  FormControlType,
} from './control-model';

export interface IAppFile extends IAppControl {
  accept?: string;
  valueText?: string;
}

export class AppFile implements IAppFile {
  constructor(entity?: IAppInput) {
    this.valueText = '';
    this.type = sharedConts.forms.controls.input.type;
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  
  }
  valueText?: string;
  min?: number | undefined;
  max?: number | undefined;
  maxlength?: number | undefined;
  minlength?: number | undefined;
  placeholder?: string | undefined;
  appearance?: AppControlAppearance | undefined;
  disabled?: boolean | undefined;
  value?: any;
  label?: string | undefined;
  inline?: boolean | undefined;
  required?: boolean | undefined;
  patternError?: string | undefined;
  class?: string | undefined;
  type: FormControlType;
  framework?: Appframework | undefined;
  formControlName?: string | undefined;
  validators?: any[] | undefined;
  formControl?: AbstractControl | undefined;
  updateOn?: 'change' | 'blur' | 'submit' | undefined;
  accept?: string;
}
