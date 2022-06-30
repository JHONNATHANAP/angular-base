import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalAgregarBeneficiarioComponent } from '@app/ips/components/modal-agregar-beneficiario/modal-agregar-beneficiario.component';
import { AppFormasDePago } from '@app/models/formas-de-pago-model';
import { ModalRetenienteComponent } from '@app/verificar/components/modal-reteniente/modal-reteniente.component';
import { faker } from '@faker-js/faker';
import {
  AppButton,
  AppFormButton,
  AppFormGeneric,
  AppIcon,
  AppInput,
  AppList,
  AppListActionType,
  AppModal,
  IAppListAction,
  sharedConts,
} from '@src/shared';
import { ModalFormComponent } from '@src/shared/modules/modals/modal-form/modal-form.component';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import moment from 'moment';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.scss'],
})
export class TrabajadorComponent implements OnInit {
  defaultIcon: AppIcon = new AppIcon();
  defaultButton: AppButton = new AppButton();
  defaultCheckbox: AppInput = new AppInput({ type: 'checkbox' });
  formasDePago: AppFormasDePago = new AppFormasDePago();
  beneficiario = {
    dv: {
      label: 'DV',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    run: {
      label: 'RUN',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    nombre: { label: 'Nombre', value: faker.name.findName() },
    fecha: {
      label: 'Fecha nacimiento',
      value: moment(faker.date.past()).format(
        sharedConts.forms.controls.date.outputFormat
      ),
    },
    sexo: { label: 'Sexo', value: 'Masculino' },
    comuna: { label: 'Comuna', value: faker.address.streetAddress() },
    region: { label: 'Región', value: faker.address.streetAddress() },
    retencion: { label: 'Tiene retención', value: 'Si' },
    retencionAprobada: { label: 'Tiene retención aprobada', value: 'Si' },
    direccion: { label: 'Dirección', value: faker.address.streetAddress() },

    telefono: {
      label: 'Telefono',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    celular: {
      label: 'Celular',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    email: { label: 'Email', value: faker.internet.email() },
  };
  view = {
    buttons: {
      edit: new AppButton({
        color: 'primary',
        framework: 'material',
        class: 'btn',
      }),
      aprobar: new AppButton({
        color: 'primary',
        framework: 'material',
        class: 'btn',
      }),
    },
    icons: {
      edit: new AppIcon({ class: 'edit' }),
      add: new AppIcon({ class: 'add' }),
    },
  };
  list: AppList = new AppList();
  constructor(public modalService: ModalService) {}
  ngOnInit(): void {
    this.inicializarCargasFamiliares();
    this.inicializarFormasDePago();
  }
  inicializarFormasDePago() {
    const fakeList = Array.from(Array(5).keys()).map((e, index) => {
      const bancos = [
        {
          label: 'BANCO DE CHILE',
          value: faker.datatype.number({ min: 10000 }),
        },
        {
          label: 'BANCO INTERNACIONAL',
          value: faker.datatype.number({ min: 10000 }),
        },
        { label: 'SCOTIABANK', value: faker.datatype.number({ min: 10000 }) },
      ];
      const tipos = [
        {
          label: 'Cuenta Corriente',
          value: faker.datatype.number({ min: 10000 }),
        },
        { label: 'Ahorro Plazo', value: faker.datatype.number({ min: 10000 }) },
        {
          label: 'Cuenta de Ahorro',
          value: faker.datatype.number({ min: 10000 }),
        },
      ];
      return {
        tipo: tipos[index % tipos.length],
        banco: bancos[index % bancos.length],
        numeroCuenta: faker.datatype.number({ min: 10000 }),
      };
    });
    this.formasDePago.cuentas = [
      { tipo: { label: 'Pago presencial', value: -1 } },
      ...fakeList,
    ];
  }

  inicializarCargasFamiliares() {
    const actions: IAppListAction[] = [];
    const fakeList = Array.from(Array(3).keys()).map((e, index) => {
      const types: AppListActionType[] = ['icon', 'button', 'text'];
      const typ = types[index % types.length];

      return {
        id: faker.name.firstName(),
        name: faker.name.findName(),
        identificacion: faker.datatype.number({ min: 10000000000 }),
        actions: actions,
      };
    });
    this.list = new AppList({
      headers: [
        { name: 'Nombre', id: 'name' },
        { name: 'Identificación', id: 'identificacion' },
        { name: 'Tiene retención judicial', id: 'marcar' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
      customBody: true,
    });
    this.list.actionEvent().subscribe((data) => {
      console.log(data);
      this.editarCargaFamiliar();
    });
  }

  editarBeneficiario() {
    const modald = this.modalService
      .new(
        new AppModal({
          title: 'Editar información',
          data: {},
          component: ModalAgregarBeneficiarioComponent,
        })
      )
      .open();
    modald.closeEvent().subscribe((data) => {
      console.log(data);
    });
  }
  editarCargaFamiliar() {
    const form: AppFormGeneric = new AppFormGeneric(
      new AppFormGeneric({
        controls: [
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
            formControlName: 'identificacion',
            class: 'col-12 col-md-6',
            label: 'Identificación',
            value: faker.datatype.number({ min: 100000 }),
          },
          {
            type: 'select',
            validators: [Validators.required],
            formControlName: 'marcado',
            class: 'col-12 col-md-6',
            label: 'Marcado',
            options: [
              { label: 'Si', value: 0 },
              { label: 'No', value: 1 },
            ],
          },
        ],
        updateOn: 'change',
        class: 'p-1',
        clean: new AppFormButton({
          show: true,
          type: 'submit',
          class: 'btn',
          color: 'primary',
          framework: 'material',
          label: 'Guardar',
        }),
        submit: new AppFormButton({
          show: true,
          type: 'button',
          class: 'btn',
          color: '',
          framework: 'material',
          label: 'Cancelar',
        }),
      })
    );
    const modald = this.modalService
      .new(
        new AppModal({
          title: 'Editar información',
          data: form,
          component: ModalFormComponent,
        })
      )
      .open();
    modald.closeEvent().subscribe((data) => {
      console.log(data);
    });
  }
  datosBeneficiario() {
    return Array.from(Object.keys(this.beneficiario)).map((e) => {
      return {
        key: this.beneficiario[e].label,
        value: this.beneficiario[e].value,
      };
    });
  }
  itemCheckBox(item): AppInput {
    return new AppInput({ type: 'text' });
  }
  checkChange(event, item) {
    console.log(event, item);
    if (!event) return;

    const modald = this.modalService
      .new(
        new AppModal({
          title: 'Agregar cuenta',
          data: item,
          id: 'newItem',
          component: ModalRetenienteComponent,
        })
      )
      .open()
      .closeEvent()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
