import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlsRoutingModule } from './controls-routing.module';
import { ControlsComponent } from './controls.component';
import { FormGenericModule } from '@src/shared';
import { ModalModule } from '@src/shared/modules/modals';


@NgModule({
  declarations: [
    ControlsComponent
  ],
  imports: [
    CommonModule,
    ControlsRoutingModule,
    FormGenericModule,
    ModalModule
  ]
})
export class DemoControlsModule { }
