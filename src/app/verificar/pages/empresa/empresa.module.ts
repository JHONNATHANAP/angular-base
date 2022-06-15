import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';
import { IconModule } from '@src/shared/modules/icons';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule, FormGenericModule } from '@src/shared';
import { ListModule } from '@src/shared/modules/lists';

@NgModule({
  declarations: [EmpresaComponent],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    IconModule,
    MatButtonModule,
    FormGenericModule,
    ListModule,
    ButtonModule
  ],
})
export class EmpresaModule {}
