import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload.component';
import { FilesUploadDirective } from './files-upload.directive';

@NgModule({
  declarations: [FileUploadComponent,DropZoneDirective,FilesUploadDirective],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    
  ],
  exports: [FilesUploadDirective],
})
export class FileUploadModule {}
