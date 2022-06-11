import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGenericModule } from '@src/shared';
import { ListModule } from '@src/shared/modules/lists';
import { ModalSelectComponent } from './modal-select.component';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import { ModalModule } from '@src/shared/modules/modals';

@NgModule({
  declarations: [ModalSelectComponent],
  imports: [CommonModule, FormGenericModule, ListModule, ModalModule],
  providers: [ModalService],
})
export class ModalSelectPlantillaModule {}
