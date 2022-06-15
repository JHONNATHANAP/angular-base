import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from '@src/const';
import { AuthComponent } from './auth/auth.component';
import { DemoComponent } from './demo/demo.component';
import { IpsComponent } from './ips/ips.component';
import { VerificarComponent } from './verificar/verificar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `auth/login`,
  },
  {
    path: routesPath.auth,
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: routesPath.ips,
    component: IpsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./ips/ips.module').then((m) => m.IpsModule),
      },
    ],
  },
  {
    path: routesPath.verificar,
    component: VerificarComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./verificar/verificar.module').then((m) => m.VerificarModule),
      },
    ],
  },
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: routesPath.demo,
        loadChildren: () =>
          import('./demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
