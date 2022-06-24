import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from './modal/modal.module';
import { ModalService } from './modal.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ModalFormModule } from './modal-form/modal-form.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { ModalLoadingModule } from './modal-loading/modal-loading.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalModule,
    ModalFormModule,
    ModalLoadingModule,
    FileUploadModule,
    MatDialogModule,
  ],
  providers: [
    ModalService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
    ModalService,
  ],
  exports: [ModalModule, ModalFormModule,
    ModalLoadingModule,
    FileUploadModule,
    MatDialogModule,],
})
export class ModalsModule {}
