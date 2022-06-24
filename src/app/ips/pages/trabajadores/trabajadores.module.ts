import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateListModule } from '@app/ips/components/template-list/template-list.module';
import { BeneficiariosRoutingModule } from './trabajadores-routing.module';
import { TrabajadoresComponent } from './trabajadores.component';

@NgModule({
  declarations: [TrabajadoresComponent],
  imports: [CommonModule, BeneficiariosRoutingModule, TemplateListModule],
})
export class TrabajadoresModule {}
