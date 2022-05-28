import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TextAreaComponent } from './text-area.component';



@NgModule({
  declarations: [
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    TextFieldModule
  ],
  exports: [
    TextAreaComponent
 
  ]
})
export class TextAreaModule { }
