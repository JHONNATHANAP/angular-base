import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajadorComponent } from './trabajador.component';

const routes: Routes = [
  {
    path: '',
    component: TrabajadorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajadorRoutingModule {}
