import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  NgForm,
} from '@angular/forms';
import { Subject } from 'rxjs';
import {
  FormControlProperties,
  FormFieldProperties,
  FormGenericProperties,
} from 'src/shared/models';
import { markFormGroupTouched } from '../form';

@Component({
  selector: 'app-form-generic',
  templateUrl: './form-generic.component.html',
  styleUrls: ['./form-generic.component.scss'],
})
export class FormGenericComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  @ViewChild('genericForm') genericForm!: NgForm;
  @Output() submitEvent = new EventEmitter<any>();
  @Output() formChangeEvent = new EventEmitter<any>();
  @Output() search = new EventEmitter<any>();

  @Input() properties: FormGenericProperties;

  constructor(private fb: FormBuilder) {
    this.properties = {
      controls: [],
      submit: {
        label: 'Guardar',
        show: true,
        class: '',
        properties: { type: 'submit', class: 'btn-primary' },
      },
      clean: {
        label: 'Limpiar',
        show: true,
        class: '',
        properties: { type: 'submit', class: 'btn-danger' },
      },
    };
  }
  private destroy = new Subject<any>();

  onSubmit(action?: string) {
    if (action === 'clean') {
      this.submitEvent.emit('clean');
      return;
    }
    if (!this.form.valid) {
      markFormGroupTouched(this.form);
    } else {
      this.submitEvent.emit(this.form.value);
    }
  }
  errorKey(control: AbstractControl | null) {
    return control &&
      control.errors &&
      Object.keys(control.errors)[0] &&
      control.touched
      ? true
      : false;
  }
  onManuallySubmit() {
    this.genericForm.ngSubmit.emit();
  }
  ngOnInit(): void {
    this.buidForm();
    this.loadControlsData();
  }
  isRequired(control: FormControlProperties) {
    return control?.validators?.filter((e: any) => e.name == 'required')[0] &&
      control.type != 'checkbox' &&
      control.type != 'radio'
      ? true
      : false;
  }

  buidForm(): void {
    var group: any = {};
    this.properties.controls.map((e: FormControlProperties) => {
      group[e.formControlName] = [
        e.control?.value,
        {
          updateOn: 'change',
          validators: e.validators ? e.validators : [],
        },
      ];
    });

    this.form = this.fb.group(group);
    this.properties.controls.map((e) => {
      this.form.get(e.formControlName)?.valueChanges.subscribe((x) => {
        const emit = { control: e, form: this.form, value: x };
        this.onFormChange(emit);
      });
    });
  }
  onFormChange(event: any): void {
    this.formChangeEvent.emit(event);
  }
  onSearch(event: any) {}
  loadControlsData(): void {}

  validateControl(control: string): boolean {
    return this.properties.controls.filter((e) => e.formControlName == control)
      .length > 0
      ? true
      : false;
  }
  cleanControls(): void {
    this.form.reset();
    this.form.markAsUntouched();
    this.onSubmit('clean');
  }

  onInputSubmit(event: any) {}
  onInputAction(event: any) {}
  onInputFormChange(event: any) {}

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }

  formField(control: FormControlProperties): FormFieldProperties {
    return {
      ...control.control,
      formControl: this.form.controls[control.formControlName],
    };
  }
}
