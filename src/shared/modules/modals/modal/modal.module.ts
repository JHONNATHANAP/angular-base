import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from '../../buttons';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    ButtonModule,
  ],
  exports: [ModalComponent],
})
export class ModalModule {}
