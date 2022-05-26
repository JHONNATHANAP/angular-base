import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateModule } from './date/date.module';
import { InputModule } from './input/input.module';
import { NumberModule } from './number/number.module';
import { SelectModule } from './select/select.module';
import { TextAreaModule } from './text-area/text-area.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    InputModule,
    TextAreaModule,
    SelectModule,
    DateModule,
    NumberModule
  ],
  exports: [
    InputModule,
    TextAreaModule,
    SelectModule,
    DateModule,
    NumberModule
  ]
})
export class ControlsModule { }
