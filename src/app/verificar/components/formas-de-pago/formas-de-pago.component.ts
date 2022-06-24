import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AppFormasDePago } from '@app/models/formas-de-pago-model';
import { faker } from '@faker-js/faker';
import { viewConst } from '@src/const';
import { AppFormButton, AppFormGeneric, AppModal } from '@src/shared';
import { ModalFormComponent } from '@src/shared/modules/modals/modal-form/modal-form.component';
import { ModalService } from '@src/shared/modules/modals/modal.service';

@Component({
  selector: 'app-formas-de-pago',
  templateUrl: './formas-de-pago.component.html',
  styleUrls: ['./formas-de-pago.component.scss'],
})
export class FormasDePagoComponent {
  @Input() properties: AppFormasDePago = new AppFormasDePago();
  view = viewConst;
  constructor(public modalService: ModalService) {}
  agregarCuenta() {
    const form: AppFormGeneric = new AppFormGeneric(
      new AppFormGeneric({
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
          show: true,
          type: 'button',
          class: 'btn',
          color: '',
          framework: 'material',
          label: 'Cancelar',
        }),
        submit: new AppFormButton({
          show: true,
          type: 'submit',
          class: 'btn',
          color: 'primary',
          framework: 'material',
          label: 'Guardar',
        }),
      })
    );
    const modald = this.modalService
      .new(
        new AppModal({
          title: 'Agregar cuenta',
          data: form,
          id: 'newItem',
          component: ModalFormComponent,
        })
      )
      .open()
      .closeEvent()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
