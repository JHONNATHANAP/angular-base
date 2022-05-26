import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardModule } from './list-card/list-card.module';
import { ListCardDetailModule } from './list-card-detail/list-card-detail.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListCardModule,
    ListCardDetailModule
  ],
  exports:[
    ListCardModule,
    ListCardDetailModule
  ]
})
export class ListsModule { }
