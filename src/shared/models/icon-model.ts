export interface IAppIcon {
  class: string;
  type?: string;
}
export class AppIcon implements IAppIcon {
  class: string;
  type: string;
  constructor(entity?: IAppIcon) {
    this.class = '';
    this.type = '';
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  }
}
