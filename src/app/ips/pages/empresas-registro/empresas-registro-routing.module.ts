import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasRegistroComponent } from './empresas-registro.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresasRegistroComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasCargueRoutingModule { }
