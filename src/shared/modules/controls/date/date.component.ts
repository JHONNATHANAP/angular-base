import {
  Component, EventEmitter, forwardRef,
  Input, OnInit, Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppDate } from 'src/shared';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true,
    },
  ],
})
export class DateComponent implements  ControlValueAccessor {
  @Output() changeEvent = new EventEmitter<string>();
  @Input() properties: AppDate;


  constructor() {
    this.properties=new AppDate();
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
    this.properties.disabled = isDisabled;
  }

  onChange(event: Event): void {
    const { target } = event;
    this.properties.value = (target as HTMLInputElement).value;
    this.propagateChange(this.properties.value);
    this.changeEvent.emit(this.properties.value);
  }

  onBlur(): void {
    this.propagateTouched();
  }
}
