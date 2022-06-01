import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ButtonModule } from '../../buttons';
import { ModalService } from '../modal.service';
import { IconsModule } from '../../icons';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    ButtonModule,
    IconsModule
    
  ],
  exports: [ModalComponent],
  providers: [ModalService ,{
    provide: MatDialogRef,
    useValue: {}
  },]
})
export class ModalModule {}
