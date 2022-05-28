import { IAppControl } from '.';
import { AppControlAppearance, Appframework, FormControlType } from './control-model';

export interface IAppDate extends IAppControl {
  min?: string;
  max?: string;
}

export class AppDate implements IAppDate {
  min?: string | undefined;
  max?: string | undefined;
  placeholder?: string | undefined;
  disabled?: boolean | undefined;
  value?: any;
  label?: string | undefined;
  inline?: boolean | undefined;
  required?: boolean | undefined;
  patternError?: string | undefined;
  class?: string | undefined;
  type: FormControlType;
  framework?: Appframework ;
  appearance?: AppControlAppearance;
  constructor(entity?: IAppDate) {
    this.type = 'date';
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
   
  }
 
}
