import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateListModule } from '@app/ips/components/template-list/template-list.module';
import { CausantesRoutingModule } from './causantes-routing.module';
import { CausantesComponent } from './causantes.component';
@NgModule({
  declarations: [CausantesComponent],
  imports: [CommonModule, CausantesRoutingModule, TemplateListModule],
})
export class CausantesModule {}
