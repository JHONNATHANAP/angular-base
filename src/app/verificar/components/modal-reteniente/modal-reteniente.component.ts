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
  selector: 'app-modal-reteniente',
  templateUrl: './modal-reteniente.component.html',
  styleUrls: ['./modal-reteniente.component.scss'],
})
export class ModalRetenienteComponent implements OnInit {
  @Input() properties!: AppModal;
  @Input() formReteniente!: AppFormGeneric;
  @Input() formCuenta!: AppFormGeneric;
  @Output() closeEvent = new EventEmitter<any>();
  clean: AppButton = new AppButton();
  submit: AppButton = new AppButton();
  templateBody!: TemplateRef<any>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: AppModal) {
    this.properties = data;
    if (data?.data.formReteniente) {
      this.formReteniente.form = data.data.formReteniente;
    }
    if (data?.data.formCuenta) {
      this.formCuenta = data.data.formCuenta;
    }
  }
  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(data?: any): void {
    this.formReteniente = new AppFormGeneric({
      controls: [
        {
          type: 'number',
          validators: [Validators.required],
          formControlName: 'run',
          class: 'col-12 col-md-6',
          label: 'RUT',
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
          formControlName: 'telefono',
          class: 'col-6 ',
          label: 'Telefono',
          value: faker.datatype.number(),
        },
        {
          type: 'text',
          validators: [Validators.required],
          formControlName: 'email',
          class: 'col-6',
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
    this.formCuenta = new AppFormGeneric({
      controls: [
        {
          type: 'select',
          validators: [Validators.required],
          formControlName: 'tipo',
          class: 'col-12 col-md-6',
          label: 'Tipo de cuenta',
          options: [
            {
              label: 'Cuenta Corriente',
              value: faker.datatype.number({ min: 10000 }),
            },
            {
              label: 'Ahorro Plazo',
              value: faker.datatype.number({ min: 10000 }),
            },
            {
              label: 'Cuenta de Ahorro',
              value: faker.datatype.number({ min: 10000 }),
            },
          ],
        },
        {
          type: 'select',
          validators: [Validators.required],
          formControlName: 'banco',
          class: 'col-12 col-md-6',
          label: 'Banco',
          options: [
            {
              label: 'BANCO DE CHILE',
              value: faker.datatype.number({ min: 10000 }),
            },
            {
              label: 'BANCO INTERNACIONAL',
              value: faker.datatype.number({ min: 10000 }),
            },
            {
              label: 'SCOTIABANK',
              value: faker.datatype.number({ min: 10000 }),
            },
          ],
        },
        {
          type: 'number',
          validators: [Validators.required],
          formControlName: 'numero',
          class: 'col-12 col-md-6',
          label: 'Numero de cuenta',
          value: faker.datatype.number({ min: 100000 }),
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
    if (this.formReteniente.valid && this.formCuenta) {
      const value = {
        empresa: this.formReteniente.form.value,
        representante: this.formCuenta.form.value,
      };
      this.properties.close(value);
    }
  }
}
