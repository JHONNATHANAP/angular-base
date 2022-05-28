import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  exports: [SelectComponent],
})
export class SelectModule {}
