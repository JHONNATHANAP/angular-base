import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantillasCorreoRoutingModule } from './plantillas-correo-routing.module';
import { PlantillasCorreoComponent } from './plantillas-correo.component';
import { FormGenericModule, ButtonModule } from '@src/shared';
import { IconModule } from '@src/shared/modules/icons';
import { ListModule } from '@src/shared/modules/lists';
import { ModalsModule } from '@src/shared/modules/modals';
import { FileUploadModule } from '@src/shared/modules/modals/file-upload/file-upload.module';
import { ModalAgregarPlantillaModule } from '@app/ips/components/modal-agregar-plantilla/modal-agregar-plantilla.module';


@NgModule({
  declarations: [
    PlantillasCorreoComponent
  ],
  imports: [
    CommonModule,
    PlantillasCorreoRoutingModule,
    ListModule,
    FormGenericModule,
    ButtonModule,
    IconModule,
    ModalsModule,
    FileUploadModule,
    ModalAgregarPlantillaModule
  ]
})
export class PlantillasCorreoModule { }
