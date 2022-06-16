import { AppInput } from '@src/shared';

export interface IAppFiltrosSeleccionados {
  filtros?: IAppFiltroSeleccionado[];
  total?: string;
}
export interface IAppFiltro {
  title?: string;
  label?: string;
  value?: string;
}
export interface IAppFiltroSeleccionado {
  check: AppInput;

  filtros?: IAppFiltro[];
  count?: string | number;
}
export class AppFiltrosSeleccionados implements IAppFiltrosSeleccionados {
  filtros: IAppFiltroSeleccionado[] = [];
  total: string;
  constructor(entity?: IAppFiltrosSeleccionados) {
    this.total = '';
    this.filtros = [];
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] !== null ? entity[e] : this[e];
    });
  }
}
