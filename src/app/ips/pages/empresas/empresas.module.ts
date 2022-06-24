import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateListModule } from '@app/ips/components/template-list/template-list.module';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './empresas.component';
@NgModule({
  declarations: [EmpresasComponent],
  imports: [CommonModule, EmpresasRoutingModule, TemplateListModule],
})
export class EmpresasModule {}
