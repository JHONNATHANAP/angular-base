import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { ListModule } from '@src/shared/modules/lists';


@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    ListModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
