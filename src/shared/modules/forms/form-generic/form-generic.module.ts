import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../buttons';
import { ControlsModule } from '../../controls';
import { FormFieldModule } from '../form-field/form-field.module';

import { FormGenericComponent } from './form-generic.component';



@NgModule({
  declarations: [FormGenericComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    ButtonModule,
    ControlsModule,
    FormFieldModule
  ],
  exports:[
    FormGenericComponent
  ]
})
export class FormGenericModule { }
