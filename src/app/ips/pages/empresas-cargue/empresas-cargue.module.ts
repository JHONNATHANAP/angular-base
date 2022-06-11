import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasCargueRoutingModule } from './empresas-cargue-routing.module';
import { EmpresasCargueComponent } from './empresas-cargue.component';
import { FormGenericModule, ButtonModule } from '@src/shared';
import { IconModule } from '@src/shared/modules/icons';
import { ListModule } from '@src/shared/modules/lists';
import { ModalsModule } from '@src/shared/modules/modals';
import { FileUploadModule } from '@src/shared/modules/modals/file-upload/file-upload.module';

@NgModule({
  declarations: [EmpresasCargueComponent],
  imports: [
    CommonModule,
    EmpresasCargueRoutingModule,
    ListModule,
    FormGenericModule,
    ButtonModule,
    IconModule,
    ModalsModule,
    FileUploadModule,
  ],
})
export class EmpresasCargueModule {}
