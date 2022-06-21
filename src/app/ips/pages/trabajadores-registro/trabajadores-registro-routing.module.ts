import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajadoresRegistroComponent } from './trabajadores-registro.component';

const routes: Routes = [
  {
    path: '',
    component: TrabajadoresRegistroComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabajadoresRegistroRoutingModule { }
