import { Component } from '@angular/core';
import { ModalSelectComponent } from '@app/ips/components/modal-select/modal-select.component';
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
import { ModalFormComponent } from '@src/shared/modules/modals/modal-form/modal-form.component';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import moment from 'moment';

@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.scss'],
})
export class BeneficiariosComponent {
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
        { name: 'Beneficiario', id: 'name' },
        { name: 'Identificación', id: 'identificaion' },
        { name: 'Contacto', id: 'email' },
        { name: 'Nombre empresa', id: 'empresa' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
    });
    this.list.actionEvent().subscribe((data) => {
      console.log(data);
      const editForm: AppFormGeneric = new AppFormGeneric({
        controls: this.controls,
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
      const modald = modalService
        .new(
          new AppModal({
            title: 'Editar beneficiario',
            data: editForm,
            component: ModalFormComponent,
          })
        )
        .open();
      editForm.submitEvent().subscribe((data) => {
        console.log(data);
        modald.close();
      });
    });
    this.controls = [
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
        type: 'text',
        validators: [],
        formControlName: 'company',
        class: 'col-12 col-md-4',
        label: 'Empresa',
        value: faker.company.companyName(),
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
          value: faker.lorem.word(),
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
          component: ModalSelectComponent,
        })
      )
      .open()
      .closeEvent()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
