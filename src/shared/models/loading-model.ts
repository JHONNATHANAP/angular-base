export interface IAppLoading {
  class?: string;
  color?: string;
  mode?: 'determinate' | 'indeterminate';
  value?: string;
}
export class AppLoading implements IAppLoading {
  constructor(entity?: IAppLoading) {
    this.mode = 'indeterminate';
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  }
  class?: string;
  color?: string;
  mode: 'determinate' | 'indeterminate';
  value?: string;
}
