import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppIcon } from '@src/shared/models';
import { AppModal } from '@src/shared/models/modal-model';

@Component({
  selector: 'app-modal-loading',
  templateUrl: './modal-loading.component.html',
  styleUrls: ['./modal-loading.component.scss'],
})
export class ModalLoadingComponent {
  @Input() properties!: AppModal;
  @Output() closeEvent = new EventEmitter<any>();
  closeButton: AppIcon = new AppIcon({ class: 'close' });
  openFullButton: AppIcon = new AppIcon({
    class: 'open_in_full',
  });
  closeFullButton: AppIcon = new AppIcon({
    class: 'close_fullscreen',
  });
  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: AppModal
  ) {
    this.properties = data;
  }

  closeModal() {
    this.dialogRef.close();
  }

  click(event: any): void {
    this.closeEvent.emit();
  }
}
