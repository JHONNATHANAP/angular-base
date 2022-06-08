import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppSelect } from 'src/shared/models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Output() changeEvent = new EventEmitter<string>();
  @Input() properties: AppSelect;

  constructor() {
    this.properties = new AppSelect();
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

  onChange(event: Event): void {
    const { target } = event;

    this.properties.value = this.properties?.options
      ? this.properties?.options[(target as HTMLInputElement).value]?.value
      : '';
    this.writeValue(this.properties.value);
    this.propagateChange();
    this.propagateTouched();
    this.changeEvent.emit(this.properties.value);
  }
  onChangeMaterial(event: any): void {
    this.properties.value = this.properties?.options
      ? this.properties?.options[event.value]?.value
      : '';
    this.writeValue(this.properties.value);
    this.propagateChange();
    this.propagateTouched();
    this.changeEvent.emit(this.properties.value);
  }

  onBlur(): void {
    this.propagateTouched();
  }
  getValue(value: any) {
    return JSON.stringify(value);
  }
}
