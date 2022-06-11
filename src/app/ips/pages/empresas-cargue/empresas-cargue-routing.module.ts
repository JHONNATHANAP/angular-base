import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasCargueComponent } from './empresas-cargue.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresasCargueComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasCargueRoutingModule { }
