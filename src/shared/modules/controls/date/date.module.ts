import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateComponent } from './date.component';



@NgModule({
  declarations: [
    DateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateComponent
  ]
})
export class DateModule { }
