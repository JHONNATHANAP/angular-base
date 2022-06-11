import { Component, OnInit } from '@angular/core';
import { ModalSelectPlantillaComponent } from '@app/ips/components/modal-select-plantilla/modal-select-plantilla.component';
import { faker } from '@faker-js/faker';
import {
  AllControls,
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
import { ModalService } from '@src/shared/modules/modals/modal.service';
import moment from 'moment';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.scss'],
})
export class EnviosComponent {
  list: AppList;
  form: AppFormGeneric;
  controls: AllControls[];
  view = {
    buttons: {
      cargar: new AppButton({
        color: 'primary',
        framework: 'material',
        class: 'btn',
      }),
      exportar: new AppButton({
        color: 'primary',
        framework: 'material',
        class: 'btn',
      }),
    },
    icons: {
      upload: new AppIcon({ class: 'upload' }),
      download: new AppIcon({ class: 'download' }),
      check: new AppIcon({ class: 'check' }),
      email: new AppIcon({ class: 'email' }),
    },
  };
  constructor(public modalService: ModalService) {
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
    ];
    const fakeList = Array.from(Array(10).keys()).map((e, index) => {
      const types: AppListActionType[] = ['icon', 'button', 'text'];
      const typ = types[index % types.length];

      return {
        plantilla: faker.lorem.word(),
        nombre: faker.name.findName(),
        empresa: faker.company.companyName(),
        tipoContacto: ['Beneficiario', 'Empleador'][
          faker.datatype.number({ min: 0, max: 1 })
        ],
        date: moment(faker.date.past()).format(
          sharedConts.forms.controls.date.outputFormat
        ),
        estado: ['Leido', 'Pendiente', 'Recibido', 'Fallido'][
          faker.datatype.number({ min: 0, max: 3 })
        ],
        correo: faker.internet.email(),
        actions: actions,
      };
    });
    this.list = new AppList({
      headers: [
        { name: 'Plantilla', id: 'plantilla' },
        { name: 'Nombre del contacto', id: 'nombre' },
        { name: 'Empresa', id: 'empresa' },
        { name: 'Tipo de contacto', id: 'tipoContacto' },
        { name: 'Correo', id: 'correo' },
        { name: 'Fecha de envío', id: 'date' },
        { name: 'Estado', id: 'estado' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: false,
    });
    this.list.actionEvent().subscribe((data) => {
      console.log(data);
    });
    this.controls = [
      {
        type: 'text',
        validators: [],
        formControlName: 'name',
        class: 'col-12 col-md-4',
        label: 'Nombre plantilla',
        value: faker.lorem.word(),
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'name',
        class: 'col-12 col-md-4',
        label: 'Nombre contacto',
        value: faker.name.findName(),
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'name',
        class: 'col-12 col-md-4',
        label: 'Nombre empresa',
        value: faker.company.companyName(),
      },
      {
        type: 'date',
        validators: [],
        formControlName: 'dateInit',
        class: 'col-12 col-md-4',
        label: 'Fecha de envío (Desde)',
        value: faker.name.lastName(),
      },
      {
        type: 'date',
        validators: [],
        formControlName: 'dateEnd',
        class: 'col-12 col-md-4',
        label: 'Fecha de envío (Hasta)',
        value: faker.name.lastName(),
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'status',
        class: 'col-12 col-md-4',
        label: 'Estado',
        value: { id: 1 },
        options: [
          { value: { id: 1 }, label: 'Leido' },
          { value: { id: 2 }, label: 'Fallido' },
        ],
      },
    ];
    this.form = new AppFormGeneric({
      controls: this.controls,
      updateOn: 'change',
      clean: new AppFormButton({
        label: 'Limpiar',
        show: true,
        type: 'button',
        class: 'btn',
        color: '',
        framework: 'material',
      }),
      submit: new AppFormButton({
        label: 'Filtrar',
        show: true,
        type: 'button',
        class: 'btn ',
        color: 'primary',
        framework: 'material',
      }),
    });
  }
  onFilesChanged(event) {
    console.log(event);
  }
  exportar() {}
  aprobarTodos() {}
  aprobarRegistro() {}
  enviarCorreo() {
    const searchForm = new AppFormGeneric({
      controls: [
        {
          type: 'text',
          formControlName: 'search',
          label: 'Buscar plantilla',
          class: 'col-12',
          validators: [],
          value: 'Jho',
        },
      ],
      updateOn: 'change',
      class: 'p-1 w-100',
      clean: new AppFormButton({
        show: false,
      }),
      submit: new AppFormButton({
        show: false,
      }),
    });
    searchForm.changeEvent().subscribe((data) => {
      console.log(searchForm.controls[0].value);
    });
    const actions: IAppListAction[] = [
      {
        label: 'Seleccionar',
        name: 'select',
        type: 'icon',
        icon: { class: 'check', type: 'button' },
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
        plantilla: faker.lorem.word(),
        descripcion: faker.lorem.sentence(),
        actions: actions,
      };
    });
    const list = new AppList({
      headers: [
        { name: 'Nombre plantilla', id: 'plantilla' },
        { name: 'Descripción', id: 'descripcion' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
    });
    list.actionEvent().subscribe((data) => {
      console.log(data);
    });
    const modald = this.modalService
      .new(
        new AppModal({
          title: 'Seleccionar plantilla',
          data: { form: searchForm, list: list },
          component: ModalSelectPlantillaComponent,
        })
      )
      .open()
      .closeEvent()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
