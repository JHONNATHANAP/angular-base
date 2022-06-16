import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormGenericModule } from '@src/shared';
import { SnackBarModule } from '@src/shared/modules/snack-bar';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormGenericModule,SnackBarModule],
})
export class LoginModule {}
