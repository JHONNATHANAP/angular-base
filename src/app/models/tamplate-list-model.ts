import { AppFormGeneric, AppList } from '@src/shared';
import { Observable, Subject } from 'rxjs';
import { AppFiltrosSeleccionados } from './filtros-seleccionados-model';
type actions = 'agregar' | 'exportar' | 'registrar' | 'campaña';
export interface IAppTemplateList {
  filtros: { form: AppFormGeneric; seleccionados: AppFiltrosSeleccionados };
  list: AppList;
  actions: actions[];
  item: { form: AppFormGeneric };
}
export class AppTemplateList implements IAppTemplateList {
  public subActions = new Subject<any>();
  constructor(entity?: IAppTemplateList) {
    this.filtros = {
      form: new AppFormGeneric(),
      seleccionados: new AppFiltrosSeleccionados(),
    };
    this.list = new AppList();
    this.actions = ['campaña', 'exportar', 'agregar'];
    this.item = {
      form: new AppFormGeneric(),
    };
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] !== null ? entity[e] : this[e];
    });
  }
  item: { form: AppFormGeneric };
  filtros: { form: AppFormGeneric; seleccionados: AppFiltrosSeleccionados };
  list: AppList;
  actions: actions[];
  actionsEvent(): Observable<any> {
    return this.subActions.asObservable();
  }
}
