import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import { AppList, AppListActionType, AppModal } from '@src/shared';

@Component({
  selector: 'app-modal-logs',
  templateUrl: './modal-logs.component.html',
  styleUrls: ['./modal-logs.component.scss'],
})
export class ModalLogsComponent implements OnInit {
  @Input() properties!: AppModal;
  logs: AppList = new AppList();
  constructor(@Inject(MAT_DIALOG_DATA) public data: AppModal) {
    this.properties = data;
    console.log(this.properties.data)
  }

  ngOnInit(): void {
    this.inicializarTabla();
  }
  inicializarTabla() {
    const fakeList = Array.from(Array(10).keys()).map((e, index) => {
      const types: AppListActionType[] = ['icon', 'button', 'text'];
      const typ = types[index % types.length];

      return {
        fila: faker.datatype.number(),
        descripcion: faker.lorem.sentence(),
        actions: [],
      };
    });
    this.logs = new AppList({
      headers: [
        { name: 'Fila', id: 'fila' },
        { name: 'Descripción', id: 'descripcion' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
    });
  }
}
