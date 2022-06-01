import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppButton, AppIcon } from '@src/shared/models';
import { AppModal } from '@src/shared/models/modal-model';

export interface DialogData {
  multiple: boolean;
  crop: boolean;
}

@Component({
  selector: 'app-files-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  @Input() properties!: AppModal;
  isHovering?: boolean;
  @Input() title!: string;
  @Input() accept!: string;
  files: File[] = [];
  imageFile!: File | null;
  isError!: boolean;
  closeButton: AppButton = new AppButton({ color: 'accent' });
  modalProperties: AppModal = new AppModal();

  filesURLs: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<FileUploadComponent>,
    // private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modalProperties.closeEvent().subscribe((data) => {
      this.onClose();
    });
  }

  ngOnInit(): void {
    console.log(this.data);
    this.accept = this.data?.accept;
    this.modalProperties.title = this.data?.title;
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList): void {
    this.dropGeneral(files);
  }

  onDropFile(event: FileList | any): void {
    this.dropGeneral(event.target.files);
  }
  accepted(): string {
    switch (this.accept) {
      case 'pdf':
        return 'application/pdf';

        break;

      default:
        return '';
        break;
    }
  }

  dropGeneral(files: FileList): void {
    const extension = files[0].name.split('.').pop();
    if (this.accept && extension != this.accept) {
      // this.notification.error('El archivo debe ser de formato ' + this.accept);
      return;
    }

    files[0].name.split('.')[1];
    this.isError = false;

    if (this.data.crop && files.length > 1) {
      this.isError = true;
      return;
    }

    if (
      this.data.crop &&
      files.length === 1 &&
      files.item(0)?.type.split('/')[0] === 'image'
    ) {
      this.imageFile = files.item(0) as File;
      return;
    }

    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i) as File);
    }

    this.dialogRef.close(files);
  }

  onUploadComplete(url: string): void {
    this.filesURLs.push(url);
  }

  onComplete(): void {
    console.log(this.data);
    const res = this.data.multiple ? this.filesURLs : this.filesURLs[0];
    this.dialogRef.close(res);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onCrop(file: File): void {
    this.imageFile = null;
    this.files.push(file);
  }
}
