import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateListModule } from '@app/ips/components/template-list/template-list.module';
import { CausantesRegistroRoutingModule } from './causantes-registro-routing.module';
import { CausantesRegistroComponent } from './causantes-registro.component';

@NgModule({
  declarations: [CausantesRegistroComponent],
  imports: [CommonModule, CausantesRegistroRoutingModule, TemplateListModule],
})
export class CausantesRegistroModule {}
