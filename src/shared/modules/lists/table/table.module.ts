import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from './table.component';
import { IconsModule } from '../../icons';
import { ButtonModule } from '../../buttons';
import { PaginatorModule } from '../paginator/paginator.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    IconsModule,
    ButtonModule,
    PaginatorModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
