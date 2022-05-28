import { AbstractControl } from '@angular/forms';
import { IAppControl } from '.';
import { sharedConts } from '..';
import { AppControlAppearance, Appframework, FormControlType } from './control-model';

export interface IAppTextArea extends IAppControl {
  rows?: number;
}

export class AppTextArea implements IAppTextArea {
  constructor(entity?: IAppTextArea) {
    this.type = 'textarea';
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  }
  appearance?: AppControlAppearance;
  framework?: Appframework = sharedConts.forms.framework;
  formControlName?: string | undefined;
  validators?: any[] | undefined;
  formControl?: AbstractControl | undefined;
  updateOn?: 'change' | 'blur' | 'submit' | undefined;
  rows?: number | undefined;
  placeholder?: string | undefined;
  disabled?: boolean | undefined;
  value?: any;
  label?: string | undefined;
  inline?: boolean | undefined;
  required?: boolean | undefined;
  patternError?: string | undefined;
  class?: string | undefined;
  type: FormControlType;
}
