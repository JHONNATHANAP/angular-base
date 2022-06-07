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
export class InputComponent  {
  @Output() changeEvent = new EventEmitter<string>();
  @Input() properties: AppInput;

  constructor() {
    this.properties = new AppInput();
  }

  private propagateTouched: any = () => {};

  onKeyup(event: Event): void {
    const { target } = event;
    this.properties.value = (target as HTMLInputElement).value;
 
    this.changeEvent.emit(this.properties.value);
  }

  onBlur(): void {
    this.propagateTouched();
  }
}
