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
  selector: 'app-modal-agregar-beneficiario',
  templateUrl: './modal-agregar-beneficiario.component.html',
  styleUrls: ['./modal-agregar-beneficiario.component.scss'],
})
export class ModalAgregarBeneficiarioComponent implements OnInit {
  @Input() properties!: AppModal;
  @Input() formBeneficiario!: AppFormGeneric;
  @Input() formRepresentante!: AppFormGeneric;
  @Output() closeEvent = new EventEmitter<any>();
  clean: AppButton = new AppButton();
  submit: AppButton = new AppButton();
  templateBody!: TemplateRef<any>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: AppModal) {
    this.properties = data;
    console.log(this.properties, data);
    if (data?.data.formBeneficiario) {
      this.formBeneficiario.form = data.data.formBeneficiario;
    }
    if (data?.data.formRepresentante) {
      this.formRepresentante = data.data.formRepresentante;
    }
  }
  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(data?: any): void {
    this.formBeneficiario = new AppFormGeneric({
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
          type: 'date',
          validators: [Validators.required],
          formControlName: 'nombre',
          class: 'col-12 col-md-6',
          label: 'Fecha nacimiento',
        },
        {
          type: 'select',
          validators: [Validators.required],
          formControlName: 'sexo',
          class: 'col-12 col-md-6',
          label: 'Sexo',
          options: [
            { label: 'Masculino', value: 0 },
            { label: 'Femenino', value: 1 },
            { label: 'Otro', value: 2 },
          ],
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
          formControlName: 'tieneRetencion',
          class: 'col-12 col-md-6',
          label: 'Tiene retención',
          value: faker.datatype.boolean(),
          options: [
            { label: 'Sí', value: true },
            { label: 'No', value: false },
          ],
        },
        {
          type: 'select',
          validators: [Validators.required],
          formControlName: 'retencionAprobada',
          class: 'col-12 col-md-6',
          label: 'Tiene retención aprobada',
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
          type: 'number',
          validators: [Validators.required],
          formControlName: 'telefono',
          class: 'col-12 col-md-6',
          label: 'Telefono',
          chipType: 'number',
          value: faker.datatype.number(),
        },
        {
          type: 'number',
          validators: [Validators.required],
          formControlName: 'celular',
          class: 'col-12 col-md-6',
          label: 'Celular',
          chipType: 'number',
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
    console.log(this.formBeneficiario, this.formRepresentante);
    if (this.formBeneficiario.valid && this.formRepresentante) {
      const value = {
        beneficiario: this.formBeneficiario.form.value,
        representante: this.formRepresentante.form.value,
      };
      console.log(value);
      this.properties.close(value);
    }
  }
}
