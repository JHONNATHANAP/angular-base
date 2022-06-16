import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppModal } from '@src/shared/models/modal-model';
import { AppSnackBar } from '@src/shared/models/snack-bar-model';
import { Observable, Subject } from 'rxjs';
export type ModalType = AppModal;
@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private closeSubject = new Subject<any>();
  private changeSubject = new Subject<any>();
  private snack: AppSnackBar;
  constructor(private _snackBar: MatSnackBar) {
    this.snack = new AppSnackBar();
  }
  new(newModal: AppSnackBar): SnackBarService {
    this.snack = newModal;
    this.snack.closeEvent().subscribe((e) => {
      this.close(e);
    });
    this.snack.changeEvent().subscribe((e: ModalType) => {
      this.close(e);
      this.open();
    });
    return this;
  }
  open(): SnackBarService {
    this._snackBar.open(this.snack.messaje, this.snack.action, {
      panelClass: this.snack.class,
      duration: this.snack.duration,
    });
    return this;
  }
  close(data?: any) {
    this._snackBar.dismiss();
    this.closeSubject.next(this.snack);
  }
  closeEvent(): Observable<any> {
    return this.closeSubject.asObservable();
  }
}
