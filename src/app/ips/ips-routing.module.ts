import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from '@src/const';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: routesPath.registro,
        loadChildren: () =>
          import('./pages/registro/registro.module').then(
            (m) => m.RegistroModule
          ),
      },
      {
        path: routesPath.empresas,
        loadChildren: () =>
          import('./pages/empresas/empresas.module').then(
            (m) => m.EmpresasModule
          ),
      },
      {
        path: routesPath.empresasRegistro,
        loadChildren: () =>
          import('./pages/empresas-registro/empresas-registro.module').then(
            (m) => m.EmpresasRegistroModule
          ),
      },
      {
        path: routesPath.trabajadores,
        loadChildren: () =>
          import('./pages/trabajadores/trabajadores.module').then(
            (m) => m.TrabajadoresModule
          ),
      },
      {
        path: routesPath.trabajadoresRegistro,
        loadChildren: () =>
          import(
            './pages/trabajadores-registro/trabajadores-registro.module'
          ).then((m) => m.TrabajadoresRegistroModule),
      },
      {
        path: routesPath.causantes,
        loadChildren: () =>
          import('./pages/causantes/causantes.module').then(
            (m) => m.CausantesModule
          ),
      },
      {
        path: routesPath.causantesRegistro,
        loadChildren: () =>
          import(
            './pages/causantes-registro/causantes-registro.module'
          ).then((m) => m.CausantesRegistroModule),
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
          import('./pages/envios/envios.module').then((m) => m.EnviosModule),
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
