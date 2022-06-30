import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalAgregarPlantillaModule } from '@app/ips/components/modal-agregar-plantilla/modal-agregar-plantilla.module';
import { ModalLogsModule } from '@app/ips/components/modal-logs/modal-logs.module';
import { TemplateListModule } from '@app/ips/components/template-list/template-list.module';
import { PlantillasCorreoRoutingModule } from './plantillas-correo-routing.module';
import { PlantillasCorreoComponent } from './plantillas-correo.component';

@NgModule({
  declarations: [PlantillasCorreoComponent],
  imports: [
    CommonModule,
    PlantillasCorreoRoutingModule,
    TemplateListModule,
    ModalAgregarPlantillaModule,
    ModalLogsModule,
  ],
})
export class PlantillasCorreoModule {}
