import { Observable, Subject } from 'rxjs';
import { AppButton, AppIcon } from '.';

export interface IAppListAction {
  name: string;
  label: string;
  icon?: AppIcon;
  button?: AppButton;
  type?: AppListActionType;
}
export type AppListActionType = 'text' | 'icon' | 'button';
export type AppSort = {
  value?: string;
  id?: string;
  type?: 'asc' | 'dsc' | 'none';
  show?: boolean;
};
export interface IAppListHeader {
  name: string;
  id: string;
  filter?: string;
  type?: string;
}
export type AppItem = {
  [param: string]:
    | string
    | number
    | boolean
    | Array<IAppListAction>
    | ReadonlyArray<string | number | boolean>;
  actions: Array<IAppListAction>;
};
export interface IAppList {
  headers: Array<IAppListHeader>;
  data?: Array<AppItem>;
  class?: string;
  actions?: boolean;
  sort?: AppSort;
}

export class AppList implements IAppList {
  headers: IAppListHeader[];
  class: string;
  data: Array<AppItem>;
  actions: boolean;
  sort: AppSort;
  private action = new Subject<any>();
  constructor(entity?: IAppList) {
    this.headers = [];
    this.data = [];
    this.actions = true;
    this.class = '';
    this.sort = { show: true };

    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] || entity[e] == false ? entity[e] : this[e];
    });
  }
  clickAction(item: AppItem, action: IAppListAction) {
    this.action.next({ item: item, event: action });
  }
  actionEvent(): Observable<any> {
    return this.action.asObservable();
  }
  sortAction(head) {
    this.sort = {
      id: head.id,
      show:true,
      type:
        head.id !== this.sort?.id
          ? 'asc'
          : this.sort?.type === 'asc'
          ? 'dsc'
          : this.sort?.type === 'dsc'
          ? 'none'
          : 'asc',
    };
  }
}
