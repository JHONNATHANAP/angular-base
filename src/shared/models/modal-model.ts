import { ComponentType } from '@angular/cdk/portal';
import { AppButton } from './button-model';
import { AppFormButton } from './form-model';



export interface IAppModal {
  title?: string;
  component?: ComponentType<any>;
  actions?: AppFormButton[];
}
export class AppModal implements IAppModal {
  title?: string;
  component?: ComponentType<any>;
  actions?: AppFormButton[];
  constructor(entity: IAppModal) {
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  }
  actionEvent(event){

  }
}
