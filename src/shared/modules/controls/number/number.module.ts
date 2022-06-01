import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    NumberComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    NumberComponent
  ]
})
export class NumberModule { }
