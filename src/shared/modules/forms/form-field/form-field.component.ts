import { Component, Input, OnInit } from '@angular/core';
import { FormFieldProperties } from 'src/shared';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent  {


  @Input() properties!: FormFieldProperties;

  constructor() {
  }


  hasError(): boolean {
    return this.properties.formControl && this.properties.formControl.invalid && this.properties.formControl.touched;
  }

  get errorKey() {
    return this.properties.formControl && this.properties.formControl.errors && Object.keys(this.properties.formControl.errors)[0];
  }

}
