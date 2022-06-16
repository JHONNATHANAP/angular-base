import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAgregarBeneficiarioComponent } from './modal-agregar-beneficiario.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonsModule, FormGenericModule } from '@src/shared';
import { ModalModule } from '@src/shared/modules/modals';
import { ModalService } from '@src/shared/modules/modals/modal.service';

@NgModule({
  declarations: [ModalAgregarBeneficiarioComponent],
  imports: [CommonModule, ModalModule, FormGenericModule, ButtonsModule],
  providers: [
    ModalService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class ModalAgregarBeneficiarioModule {}
