import { Component, Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadComponent } from './file-upload.component';

@Directive({
  selector: '[appFilesUpload]'
})
export class FilesUploadDirective {
  @Input() multiple!: boolean;
  @Input() title!: string;
  @Input() accept!: string ;
  @Input() crop!: boolean;
  @Input() component: any = FileUploadComponent;

  @Output() changed = new EventEmitter<string | string[]>();

  constructor(private dialog: MatDialog) { }

  @HostListener('click', ['event']) onClick() {
    this.openDialog();

  }

  private openDialog(): void {

    const dialogRef = this.dialog.open(this.component, {
      width: '550px',
      height: '500px',
      data: {
        multiple: this.multiple,
        crop: this.crop,
        title: this.title ? this.title : '',
        accept:this.accept ? this.accept : '',
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.changed.emit(result || null);
    })

  }


}

