import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppModal } from '@src/shared';

@Component({
  selector: 'app-modal-agregar-plantilla',
  templateUrl: './modal-agregar-plantilla.component.html',
  styleUrls: ['./modal-agregar-plantilla.component.scss'],
})
export class ModalAgregarPlantillaComponent {
  @Input() properties!: AppModal;
  @Output() closeEvent = new EventEmitter<any>();
  templateBody!: TemplateRef<any>;
  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: AppModal
  ) {
    this.properties = data;
    console.log(this.properties);
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
