import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import {
  AppButton,
  AppFormButton,
  AppFormGeneric,
  AppModal,
} from '@src/shared';

@Component({
  selector: 'app-modal-agregar-empresa',
  templateUrl: './modal-agregar-empresa.component.html',
  styleUrls: ['./modal-agregar-empresa.component.scss'],
})
export class ModalAgregarEmpresaComponent implements OnInit {
  @Input() properties!: AppModal;
  @Input() formEmpresa!: AppFormGeneric;
  @Input() formRepresentante!: AppFormGeneric;
  @Output() closeEvent = new EventEmitter<any>();
  clean: AppButton = new AppButton();
  submit: AppButton = new AppButton();
  templateBody!: TemplateRef<any>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: AppModal) {
    this.properties = data;
    console.log(this.properties, data);
    if (data?.data.formEmpresa) {
      this.formEmpresa.form = data.data.formEmpresa;
    }
    if (data?.data.formRepresentante) {
      this.formRepresentante = data.data.formRepresentante;
    }
  }
  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(data?: any): void {
    this.formEmpresa = new AppFormGeneric({
      controls: [
        {
          type: 'number',
          validators: [Validators.required],
          formControlName: 'run',
          class: 'col-12 col-md-6',
          label: 'RUN',
          value: faker.datatype.number({ min: 1000000 }),
        },
        {
          type: 'text',
          validators: [Validators.required],
          formControlName: 'dv',
          class: 'col-12 col-md-6',
          label: 'DV ',
          value: faker.datatype.string(),
        },
        {
          type: 'text',
          validators: [Validators.required],
          formControlName: 'nombre',
          class: 'col-12 col-md-6',
          label: 'Nombre',
          value: faker.company.companyName(),
        },
        {
          type: 'text',
          validators: [Validators.required],
          formControlName: 'comuna',
          class: 'col-12 col-md-6',
          label: 'Comuna',
          value: faker.datatype.string(),
        },
        {
          type: 'text',
          validators: [Validators.required],
          formControlName: 'region',
          class: 'col-12 col-md-6',
          label: 'Región',
          value: faker.address.city(),
        },
        {
          type: 'select',
          validators: [Validators.required],
          formControlName: 'prepiloto',
          class: 'col-12 col-md-6',
          label: 'Prepiloto',
          value: faker.datatype.boolean(),
          options: [
            { label: 'Sí', value: true },
            { label: 'No', value: false },
          ],
        },
        {
          type: 'select',
          validators: [Validators.required],
          formControlName: 'carga',
          class: 'col-12 col-md-6',
          label: 'Trabajadores con carga',
          value: faker.datatype.boolean(),
          options: [
            { label: 'Sí', value: true },
            { label: 'No', value: false },
          ],
        },
        {
          type: 'text',
          validators: [Validators.required],
          formControlName: 'direccion',
          class: 'col-12 col-md-6',
          label: 'Dirección',
          value: faker.address.streetAddress(),
        },
        {
          type: 'chips',
          validators: [Validators.required],
          formControlName: 'telefono',
          class: 'col-12 ',
          label: 'Telefono',
          chipType: 'number',
          value: [faker.datatype.number(), faker.datatype.number()],
        },
        {
          type: 'chips',
          validators: [Validators.required],
          formControlName: 'celular',
          class: 'col-12 ',
          label: 'Celular',
          chipType: 'number',
          value: [faker.datatype.number(), faker.datatype.number()],
        },
        {
          type: 'chips',
          chipType: 'text',
          validators: [Validators.required],
          formControlName: 'email',
          class: 'col-12',
          label: 'Correo',
          value: [faker.internet.email(), faker.internet.email()],
        },
      ],
      updateOn: 'change',
      class: 'p-1',
      clean: new AppFormButton({
        show: false,
      }),
      submit: new AppFormButton({
        show: false,
      }),
    });
    this.formRepresentante = new AppFormGeneric({
      controls: [
        {
          type: 'number',
          validators: [Validators.required],
          formControlName: 'rut',
          class: 'col-12 col-md-6',
          label: 'RUT',
          value: faker.datatype.number(),
        },
        {
          type: 'text',
          validators: [Validators.required],
          formControlName: 'dv',
          class: 'col-12 col-md-6',
          label: 'DV',
          value: faker.datatype.string(),
        },
        {
          type: 'text',
          validators: [Validators.required],
          formControlName: 'nombre',
          class: 'col-12 col-md-6',
          label: 'Nombre',
          value: faker.name.findName(),
        },
        {
          type: 'number',
          validators: [Validators.required],
          formControlName: 'telefono',
          class: 'col-12 col-md-6',
          label: 'Telefono',
          value: faker.datatype.number(),
        },
        {
          type: 'number',
          validators: [Validators.required],
          formControlName: 'celular',
          class: 'col-12 col-md-6',
          label: 'Celular',
          value: faker.datatype.number(),
        },
        {
          type: 'text',
          chipType: 'text',
          validators: [Validators.required],
          formControlName: 'email',
          class: 'col-12 col-md-6',
          label: 'Correo',
          value: faker.internet.email(),
        },
      ],
      updateOn: 'change',
      class: 'p-1',
      clean: new AppFormButton({
        show: false,
      }),
      submit: new AppFormButton({
        show: false,
      }),
    });
    this.clean = new AppButton({
      type: 'button',
      class: 'btn',
      color: '',
      framework: 'material',
    });
    this.submit = new AppButton({
      type: 'submit',
      class: 'btn ',
      color: 'primary',
      framework: 'material',
    });
  }

  cancelEvent(event?: any): void {
    this.closeEvent.emit();
  }
  submitEvent() {
    console.log(this.formEmpresa, this.formRepresentante);
    if (this.formEmpresa.valid && this.formRepresentante) {
      const value = {
        empresa: this.formEmpresa.form.value,
        representante: this.formRepresentante.form.value,
      };
      console.log(value);
      this.properties.close(value);
    }
  }
}
