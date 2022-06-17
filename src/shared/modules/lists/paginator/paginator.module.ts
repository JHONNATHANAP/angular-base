import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ButtonModule } from '../../buttons';
import { IconsModule } from '../../icons';
import { PaginatorComponent } from './paginator.component';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatSelectModule],
  exports: [PaginatorComponent],
})
export class PaginatorModule {}
