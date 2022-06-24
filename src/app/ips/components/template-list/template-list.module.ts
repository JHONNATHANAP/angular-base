import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ButtonModule, FormGenericModule } from '@src/shared';
import { ExpansionPanelModule } from '@src/shared/modules/expansion-panel';
import { IconModule } from '@src/shared/modules/icons';
import { ListModule } from '@src/shared/modules/lists';
import { ModalsModule } from '@src/shared/modules/modals';
import { FileUploadModule } from '@src/shared/modules/modals/file-upload/file-upload.module';
import { SnackBarModule } from '@src/shared/modules/snack-bar';
import { FiltrosSeleccionadosModule } from '../filtros-seleccionados/filtros-seleccionados.module';
import { TemplateListComponent } from './template-list.component';

@NgModule({
  declarations: [TemplateListComponent],
  imports: [
    CommonModule,
    ListModule,
    FormGenericModule,
    ButtonModule,
    IconModule,
    ModalsModule,
    FileUploadModule,
    MatButtonModule,
    ExpansionPanelModule,
    FiltrosSeleccionadosModule,
    SnackBarModule
  ],
  exports:[TemplateListComponent,SnackBarModule,ModalsModule]
})
export class TemplateListModule {}
