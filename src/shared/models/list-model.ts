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
}

export class AppList implements IAppList {
  headers: IAppListHeader[];
  class: string;
  data: Array<AppItem>;
  actions: boolean;
  private action = new Subject<any>();
  constructor(entity?: IAppList) {
    this.headers = [];
    this.data = [];
    this.actions = true;
    this.class = '';

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
}
