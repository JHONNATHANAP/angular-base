import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateListModule } from '@app/ips/components/template-list/template-list.module';
import { EmpresasCargueRoutingModule } from './empresas-registro-routing.module';
import { EmpresasRegistroComponent } from './empresas-registro.component';

@NgModule({
  declarations: [EmpresasRegistroComponent],
  imports: [CommonModule, EmpresasCargueRoutingModule, TemplateListModule],
})
export class EmpresasRegistroModule {}
