import { Component, Input, OnInit } from '@angular/core';
import { AppFiltrosSeleccionados } from '@app/models';
import { viewConst } from '@src/const';

@Component({
  selector: 'app-filtros-seleccionados',
  templateUrl: './filtros-seleccionados.component.html',
  styleUrls: ['./filtros-seleccionados.component.scss'],
})
export class FiltrosSeleccionadosComponent {
  @Input() properties: AppFiltrosSeleccionados = new AppFiltrosSeleccionados();
  view = viewConst;
  constructor() {}
}
