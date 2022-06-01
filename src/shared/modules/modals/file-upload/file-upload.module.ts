import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from '../../buttons';
import { IconsModule } from '../../icons';
import { ModalModule } from '../modal/modal.module';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload.component';
import { FilesUploadDirective } from './files-upload.directive';

@NgModule({
  declarations: [FileUploadComponent,DropZoneDirective,FilesUploadDirective],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ButtonModule,
    IconsModule,
    ModalModule
    
  ],
  exports: [FilesUploadDirective],
})
export class FileUploadModule {}
