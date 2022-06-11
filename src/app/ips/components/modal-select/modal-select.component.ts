import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppModal } from '@src/shared';

@Component({
  selector: 'app-modal-select',
  templateUrl: './modal-select.component.html',
  styleUrls: ['./modal-select.component.scss'],
})
export class ModalSelectComponent {
  @Input() properties!: AppModal;
  @Output() closeEvent = new EventEmitter<any>();

  templateBody!: TemplateRef<any>;
  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: AppModal
  ) {
    this.properties = data;
  }

  closeModal(data) {
    this.dialogRef.close(data);
  }

  click(event: any): void {
    this.closeEvent.emit();
  }
}
