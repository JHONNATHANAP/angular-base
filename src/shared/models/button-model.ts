export interface IAppButton {
  type?: ButtonType;
  class?: string;
  data?: any;
}
export class AppButton implements IAppButton {
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
