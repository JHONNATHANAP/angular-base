import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariosCargueComponent } from './beneficiarios-cargue.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficiariosCargueComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiariosCargueRoutingModule { }
