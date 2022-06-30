import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModalAgregarBeneficiarioModule } from '@app/ips/components/modal-agregar-beneficiario/modal-agregar-beneficiario.module';
import { FormasDePagoModule } from '@app/verificar/components/formas-de-pago/formas-de-pago.module';
import { ModalRetenienteModule } from '@app/verificar/components/modal-reteniente/modal-reteniente.module';
import { ButtonModule, CheckboxModule, FormGenericModule } from '@src/shared';
import { IconModule } from '@src/shared/modules/icons';
import { ListModule } from '@src/shared/modules/lists';
import { TrabajadorRoutingModule } from './trabajador-routing.module';
import { TrabajadorComponent } from './trabajador.component';

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
    CheckboxModule,
    FormasDePagoModule,
    ModalRetenienteModule,
  ],
})
export class TrabajadorModule {}
