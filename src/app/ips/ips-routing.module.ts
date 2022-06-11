import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from '@src/const';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: routesPath.empresas,
        loadChildren: () =>
          import('./pages/empresas/empresas.module').then(
            (m) => m.EmpresasModule
          ),
      },
      {
        path: routesPath.empresasCargue,
        loadChildren: () =>
          import('./pages/empresas-cargue/empresas-cargue.module').then(
            (m) => m.EmpresasCargueModule
          ),
      },
      {
        path: routesPath.beneficiarios,
        loadChildren: () =>
          import('./pages/beneficiarios/beneficiarios.module').then(
            (m) => m.BeneficiariosModule
          ),
      },
      {
        path: routesPath.beneficiariosCargue,
        loadChildren: () =>
          import('./pages/beneficiarios-cargue/beneficiarios-cargue.module').then(
            (m) => m.BeneficiariosCargueModule
          ),
      },
      {
        path: routesPath.plantillas,
        loadChildren: () =>
          import('./pages/plantillas-correo/plantillas-correo.module').then(
            (m) => m.PlantillasCorreoModule
          ),
      },
      {
        path: routesPath.envios,
        loadChildren: () =>
          import('./pages/envios/envios.module').then(
            (m) => m.EnviosModule
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
export class IpsRoutingModule {}
