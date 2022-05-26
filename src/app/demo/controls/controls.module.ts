import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlsRoutingModule } from './controls-routing.module';
import { ControlsComponent } from './controls.component';
import { FormGenericModule } from '@src/shared';


@NgModule({
  declarations: [
    ControlsComponent
  ],
  imports: [
    CommonModule,
    ControlsRoutingModule,
    FormGenericModule
  ]
})
export class ControlsModule { }
