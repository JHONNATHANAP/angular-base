import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAgregarEmpresaComponent } from './modal-agregar-empresa.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonsModule, FormGenericModule } from '@src/shared';
import { ModalModule } from '@src/shared/modules/modals';
import { ModalService } from '@src/shared/modules/modals/modal.service';

@NgModule({
  declarations: [ModalAgregarEmpresaComponent],
  imports: [CommonModule, ModalModule, FormGenericModule, ButtonsModule],
  providers: [
    ModalService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class ModalAgregarEmpresaModule {}
