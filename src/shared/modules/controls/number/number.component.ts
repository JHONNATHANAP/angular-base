import {
  Component, EventEmitter, forwardRef,
  Input, OnInit, Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppInput } from 'src/shared';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberComponent),
      multi: true,
    },
  ],
})
export class NumberComponent implements ControlValueAccessor {
  @Output() changeEvent = new EventEmitter<string>();
  @Input() properties: AppInput;


  constructor() {
    this.properties = new AppInput({type:'number'});
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

  onKeyup(event: Event): void {
    const { target } = event;
    this.properties.value = (target as HTMLInputElement).value;
    this.propagateChange(this.properties.value);
    this.changeEvent.emit(this.properties.value);
  }

  onBlur(): void {
    this.propagateTouched();
  }
}
