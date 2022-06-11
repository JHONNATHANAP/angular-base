import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './empresas.component';
import { ListModule } from '@src/shared/modules/lists';
import { ButtonModule, FormGenericModule } from '@src/shared';
import { IconModule } from '@src/shared/modules/icons';
import { ModalsModule } from '@src/shared/modules/modals';
import { FileUploadModule } from '@src/shared/modules/modals/file-upload/file-upload.module';

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
    FileUploadModule
  ],
})
export class EmpresasModule {}
