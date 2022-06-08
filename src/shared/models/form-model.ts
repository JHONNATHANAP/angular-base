import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import moment from 'moment';
import { Observable, Subject } from 'rxjs';
import {
  ControlType,
  IAppButton,
  IAppControl,
  IAppDate,
  IAppInput,
  IAppSelect,
  IAppSelectOption,
  IAppTextArea,
} from '.';
import { sharedConts } from '..';
import {
  markFormGroupTouched,
  markFormGroupUnTouched,
} from '../modules/forms/form';
import { AppButton, ButtonType, IAppColorButton } from './button-model';
import {
  AppControlAppearance,
  Appframework,
  FormControlType,
} from './control-model';

export interface IAppFormButton extends IAppButton {
  label?: string;
  show?: boolean;
}

export class AppFormButton implements IAppFormButton {
  label?: string;
  show?: boolean;
  type?: ButtonType | undefined;
  class?: string;
  data?: any;
  color?: IAppColorButton;
  constructor(entity?: IAppFormButton) {
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  }

  public basicButton(): AppButton {
    let buttonBasic: AppButton = new AppButton({
      class: this.class,
      data: this.data,
      type: this.type,
      color: this.color,
    });
    return buttonBasic;
  }
}

export interface IAppFormGeneric {
  controls: AllControls[];
  submit?: IAppFormButton;
  clean?: IAppFormButton;
  class?: string;
  updateOn?: 'change' | 'blur' | 'submit';
  framework?: Appframework;
}

export type AllControls = IAppInput | IAppSelect | IAppDate | IAppTextArea;

export interface IAppFormControl {
  formControlName?: string;
  validators?: any[];
  formControl?: AbstractControl;
  updateOn?: 'change' | 'blur' | 'submit';
}

export class AppFormControl
  implements IAppFormControl, IAppInput, IAppSelect, IAppDate, IAppTextArea
{
  formControlName: string;
  validators?: any[];
  formControl?: AbstractControl;
  placeholder?: string;
  disabled?: boolean;
  value?: any;
  label?: string;
  inline?: boolean;
  required?: boolean;
  patternError?: string;
  options?: IAppSelectOption[] | undefined;
  class?: string;
  valueText?: string;
  type: FormControlType;
  updateOn?: 'change' | 'blur' | 'submit';
  appearance?: AppControlAppearance;
  framework?: Appframework = sharedConts.forms.framework;
  constructor(entity: AllControls) {
    this.appearance = sharedConts.forms.controls.appearance;
    this.formControlName = entity.formControlName ? entity.formControlName : '';
    this.type = entity.type;
    this.value = null;
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  }

  public hasError(): boolean {
    return (
      (this.formControl?.invalid ? true : false) &&
      (this.formControl?.touched ? true : false)
    );
  }
  dateValue(): Date | null {
    return this.value ? new Date(moment(this.value).toDate()) : null;
  }
  selectValue(): number | undefined {
    switch (typeof this.value) {
      case 'object':
        return this.options?.findIndex(
          (e) => JSON.stringify(e.value) === JSON.stringify(this.value)
        );
      default:
        return this.options
          ?.map((e) => {
            return e.value;
          })
          .indexOf(this.value);
    }
  }

  public errorKey(): string {
    if (!this.formControl?.errors) return '';

    switch (Object.keys(this.formControl.errors)[0]) {
      case 'required':
        return 'Este campo es requerido.';
      case 'email':
        return 'El campo debe ser un email.';
      case 'requiredtrue':
        return 'Este campo es requerido.';
      case 'min':
        return 'El valor debe ser mayor a @n.'.replace(
          '@n',
          this.formControl.errors['min'].min
        );
      case 'max':
        return 'El valor debe ser menor a @n.'.replace(
          '@n',
          this.formControl.errors['max'].max
        );
      case 'minlength':
        return 'Debe contener al menos @n caracteres.'.replace(
          '@n',
          this.formControl.errors['minlength'].requiredLength
        );
      case 'maxlength':
        return 'Debe contener máximo @n caracteres.'.replace(
          '@n',
          this.formControl.errors['maxlength'].requiredLength
        );
      case 'pattern':
        return this.patternError
          ? this.patternError
          : 'La expresión ingresada no es valida.';
    }

    return this.formControl?.errors
      ? Object.keys(this.formControl.errors)[0]
      : '';
  }
}

export class AppFormGeneric implements IAppFormGeneric {
  controls: AppFormControl[];
  submit: AppFormButton;
  clean: AppFormButton;
  class?: string;
  form: FormGroup;
  appearance?: AppControlAppearance;
  valid: boolean = false;
  private sub = new Subject<any>();
  private cancel = new Subject<any>();
  private change = new Subject<any>();
  updateOn?: 'change' | 'blur' | 'submit';
  constructor(entity?: IAppFormGeneric) {
    this.form = this.buildForm();
    this.updateOn = 'blur';
    this.submit = new AppFormButton({
      label: 'Guardar',
      show: true,
      type: 'submit',
      class: 'btn btn-primary',
      color: 'primary',
      framework: entity?.framework
        ? entity?.framework
        : sharedConts.forms.framework,
    });
    this.clean = new AppFormButton({
      label: 'Cancelar',
      show: true,
      type: 'button',
      class: 'btn btn-danger',
      color: 'accent',
      framework: entity?.framework
        ? entity?.framework
        : sharedConts.forms.framework,
    });
    this.controls = [];
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
    this.controls = entity.controls.map((e) => {
      return new AppFormControl(e);
    });
    this.form = this.buildForm();

    this.controls.map((e) => {
      this.form.get(e.formControlName)?.valueChanges.subscribe((x) => {
        const emit = { control: e, form: this.form, value: x };
        this.form.value[e.formControlName] = x;
        this.valid = !Array.from(Object.keys(this.form.controls))
          .map((e) => {
            return this.form.controls[e].status;
          })
          .includes('INVALID');

        this.change.next('');
      });
    });
  }

  private buildForm(): FormGroup {
    let group = {};
    let form = new FormGroup(group);
    if (!this.controls) return form;
    this.controls.map((e) => {
      e.appearance = e.appearance
        ? e.appearance
        : this.appearance
        ? this.appearance
        : 'outline';
      const fC = (group[e.formControlName] = new FormControl(e.value, {
        updateOn: this.updateOn,
        validators: e.validators ? e.validators : [],
      }));
      e.formControl = fC;
      e.required = e.formControl?.hasValidator(Validators.required);
      return fC;
    });

    form.controls = group;
    return form;
  }

  cleanForm(event): void {
    this.form.markAsUntouched();
    this.form.reset();
    this.controls.map((e) => {
      e.valueText = '';
    });
    this.cancel.next('');
  }

  submitForm(): void {
    if (!this.valid) {
      markFormGroupTouched(this.form);
    } else {
      this.sub.next(this.form.value);
    }
  }
  submitEvent(): Observable<any> {
    return this.sub.asObservable();
  }
  cancelEvent(): Observable<any> {
    return this.cancel.asObservable();
  }
  changeEvent(): Observable<any> {
    return this.change.asObservable();
  }
}
