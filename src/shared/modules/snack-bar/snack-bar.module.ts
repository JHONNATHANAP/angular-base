import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MatExpansionModule } from '@angular/material/expansion';
import { SnackBarService } from './snack.service';
@NgModule({
  declarations: [SnackBarComponent],
  imports: [CommonModule, MatExpansionModule,MatSnackBarModule],
  exports: [SnackBarComponent],
  providers: [SnackBarService],
})
export class SnackBarModule {}
