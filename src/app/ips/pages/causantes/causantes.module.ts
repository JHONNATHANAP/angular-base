import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { FiltrosSeleccionadosModule } from '@app/ips/components/filtros-seleccionados/filtros-seleccionados.module';
import { ModalAgregarEmpresaModule } from '@app/ips/components/modal-agregar-empresa/modal-agregar-empresa.module';
import { ButtonModule, CheckboxModule, FormGenericModule } from '@src/shared';
import { ExpansionPanelModule } from '@src/shared/modules/expansion-panel/expansion-panel.module';
import { IconModule } from '@src/shared/modules/icons';
import { ListModule } from '@src/shared/modules/lists';
import { ModalsModule } from '@src/shared/modules/modals';
import { FileUploadModule } from '@src/shared/modules/modals/file-upload/file-upload.module';
import { SnackBarModule } from '@src/shared/modules/snack-bar';
import { CausantesRoutingModule } from './causantes-routing.module';
import { CausantesComponent } from './causantes.component';
@NgModule({
  declarations: [CausantesComponent],
  imports: [
    CommonModule,
    CausantesRoutingModule,
    ListModule,
    FormGenericModule,
    ButtonModule,
    IconModule,
    ModalsModule,
    FileUploadModule,
    MatButtonModule,
    ExpansionPanelModule,
    ModalAgregarEmpresaModule,
    FiltrosSeleccionadosModule,
    SnackBarModule,
  ],
})
export class CausantesModule {}
