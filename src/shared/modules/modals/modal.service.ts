import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppModal } from '@src/shared/models/modal-model';
import { Observable, Subject } from 'rxjs';
export type ModalType = AppModal;
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private closeSubject = new Subject<any>();
  private changeSubject = new Subject<any>();
  private modal: ModalType;
  constructor(private dialog: MatDialog) {
    this.modal = new AppModal();
  }
  new(newModal: ModalType): ModalService {
    this.modal = newModal;
    this.modal.closeEvent().subscribe((e) => {
      this.close(e);
    });
    this.modal.changeEvent().subscribe((e: ModalType) => {
      this.close(e);
      this.open();
    });
    return this;
  }
  open(): ModalService {
    this.dialog.open(this.modal.component, {
      panelClass: this.modal.panelClass,
      maxWidth: this.modal.full ? '100vw' : '',
      maxHeight: this.modal.full ? '100vh' : '',
      height: this.modal.full ? '100%' : '',
      width: this.modal.full ? '100%' : '',
      data: this.modal,
    });
    return this;
  }
  close(data?:any) {
    this.dialog.closeAll();
    this.closeSubject.next(this.modal);
  }
  closeEvent(): Observable<any> {
    return this.closeSubject.asObservable();
  }
}
