import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonModule } from '../../buttons';
import { IconComponent } from './icon.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, MatIconModule],
  exports: [IconComponent],
  providers: [],
})
export class IconModule {}
