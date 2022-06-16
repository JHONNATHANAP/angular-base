import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { BeneficiarioComponent } from './beneficiario.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule, FormGenericModule } from '@src/shared';
import { IconModule } from '@src/shared/modules/icons';
import { ModalAgregarBeneficiarioModule } from '@app/ips/components/modal-agregar-beneficiario/modal-agregar-beneficiario.module';

@NgModule({
  declarations: [BeneficiarioComponent],
  imports: [
    CommonModule,
    BeneficiarioRoutingModule,
    IconModule,
    MatButtonModule,
    FormGenericModule,
    ButtonModule,
    ModalAgregarBeneficiarioModule,
  ],
})
export class BeneficiarioModule {}
