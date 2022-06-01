import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGenericModule } from '../../forms';
import { ModalService } from '../modal.service';
import { ModalModule } from '../modal/modal.module';
import { ModalFormComponent } from './modal-form.component';

@NgModule({
  declarations: [ModalFormComponent],
  imports: [CommonModule, ModalModule, FormGenericModule],
  exports: [ModalFormComponent],
  providers: [
    ModalService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class ModalFormModule {}
