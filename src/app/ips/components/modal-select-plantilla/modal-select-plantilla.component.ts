import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import {
  AppFormButton,
  AppFormGeneric,
  AppList,
  AppListActionType,
  AppModal,
  IAppListAction,
  sharedConts,
} from '@src/shared';
import moment from 'moment';

@Component({
  selector: 'app-modal-select-plantilla',
  templateUrl: './modal-select-plantilla.component.html',
  styleUrls: ['./modal-select-plantilla.component.scss'],
})
export class ModalSelectPlantillaComponent {
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
