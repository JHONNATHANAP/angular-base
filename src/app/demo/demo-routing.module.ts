import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from '@src/const';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: routesPath.home,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: routesPath.controls,
        loadChildren: () =>
          import('./controls/controls.module').then((m) => m.DemoControlsModule),
      },
      {
        path: routesPath.tables,
        loadChildren: () =>
          import('./tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: routesPath.typography,
        loadChildren: () =>
          import('./typography/typography.module').then(
            (m) => m.TypographyModule
          ),
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: `gallerirum/museums`,
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
export class DemoRoutingModule {}
