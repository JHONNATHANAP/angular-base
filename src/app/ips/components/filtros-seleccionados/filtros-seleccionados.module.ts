import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosSeleccionadosComponent } from './filtros-seleccionados.component';
import { CheckboxModule } from '@src/shared';
import { IconModule } from '@src/shared/modules/icons';

@NgModule({
  declarations: [FiltrosSeleccionadosComponent],
  imports: [CommonModule, CheckboxModule, IconModule],
  exports: [FiltrosSeleccionadosComponent],
})
export class FiltrosSeleccionadosModule {}
