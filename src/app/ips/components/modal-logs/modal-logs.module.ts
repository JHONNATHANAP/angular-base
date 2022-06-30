import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonsModule, FormGenericModule } from '@src/shared';
import { ListModule } from '@src/shared/modules/lists';
import { ModalModule } from '@src/shared/modules/modals';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import { ModalLogsComponent } from './modal-logs.component';

@NgModule({
  declarations: [ModalLogsComponent],
  imports: [
    CommonModule,
    ModalModule,
    FormGenericModule,
    ButtonsModule,
    ListModule,
  ],
  providers: [
    ModalService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  exports: [ModalLogsComponent],
})
export class ModalLogsModule {}
