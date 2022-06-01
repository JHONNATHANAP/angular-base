import { ComponentType } from '@angular/cdk/portal';
import { TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalComponent } from '../modules/modals/modal/modal.component';
import { AppFormButton } from './form-model';

export interface IAppModal {
  title?: string;
  component?: ComponentType<any>;
  actions?: AppFormButton[];
  panelClass?: string;
  data?: any;
  html?: string;
  templateBody?: TemplateRef<any>;
}
export class AppModal implements IAppModal {
  title?: string;
  component: ComponentType<any>;
  actions?: AppFormButton[];
  panelClass?: string;
  html?: string;
  data?: any;
  templateBody!: TemplateRef<any>;
  private closeSubject = new Subject<any>();
  constructor(entity?: IAppModal) {
    this.component = ModalComponent;
    if (!entity) return;
    this.title = entity.title;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  }
  close() {
    this.closeSubject.next({});
  }
  closeEvent(): Observable<any> {
    return this.closeSubject.asObservable();
  }
  actionEvent(event) {}
}

