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
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Output() changeEvent = new EventEmitter<string>();
  @Input() properties: AppInput;

  constructor() {
    this.properties = new AppInput();
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

  onKeyup(event: Event): void {
    const { target } = event;
    this.properties.value = (target as HTMLInputElement).value;
    this.writeValue(this.properties.value);
    this.propagateChange();
    this.propagateTouched();
    this.changeEvent.emit(this.properties.value);
  }

  onBlur(): void {
    this.propagateTouched();
  }
}
