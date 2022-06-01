import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppFile } from '@src/shared/models/file-model';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileComponent),
      multi: true,
    },
  ],
})
export class FileComponent implements OnInit, ControlValueAccessor {
  @Output() changeEvent = new EventEmitter<string>();
  @Input() properties: AppFile;

  modalName!: string;
  isDisabled: boolean = false;


  constructor() {
    this.properties = new AppFile();
  }

  ngOnInit(): void {
    this.modalName = this.properties.label ? this.properties.label : '';
  }

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: string): void {
    this.properties.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onBlur(): void {
    this.propagateTouched();
  }
  onFilesChanged(event: any) {
    this.properties.value = event;
    this.properties.valueText = this.properties.value ? this.properties.value[0].name : '';
    this.propagateChange(this.properties.value);
    this.changeEvent.emit(this.properties.value);
  }
}
