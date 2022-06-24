import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateListModule } from '@app/ips/components/template-list/template-list.module';
import { EnviosRoutingModule } from './envios-routing.module';
import { EnviosComponent } from './envios.component';

@NgModule({
  declarations: [EnviosComponent],
  imports: [CommonModule, EnviosRoutingModule, TemplateListModule],
})
export class EnviosModule {}
