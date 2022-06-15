export interface IAppExpansionPanel {
  title?: string;
  description?: string;
  expanded?: boolean;
  class?: string;
}
export class AppExpansionPanel implements IAppExpansionPanel {
  title?: string;
  description?: string;
  class?: string;
  constructor(entity?: IAppExpansionPanel) {
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] != null ? entity[e] : this[e];
    });
  }
  expanded?: boolean = true;
}
