import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { ModalAgregarEmpresaModule } from '@app/ips/components/modal-agregar-empresa/modal-agregar-empresa.module';
import { ButtonModule, FormGenericModule } from '@src/shared';
import { ExpansionPanelModule } from '@src/shared/modules/expansion-panel/expansion-panel.module';
import { IconModule } from '@src/shared/modules/icons';
import { ListModule } from '@src/shared/modules/lists';
import { ModalsModule } from '@src/shared/modules/modals';
import { FileUploadModule } from '@src/shared/modules/modals/file-upload/file-upload.module';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './empresas.component';
@NgModule({
  declarations: [EmpresasComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    ListModule,
    FormGenericModule,
    ButtonModule,
    IconModule,
    ModalsModule,
    FileUploadModule,
    MatButtonModule,
    ExpansionPanelModule,
    ModalAgregarEmpresaModule
  ],
})
export class EmpresasModule {}
