import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppInput } from 'src/shared';

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
  @Input() properties: AppInput;

  modalName!: string;
  value!: any;
  isDisabled: boolean = false;
  valueText: string = '';

  constructor() {
    this.properties = new AppInput();
  }

  ngOnInit(): void {
    this.modalName = this.properties.label ? this.properties.label : '';
  }

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
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
    this.value = event;
    this.valueText = this.value ? this.value[0].name : '';
    this.propagateChange(this.value);
    this.changeEvent.emit(this.value);
  }
}
