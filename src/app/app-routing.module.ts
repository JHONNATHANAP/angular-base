import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from '@src/const';
import { DemoComponent } from './demo/demo.component';
import { IpsComponent } from './ips/ips.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `demo/home`,
  },
  {
    path: routesPath.ips,
    component:IpsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./ips/ips.module').then((m) => m.IpsModule),
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
