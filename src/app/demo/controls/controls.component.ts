import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AllControls, AppFormGeneric, IAppFormGeneric } from '@src/shared';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
  form: AppFormGeneric;
  controls:AllControls[];

  constructor() {
    this.controls= [
      {
        type: 'text',
        validators: [Validators.required, Validators.minLength(5)],
        formControlName: 'name',
        label: 'Name',
      },
      {
        type: 'select',
        validators: [Validators.required],
        formControlName: 'documentType',
        label: 'Tipo de documento',
        options: [
          { value: { id: 1 }, label: 'CC' },
          { value: { id: 2 }, label: 'DD' },
        ],
      },
      {
        type: 'date',
        validators: [Validators.required],
        formControlName: 'date',
        label: 'Fecha Nacimiento',         
      },
      {
        type: 'textarea',
        validators: [Validators.required],
        formControlName: 'perfil',
        label: 'Perfil',
        rows:10         
      },
    ]
    this.form = new AppFormGeneric({
      controls:this.controls,
      updateOn: 'change',
    });
    this.form.submitEvent().subscribe((e) => {
      console.log(e);
      //this.form.cleanForm();
      this.form.form.controls['name'].setValue('Jhonnathan');
      this.controls[1]['options'].push({value:'1',label:'sdasd'})
    });
    this.form.cancelEvent().subscribe((e) => {
      console.log('clean');
    });
    this.form.changeEvent().subscribe((e) => {
      console.log('change');
    });
  }
}
