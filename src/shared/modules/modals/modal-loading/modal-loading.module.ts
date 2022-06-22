import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoadingsModule } from '../../loadings/loadings.module';
import { ModalService } from '../modal.service';
import { ModalLoadingComponent } from './modal-loading.component';

@NgModule({
  declarations: [ModalLoadingComponent],
  imports: [CommonModule, LoadingsModule],
  exports: [ModalLoadingComponent],
  providers: [
    ModalService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class ModalLoadingModule {}
