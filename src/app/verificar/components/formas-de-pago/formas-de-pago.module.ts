import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormasDePagoComponent } from './formas-de-pago.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@src/shared/modules/icons';
@NgModule({
  declarations: [FormasDePagoComponent],
  imports: [CommonModule,MatRadioModule,FormsModule,MatButtonModule,IconModule],
  exports: [FormasDePagoComponent],
})
export class FormasDePagoModule {}
