import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiariosCargueRoutingModule } from './beneficiarios-cargue-routing.module';
import { BeneficiariosCargueComponent } from './beneficiarios-cargue.component';
import { FormGenericModule, ButtonModule } from '@src/shared';
import { IconModule } from '@src/shared/modules/icons';
import { ListModule } from '@src/shared/modules/lists';
import { ModalsModule } from '@src/shared/modules/modals';
import { FileUploadModule } from '@src/shared/modules/modals/file-upload/file-upload.module';


@NgModule({
  declarations: [
    BeneficiariosCargueComponent
  ],
  imports: [
    CommonModule,
    BeneficiariosCargueRoutingModule,
    ListModule,
    FormGenericModule,
    ButtonModule,
    IconModule,
    ModalsModule,
    FileUploadModule
  ]
})
export class BeneficiariosCargueModule { }
