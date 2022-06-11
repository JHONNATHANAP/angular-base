import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, FormGenericModule } from '@src/shared';
import { IconModule } from '@src/shared/modules/icons';
import { ListModule } from '@src/shared/modules/lists';
import { ModalsModule } from '@src/shared/modules/modals';
import { FileUploadModule } from '@src/shared/modules/modals/file-upload/file-upload.module';
import { EnviosRoutingModule } from './envios-routing.module';
import { EnviosComponent } from './envios.component';


@NgModule({
  declarations: [
    EnviosComponent
  ],
  imports: [
    CommonModule,
    EnviosRoutingModule,
    ListModule,
    FormGenericModule,
    ButtonModule,
    IconModule,
    ModalsModule,
    FileUploadModule,
  ]
})
export class EnviosModule { }
