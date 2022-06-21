import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajadorRoutingModule } from './trabajador-routing.module';
import { TrabajadorComponent } from './trabajador.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule, CheckboxModule, FormGenericModule } from '@src/shared';
import { IconModule } from '@src/shared/modules/icons';
import { ModalAgregarBeneficiarioModule } from '@app/ips/components/modal-agregar-beneficiario/modal-agregar-beneficiario.module';
import { ListModule } from '@src/shared/modules/lists';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TrabajadorComponent],
  imports: [
    CommonModule,
    TrabajadorRoutingModule,
    IconModule,
    MatButtonModule,
    FormGenericModule,
    ButtonModule,
    ModalAgregarBeneficiarioModule,
    ListModule,
    MatIconModule,
    CheckboxModule
  ],
})
export class TrabajadorModule {}
