import { Component, OnInit } from '@angular/core';
import { AppList, AppListActionType, IAppListAction } from '@src/shared';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  list: AppList;
  constructor() {
    let actions: IAppListAction[] = [
      {
        label: 'Ver',
        name: 'show',
        icon: { class: 'visibility', type: 'button' },
        button: {
          data: '',
          framework: 'material',
          color: 'primary',
        },
      },
      {
        label: 'Editar',
        name: 'edit',
        type: 'icon',
        icon: { class: 'edit', type: 'button' },
        button: {
          data: '',
          framework: 'material',
          color: 'warn',
        },
      },
      {
        label: 'Eliminar',
        name: 'delete',
        type: 'button',
        icon: { class: 'delete', type: 'button' },
        button: {
          data: '',
          framework: 'material',
          color: 'accent',
        },
      },
      {
        label: 'Configurar',
        name: 'config',
        type: 'button',
        icon: { class: 'settings', type: 'button' },
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
      console.log(index, typ);
      return {
        id: faker.name.firstName(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        actions: actions.map((data) => {
          data.type = typ;
          return { ...data };
        }),
      };
    });
    this.list = new AppList({
      headers: [
        { name: 'Nombre', id: 'name' },
        { name: '<b>Apellido</b>', id: 'lastName' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
    });
    this.list.actionEvent().subscribe((data) => {
      console.log(data);
      this.list.data[0]['name'] = data.event.name;
      this.list.data[0]['actions'][0]['label'] = data.event.name;
    });
  }
}
