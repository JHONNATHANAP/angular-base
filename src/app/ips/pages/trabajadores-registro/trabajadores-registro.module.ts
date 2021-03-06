import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalLogsModule } from '@app/ips/components/modal-logs/modal-logs.module';

import { TemplateListModule } from '@app/ips/components/template-list/template-list.module';
import { TrabajadoresRegistroRoutingModule } from './trabajadores-registro-routing.module';
import { TrabajadoresRegistroComponent } from './trabajadores-registro.component';

@NgModule({
  declarations: [TrabajadoresRegistroComponent],
  imports: [
    CommonModule,
    TrabajadoresRegistroRoutingModule,
    TemplateListModule,
    ModalLogsModule,
  ],
})
export class TrabajadoresRegistroModule {}
