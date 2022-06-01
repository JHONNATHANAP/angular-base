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
import { AppModal } from '@src/shared/models/modal-model';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent {
  @Input() properties!: AppModal;
  @Output() closeEvent = new EventEmitter<any>();
  templateBody!: TemplateRef<any>;
  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: AppModal
  ) {
    this.properties = data;
    this.properties.data.cancelEvent().subscribe((e) => {
      this.closeModal(e);
    });
    this.properties.data.submitEvent().subscribe((e) => {
      this.closeModal(e);
    });
  }

  closeModal(data) {
    this.dialogRef.close(data);
  }

  click(event: any): void {
    this.closeEvent.emit();
  }
}
