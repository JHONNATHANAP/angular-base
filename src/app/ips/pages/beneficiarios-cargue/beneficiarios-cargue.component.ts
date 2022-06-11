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
  IAppListAction,
  sharedConts,
} from '@src/shared';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import moment from 'moment';

@Component({
  selector: 'app-beneficiarios-cargue',
  templateUrl: './beneficiarios-cargue.component.html',
  styleUrls: ['./beneficiarios-cargue.component.scss'],
})
export class BeneficiariosCargueComponent {
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
    },
  };
  constructor(modalService: ModalService) {
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
        id: faker.name.firstName(),
        name: faker.lorem.word(),
        date: moment(faker.date.past()).format(
          sharedConts.forms.controls.date.outputFormat
        ),
        status: 'Exitoso',
        email: faker.internet.email(),
        actions: actions,
      };
    });
    this.list = new AppList({
      headers: [
        { name: 'Nombre archivo', id: 'name' },
        { name: 'Fecha de cargue', id: 'date' },
        { name: 'Estado', id: 'status' },
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
        label: 'Nombre archivo',
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
      {
        type: 'select',
        validators: [],
        formControlName: 'status',
        class: 'col-12 col-md-4',
        label: 'Estado',
        value: { id: 1 },
        options: [
          { value: { id: 1 }, label: 'Exitoso' },
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
}
