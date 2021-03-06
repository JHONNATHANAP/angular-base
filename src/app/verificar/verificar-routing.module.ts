import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from '@src/const';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: routesPath.empresa,
        loadChildren: () =>
          import('./pages/empresa/empresa.module').then((m) => m.EmpresaModule),
      },
      {
        path: routesPath.trabajador,
        loadChildren: () =>
          import('./pages/trabajador/trabajador.module').then(
            (m) => m.TrabajadorModule
          ),
      },
    ],
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'demo/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificarRoutingModule {}
