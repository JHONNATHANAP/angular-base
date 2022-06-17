import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from './table.component';
import { IconsModule } from '../../icons';
import { ButtonModule } from '../../buttons';
import { PaginatorModule } from '../paginator/paginator.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    IconsModule,
    ButtonModule,
    PaginatorModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
