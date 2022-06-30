import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalLogsModule } from '@app/ips/components/modal-logs/modal-logs.module';

import { TemplateListModule } from '@app/ips/components/template-list/template-list.module';
import { CausantesRegistroRoutingModule } from './causantes-registro-routing.module';
import { CausantesRegistroComponent } from './causantes-registro.component';

@NgModule({
  declarations: [CausantesRegistroComponent],
  imports: [
    CommonModule,
    CausantesRegistroRoutingModule,
    TemplateListModule,
    ModalLogsModule,
  ],
})
export class CausantesRegistroModule {}
