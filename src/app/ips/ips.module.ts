import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IconModule } from '@src/shared/modules/icons';
import { HeaderComponent } from './components/header/header.component';
import { MenuListModule } from './components/menu-list/menu-list.module';
import { ModalSelectPlantillaModule } from './components/modal-select/modal-select.module';
import { IpsRoutingModule } from './ips-routing.module';
import { IpsComponent } from './ips.component';

@NgModule({
  declarations: [IpsComponent, HeaderComponent],
  imports: [
    CommonModule,
    IpsRoutingModule,
    MatSidenavModule,
    IconModule,
    MatButtonModule,
    MenuListModule,
    ModalSelectPlantillaModule,
  ],
})
export class IpsModule {}
