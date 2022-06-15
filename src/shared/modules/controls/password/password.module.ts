import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassowrdComponent } from './password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IconModule } from '../../icons';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PassowrdComponent],
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule,IconModule,MatButtonModule],
  exports: [PassowrdComponent],
})
export class PasswordModule {}
