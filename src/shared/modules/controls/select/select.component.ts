import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectProperties } from 'src/shared/models';

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
export class SelectComponent implements  ControlValueAccessor {
  @Output() changeEvent = new EventEmitter<string>();
  @Input() properties: SelectProperties;

  constructor() {
    this.properties = {
      value: '',
      disabled: false,
      placeholder: '',
      class: '',
      items: [],
    };
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

    this.properties.value = JSON.parse((target as HTMLInputElement).value);
    this.propagateChange(this.properties.value);
    this.changeEvent.emit(this.properties.value);
  }

  onBlur(): void {
    this.propagateTouched();
  }
  getValue(value:any){
    return JSON.stringify(value)
  }
}
