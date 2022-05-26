import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardDetailComponent } from './list-card-detail.component';
import { ButtonsModule } from '../../buttons';



@NgModule({
  declarations: [
    ListCardDetailComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports:[ListCardDetailComponent]
})
export class ListCardDetailModule { }
