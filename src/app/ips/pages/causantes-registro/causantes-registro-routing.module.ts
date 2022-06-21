import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CausantesRegistroComponent } from './causantes-registro.component';

const routes: Routes = [
  {
    path: '',
    component: CausantesRegistroComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CausantesRegistroRoutingModule { }
