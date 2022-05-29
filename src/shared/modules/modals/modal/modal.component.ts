import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppModal } from '@src/shared/models/modal-model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() properties!: AppModal;
  @Output() closeEvent = new EventEmitter<any>();

  constructor(private dialogRef: MatDialogRef<any>) { }

 
  closeModal() {
    this.dialogRef.close();
  }

  click(event: any): void {
    this.closeEvent.emit();
  }

}
