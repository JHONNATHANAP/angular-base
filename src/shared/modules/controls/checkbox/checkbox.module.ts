import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { CheckboxComponent } from './checkbox.component';
@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, MatIconModule, MatCheckboxModule],
  exports: [CheckboxComponent],
})
export class CheckboxModule {}
