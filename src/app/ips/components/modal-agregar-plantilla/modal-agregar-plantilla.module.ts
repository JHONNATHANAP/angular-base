import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAgregarPlantillaComponent } from './modal-agregar-plantilla.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGenericModule } from '@src/shared';
import { ModalModule } from '@src/shared/modules/modals';
import { ModalService } from '@src/shared/modules/modals/modal.service';

@NgModule({
  declarations: [ModalAgregarPlantillaComponent],
  imports: [CommonModule, ModalModule, FormGenericModule],
  providers: [
    ModalService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  exports: [ModalAgregarPlantillaComponent],
})
export class ModalAgregarPlantillaModule {}
