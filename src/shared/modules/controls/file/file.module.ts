import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FileUploadModule } from '../../modals/file-upload/file-upload.module';
import { FileComponent } from './file.component';

@NgModule({
  declarations: [
    FileComponent,
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [FileComponent],
})
export class FileModule {}
