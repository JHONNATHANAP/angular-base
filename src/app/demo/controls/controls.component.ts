import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { AllControls, AppFormGeneric, IAppFormGeneric } from '@src/shared';
import { AppModal } from '@src/shared/models/modal-model';
import { ModalFormComponent } from '@src/shared/modules/modals/modal-form/modal-form.component';
import { ModalService } from '@src/shared/modules/modals/modal.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements AfterViewInit {
  form: AppFormGeneric;
  controls: AllControls[];
  @ViewChild('formTemplate', { read: TemplateRef })
  formTemplate!: TemplateRef<any>;

  constructor(private modal: ModalService, private vref: ViewContainerRef) {
    this.controls = [
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
        /*  value:{id:1}, */
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
        rows: 10,
      },
      {
        type: 'file',
        validators: [Validators.required],
        formControlName: 'hv',
        label: 'Hoja de vida',
      },
    ];
    this.form = new AppFormGeneric({
      controls: this.controls,
      updateOn: 'change',
    });
    this.form.submitEvent().subscribe((e) => {
      console.log(e);
      //this.form.cleanForm();
      this.form.form.controls['name'].setValue('Jhonnathan');
      this.controls[1]['options'].push({ value: '1', label: 'sdasd' });
    });
    this.form.cancelEvent().subscribe((e) => {
      console.log('clean');
    });
    this.form.changeEvent().subscribe((e) => {
      console.log('change');
    });
  }
  ngAfterViewInit(): void {
    console.log(this.formTemplate);
    const modald = this.modal
      .new(
        new AppModal({
          title: 'Modal prueba',
          html: '<h1>Titulo h1</h1>',
          data: this.form,
          component: ModalFormComponent,
        })
      )
      .open();
    setTimeout(() => {
      // modald.close();
      this.form.form.controls['name'].setValue('Jhonnathan');
      console.log(this.formTemplate);
    }, 5000);
  }
}
