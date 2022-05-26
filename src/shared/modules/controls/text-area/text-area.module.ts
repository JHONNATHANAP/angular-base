import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextAreaComponent } from './text-area.component';



@NgModule({
  declarations: [
    TextAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextAreaComponent
  ]
})
export class TextAreaModule { }
