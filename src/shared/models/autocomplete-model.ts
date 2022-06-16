import { AbstractControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { IAppControl } from '.';
import { sharedConts } from '..';
import {
  AppControlAppearance,
  Appframework,
  FormControlType,
} from './control-model';
export interface IAppAutoCompleteOption {
  label: string;
  value: any;
}
export class AppAutoCompleteOption implements IAppAutoCompleteOption {
  label: string;
  value: any;
  constructor(entity?: IAppAutoCompleteOption) {
    this.label = '';
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] !== null ? entity[e] : this[e];
    });
  }
}
export interface IAppAutocomplete extends IAppControl {
  min?: number;
  max?: number;
  maxlength?: number;
  minlength?: number;
  chipType?: 'text' | 'number' | 'date' | 'email';
  multiple?: boolean;
  searchable?: boolean;

  items?: AppAutocompleteItems;
}

export class AppAutocomplete implements IAppAutocomplete {
  constructor(entity?: IAppAutocomplete) {
    this.type = sharedConts.forms.controls.input.type;
    this.chipType = 'text';
    this.searchable = true;
    this.items = new AppAutocompleteItems();
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] !== null ? entity[e] : this[e];
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
  multiple?: boolean;
  searchable?: boolean;
  items?: AppAutocompleteItems;
}
export class AppAutocompleteItems {
  private subSearch = new Subject<string>();
  items: AppAutoCompleteOption[] = [];
  constructor(items?: AppAutoCompleteOption[]) {
    this.items = items ? items : [];
  }
  keyUp(data: any) {
    this.subSearch.next(data);
  }
  onSearch(): Observable<string> {
    return this.subSearch.asObservable();
  }
}
