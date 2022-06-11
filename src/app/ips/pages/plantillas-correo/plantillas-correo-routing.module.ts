import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillasCorreoComponent } from './plantillas-correo.component';

const routes: Routes = [
  {
    path: '',
    component: PlantillasCorreoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantillasCorreoRoutingModule {}
