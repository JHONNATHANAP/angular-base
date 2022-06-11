import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiariosRoutingModule } from './beneficiarios-routing.module';
import { BeneficiariosComponent } from './beneficiarios.component';
import { FormGenericModule, ButtonModule } from '@src/shared';
import { IconModule } from '@src/shared/modules/icons';
import { ListModule } from '@src/shared/modules/lists';
import { ModalsModule } from '@src/shared/modules/modals';
import { FileUploadModule } from '@src/shared/modules/modals/file-upload/file-upload.module';


@NgModule({
  declarations: [
    BeneficiariosComponent
  ],
  imports: [
    CommonModule,
    BeneficiariosRoutingModule,
    ListModule,
    FormGenericModule,
    ButtonModule,
    IconModule,
    ModalsModule,
    FileUploadModule
  ]
})
export class BeneficiariosModule { }
