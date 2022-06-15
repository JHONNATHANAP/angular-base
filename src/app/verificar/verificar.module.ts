import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificarRoutingModule } from './verificar-routing.module';
import { VerificarComponent } from './verificar.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    VerificarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    VerificarRoutingModule
  ]
})
export class VerificarModule { }
