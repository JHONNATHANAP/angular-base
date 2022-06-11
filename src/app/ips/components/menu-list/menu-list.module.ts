import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { MenuListComponent } from './menu-list.component';

@NgModule({
  declarations: [MenuListComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    MatIconModule,
  ],
  exports:[MenuListComponent]
})
export class MenuListModule {}
