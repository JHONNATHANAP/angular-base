import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import {
  AppButton,
  AppFormButton,
  AppFormGeneric,
  AppIcon,
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
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent  {
  formSearch: AppFormGeneric;
  list: AppList;
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
  empresa = {
    nombre: { label: 'Nombre', value: faker.company.companyName() },
    rut: {
      label: 'Rut',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    representadnte: { label: 'Representante', value: faker.name.findName() },
    email: { label: 'Email', value: faker.internet.email() },
    telefono: {
      label: 'Telefono',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    direccion: { label: 'Dirección', value: faker.address.streetAddress() },
  };
  constructor(public modalService: ModalService) {
    this.formSearch = new AppFormGeneric({
      controls: [
        {
          formControlName: 'search',
          type: 'text',
          label: 'Buscar colaborador',
          placeholder: 'Nombre colaborador',
          value: faker.name.firstName(),
          class: 'col-12 col-md-4',
        },
      ],
      updateOn: 'change',
      class: 'w-100',
      clean: new AppFormButton({
        show: false,
      }),
      submit: new AppFormButton({
        show: false,
      }),
    });
    this.formSearch.changeEvent().subscribe((data: any) => {
      console.log(data.form.value);
    });
    const actions: IAppListAction[] = [
      {
        label: 'Editar',
        name: 'edit',
        type: 'icon',
        icon: { class: 'edit', type: 'button' },
        button: {
          data: '',
          framework: 'material',
          color: '',
        },
      },
      {
        label: 'Eliminar',
        name: 'delete',
        type: 'icon',
        icon: { class: 'delete', type: 'button' },
        button: {
          data: '',
          framework: 'material',
          color: '',
        },
      },
    ];
    const fakeList = Array.from(Array(10).keys()).map((e, index) => {
      const types: AppListActionType[] = ['icon', 'button', 'text'];
      const typ = types[index % types.length];

      return {
        id: faker.name.firstName(),
        name: faker.name.findName(),
        empresa: faker.company.companyName(),
        identificaion: faker.datatype.number({ min: 10000000000 }),
        email: faker.internet.email(),
        actions: actions,
      };
    });
    this.list = new AppList({
      headers: [
        { name: 'Colaborador', id: 'name' },
        { name: 'Identificación', id: 'identificaion' },
        { name: 'Contacto', id: 'email' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
    });
    this.list.actionEvent().subscribe((data) => {
      console.log(data);
      this.editarColaborador();
    });
  }

  datosEmpresa(): any[] {
    return Array.from(Object.keys(this.empresa)).map((e) => {
      return { key: this.empresa[e].label, value: this.empresa[e].value };
    });
  }

  editarColaborador(isNew?: boolean) {
    const editForm: AppFormGeneric = new AppFormGeneric({
      controls: [
        {
          type: 'text',
          validators: [],
          formControlName: 'name',
          class: 'col-12 col-md-4',
          label: 'Nombre',
          value: faker.name.firstName(),
        },
        {
          type: 'text',
          validators: [],
          formControlName: 'lastname',
          class: 'col-12 col-md-4',
          label: 'Apellido',
          value: faker.name.lastName(),
        },
        {
          type: 'select',
          validators: [],
          formControlName: 'documentType',
          class: 'col-12 col-md-4',
          label: 'Tipo de documento',
          value: { id: 2 },
          options: [
            { value: { id: 1 }, label: 'CC' },
            { value: { id: 2 }, label: 'DD' },
          ],
        },
        {
          type: 'number',
          validators: [],
          formControlName: 'edad',
          class: 'col-12 col-md-4',
          label: 'Indetifiación',
          value: 28,
        },
        {
          type: 'text',
          validators: [],
          formControlName: 'email',
          class: 'col-12 col-md-4',
          label: 'Correo',
          value: faker.internet.email(),
        },
        {
          type: 'date',
          validators: [],
          formControlName: 'date',
          class: 'col-12 col-md-4',
          label: 'Fecha Nacimiento',
          value: moment(faker.date.recent()).format(
            sharedConts.forms.controls.date.outputFormat
          ),
        },
      ],
      updateOn: 'change',
      class: 'p-1',
      clean: new AppFormButton({
        label: 'Cancelar',
        show: true,
        type: 'button',
        class: 'btn',
        color: '',
        framework: 'material',
      }),
      submit: new AppFormButton({
        label: 'Guardar',
        show: true,
        type: 'submit',
        class: 'btn ',
        color: 'primary',
        framework: 'material',
      }),
    });
    const modald = this.modalService
      .new(
        new AppModal({
          title: isNew ? 'Añadir colaborador' : 'Editar colaborador',
          data: editForm,
          component: ModalFormComponent,
        })
      )
      .open();
    editForm.submitEvent().subscribe((data) => {
      console.log(data);
      modald.close();
    });
  }
  editarEmpresa() {
    const editForm: AppFormGeneric = new AppFormGeneric({
      controls: [
        {
          type: 'text',
          validators: [],
          formControlName: 'name',
          class: 'col-12 col-md-4',
          label: 'Nombre',
          value: faker.name.firstName(),
        },
        {
          type: 'text',
          validators: [],
          formControlName: 'rut',
          class: 'col-12 col-md-4',
          label: 'Rut',
          value: faker.datatype.number({ min: 111111111111 }),
        },
        {
          type: 'text',
          validators: [],
          formControlName: 'representante',
          class: 'col-12 col-md-4',
          label: 'Representante',
          value: faker.name.firstName(),
        },
        {
          type: 'text',
          validators: [],
          formControlName: 'email',
          class: 'col-12 col-md-4',
          label: 'Correo',
          value: faker.internet.email(),
        },
        {
          type: 'text',
          validators: [],
          formControlName: 'telefono',
          class: 'col-12 col-md-4',
          label: 'Telefono',
          value: faker.datatype.number({ min: 10000000000 }),
        },
        {
          type: 'text',
          validators: [],
          formControlName: 'direccion',
          class: 'col-12 col-md-4',
          label: 'Dirección',
          value: faker.address.streetAddress(),
        },
      ],
      updateOn: 'change',
      class: 'p-1',
      clean: new AppFormButton({
        label: 'Cancelar',
        show: true,
        type: 'button',
        class: 'btn',
        color: '',
        framework: 'material',
      }),
      submit: new AppFormButton({
        label: 'Editar',
        show: true,
        type: 'submit',
        class: 'btn ',
        color: 'primary',
        framework: 'material',
      }),
    });
    const modald = this.modalService
      .new(
        new AppModal({
          title: 'Editar Información empresa',
          data: editForm,
          component: ModalFormComponent,
        })
      )
      .open();
    editForm.submitEvent().subscribe((data) => {
      console.log(data);
      modald.close();
    });
  }
}
