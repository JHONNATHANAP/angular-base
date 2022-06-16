import { Subject, Observable } from 'rxjs';

export interface IAppSnackBar {
  messaje: string;
  action?: string;
  class?: string;
  duration?: number;
}

export class AppSnackBar implements IAppSnackBar {
  messaje: string;
  action?: string | undefined;
  class?: string;
  duration?: number;
  private closeSubject = new Subject<any>();
  private changeSubject = new Subject<any>();
  data?: any;
  constructor(entity?: IAppSnackBar) {
    this.messaje = '';
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] ? entity[e] : this[e];
    });
  }
  close(info?: any) {
    this.data = info ? info : this.data;
    this.closeSubject.next(this.data);
  }
  closeEvent(): Observable<any> {
    return this.closeSubject.asObservable();
  }
  changeEvent(): Observable<any> {
    return this.changeSubject.asObservable();
  }
  actionEvent(data?: any) {}
}
