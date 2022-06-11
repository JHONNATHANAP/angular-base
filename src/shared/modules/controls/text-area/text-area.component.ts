import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppTextArea } from 'src/shared';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent implements ControlValueAccessor {
  @Output() changeEvent = new EventEmitter<string>();
  @Input() properties: AppTextArea;

  constructor() {
    this.properties = new AppTextArea();
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
    this.propagateChange(this.properties.value);
    this.propagateTouched();
    this.changeEvent.emit(this.properties.value);
  }

  onBlur(): void {
    this.propagateTouched();
  }
}
