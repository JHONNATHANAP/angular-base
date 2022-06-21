import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CausantesComponent } from './causantes.component';

const routes: Routes = [
  {
    path: '',
    component: CausantesComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CausantesRoutingModule { }
