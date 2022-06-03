import { Component, OnInit } from '@angular/core';
import { AppList, IAppListAction } from '@src/shared';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  list: AppList;
  constructor() {
    const actions: IAppListAction[] = [
      { label: '<b>Ver</b>', name: 'show' },
      {
        label: 'Editar',
        name: 'edit',
        type: 'icon',
        icon: { class: 'edit', type: 'button' },
      },
      {
        label: 'Eliminar',
        name: 'delete',
        type: 'button',
        button: {
          class: 'p-1',
          data: '',
          framework: 'material',
          color: 'accent',
        },
      },
    ];
    this.list = new AppList({
      headers: [
        { name: 'Nombre', id: 'name' },
        { name: '<b>Apellido</b>', id: 'lastName' },
      ],
      data: [
        { name: 'Jhonnathan', lastName: '<b>Albarracin</b>', actions: actions },
        { name: 'Ricardo', lastName: 'Peralta', actions: [] },
      ],
      class: 'table align-middle',
    });
    this.list.actionEvent().subscribe((data) => {
      console.log(data);
      this.list.data[0]['name'] = data.event.name;
      this.list.data[0]['actions'][0]['label'] = data.event.name;
    });
  }
}
