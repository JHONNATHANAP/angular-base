import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { FiltrosSeleccionadosModule } from '@app/ips/components/filtros-seleccionados/filtros-seleccionados.module';
import { ModalAgregarBeneficiarioModule } from '@app/ips/components/modal-agregar-beneficiario/modal-agregar-beneficiario.module';
import { ButtonModule, FormGenericModule } from '@src/shared';
import { ExpansionPanelModule } from '@src/shared/modules/expansion-panel';
import { IconModule } from '@src/shared/modules/icons';
import { ListModule } from '@src/shared/modules/lists';
import { ModalsModule } from '@src/shared/modules/modals';
import { FileUploadModule } from '@src/shared/modules/modals/file-upload/file-upload.module';
import { SnackBarModule } from '@src/shared/modules/snack-bar';
import { BeneficiariosRoutingModule } from './trabajadores-routing.module';
import { TrabajadoresComponent } from './trabajadores.component';

@NgModule({
  declarations: [TrabajadoresComponent],
  imports: [
    CommonModule,
    BeneficiariosRoutingModule,
    ListModule,
    FormGenericModule,
    ButtonModule,
    IconModule,
    ModalsModule,
    FileUploadModule,
    MatButtonModule,
    ExpansionPanelModule,
    ModalAgregarBeneficiarioModule,
    FiltrosSeleccionadosModule,
    SnackBarModule,
  ],
})
export class TrabajadoresModule {}
