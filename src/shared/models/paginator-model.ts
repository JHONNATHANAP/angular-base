import { Observable, Subject } from 'rxjs';
import { sharedConts } from '..';

export interface IAppPaginator {
  itemsPerPage?: {
    label?: string;
    options?: number[];
    value?: number;
    disabled?: boolean;
  };
  page?: { label?: string; total?: number; value?: number; disabled?: boolean };
  next?: { label?: string; disabled?: boolean };
  previous?: { label?: string; disabled?: boolean };
  items?: {
    from?: number;
    to?: number;
    total?: number;
  };
  show?: boolean;
}
export class AppPaginator implements IAppPaginator {
  private subChange = new Subject<any>();
  constructor(entity?: IAppPaginator) {
    this.itemsPerPage = {
      label: sharedConts.forms.paginator.itemsPerPage.label,
      options: [5, 10, 25, 100],
      disabled: false,
      value: 10,
    };
    this.page = {
      label: sharedConts.forms.paginator.page.label,
      disabled: false,
      total: 24,
      value: 1,
    };
    this.next = {
      label: sharedConts.forms.paginator.next.label,
      disabled: false,
    };
    this.previous = {
      label: sharedConts.forms.paginator.previous.label,
      disabled: false,
    };
    this.items = {
      from: 1,
      to: 50,
      total: 5000,
    };
    this.show = true;
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] !== null ? entity[e] : this[e];
    });
  }
  itemsPerPage: {
    label: string;
    options: number[];
    value: number;
    disabled: boolean;
  };
  page: {
    label?: string;
    total: number;
    value: number;
    disabled: boolean;
  };
  next: { label: string; disabled: boolean };
  previous: { label: string; disabled: boolean };
  items: {
    from: number;
    to: number;
    total: number;
  };
  show: boolean;
  pageChange(event) {
    this.page.value = event.value;
    this.subChange.next(this);
  }
  previousAction() {
    this.page.value -= 1;
    this.subChange.next(this);
  }
  nextAction() {
    this.page.value += 1;
    this.subChange.next(this);
  }
  changeAction() {
    this.subChange.next(this);
  }
  changeEvent(): Observable<any> {
    return this.subChange.asObservable();
  }
}
