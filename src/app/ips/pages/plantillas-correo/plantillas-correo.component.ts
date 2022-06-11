import { Component, OnInit } from '@angular/core';
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
  sharedConts
} from '@src/shared';
import { ModalFormComponent } from '@src/shared/modules/modals/modal-form/modal-form.component';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import moment from 'moment';

@Component({
  selector: 'app-plantillas-correo',
  templateUrl: './plantillas-correo.component.html',
  styleUrls: ['./plantillas-correo.component.scss'],
})
export class PlantillasCorreoComponent {
  list: AppList;
  form: AppFormGeneric;
  controls: AllControls[];
  editForm: AppFormGeneric;
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
        label: 'Descargar',
        name: 'download',
        type: 'icon',
        icon: { class: 'download', type: 'button' },
        button: {
          data: '',
          framework: 'material',
          color: '',
        },
      },
    ];
    this.editForm = new AppFormGeneric({
      controls: [
        {
          type: 'text',
          validators: [],
          formControlName: 'name',
          class: 'col-12',
          label: 'Nombre de plantilla',
          value: faker.lorem.word(),
        },
        {
          type: 'textarea',
          validators: [],
          formControlName: 'description',
          class: 'col-12',
          label: 'Descripción',
          value: faker.lorem.word(),
        },
        {
          type: 'file',
          validators: [],
          formControlName: 'description',
          class: 'col-12',
          label: 'Plantilla',
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
    const fakeList = Array.from(Array(10).keys()).map((e, index) => {
      const types: AppListActionType[] = ['icon', 'button', 'text'];
      const typ = types[index % types.length];

      return {
        id: faker.name.firstName(),
        name: faker.lorem.word(),
        description: faker.lorem.sentence(),
        date: moment(faker.date.past()).format(
          sharedConts.forms.controls.date.outputFormat
        ),
        actions: actions,
      };
    });
    this.list = new AppList({
      headers: [
        { name: 'Nombre plantilla', id: 'name' },
        { name: 'Descripción', id: 'description' },
        { name: 'Fecha de cargue', id: 'date' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
    });
    this.list.actionEvent().subscribe((data) => {
      console.log(data);
      if (data.event.name === 'edit') {
        this.openEditModal('Editar Plantilla');
      }
    });
    this.editForm.submitEvent().subscribe((data) => {
      console.log(data);
    });
    this.controls = [
      {
        type: 'text',
        validators: [],
        formControlName: 'name',
        class: 'col-12 col-md-4',
        label: 'Nombre de plantilla',
        value: faker.lorem.word(),
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'description',
        class: 'col-12 col-md-4',
        label: 'Descripción',
        value: faker.lorem.word(),
      },
      {
        type: 'date',
        validators: [],
        formControlName: 'dateInit',
        class: 'col-12 col-md-4',
        label: 'Fecha de cargue (Desde)',
        value: faker.name.lastName(),
      },
      {
        type: 'date',
        validators: [],
        formControlName: 'dateEnd',
        class: 'col-12 col-md-4',
        label: 'Fecha de cargue (Hasta)',
        value: faker.name.lastName(),
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
  openEditModal(title: string) {
    const modald = this.modalService
      .new(
        new AppModal({
          title: title,
          data: this.editForm,
          component: ModalFormComponent,
        })
      )
      .open();
  }
  exportar() {}
  aprobarTodos() {}
  aprobarRegistro() {}
}
