import { sharedConts } from '..';
import { Appframework } from './control-model';

export interface IAppButton {
  type?: ButtonType;
  class?: string;
  data?: any;
  framework?: Appframework;
  color?: IAppColorButton;
  action?: string;
}
export type IAppColorButton = 'primary' | 'accent' | 'warn';
export class AppButton implements IAppButton {
  framework?: Appframework = sharedConts.forms.framework;
  color?: IAppColorButton;
  constructor(entity?: IAppButton) {
    this.type = 'button';
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  }
  type?: ButtonType | undefined;
  class?: string | undefined;
  data: any;
}
export type ButtonType = 'button' | 'submit';
