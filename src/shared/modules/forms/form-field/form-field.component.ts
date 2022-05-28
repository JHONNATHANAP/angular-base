import { Component, Input, OnInit } from '@angular/core';
import { AppFormControl } from 'src/shared';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  @Input() properties!: AppFormControl;

  constructor() {}

}
