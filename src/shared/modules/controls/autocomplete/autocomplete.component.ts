import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { AppAutocomplete } from 'src/shared';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true,
    },
  ],
})
export class AutocompleteComponent implements ControlValueAccessor {
  @ViewChild(MatAutocompleteTrigger) autoTrigger!: MatAutocompleteTrigger;
  @Output() changeEvent = new EventEmitter<string>();
  @Input() properties: AppAutocomplete;
  readonly separatorKeysCodes = [] as const;
  optionsSelected: { label: string; value: any }[] = [];
  constructor() {
    this.properties = new AppAutocomplete();
    this.properties.value = this.optionsSelected.map((data) => {
      return data.value;
    });
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
    this.properties.items?.keyUp((target as HTMLInputElement).value);
  }

  onBlur(): void {
    this.propagateTouched();
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.properties.value.push(value);
    }
    this.writeValue(this.properties.value);
    this.propagateChange(this.properties.value);
    this.propagateTouched();
    //event.chipInput!.clear();
  }

  remove(value: any): void {
    const index = this.optionsSelected.indexOf(value);
    if (index >= 0) {
      this.optionsSelected.splice(index, 1);
    }
    this.setValue();
  }
  openAutoComplete() {
    const self = this;
    setTimeout(function () {
      self.autoTrigger.openPanel();
    }, 1);
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.properties.multiple) {
      this.openAutoComplete();
      if (!this.properties.multiple) {
        this.optionsSelected = [];
      }
    }
    if (this.validatecheck({ value: event.option.value })) {
      const index = this.optionsSelected
        .map((data) => {
          return data.value;
        })
        .indexOf(event.option.value);
      this.optionsSelected.splice(index, 1);
    } else {
      this.optionsSelected.push({
        label: event.option.viewValue,
        value: event.option.value,
      });
    }

    this.setValue();
  }

  filtrarValor(item) {
    return this.optionsSelected.filter((e) => {
      switch (typeof item.value) {
        case 'object':
          return JSON.stringify(e.value) === JSON.stringify(item.value);
        default:
          return e === item.value;
      }
    });
  }
  validatecheck(item): boolean {
    if (this.optionsSelected.length === 0) return false;
    const i = this.filtrarValor(item);
    return i.length > 0 ? true : false;
  }
  setValue() {
    if (!this.properties.multiple) {
      this.properties.value = this.optionsSelected.map((data) => {
        return data.value;
      })[0];
      return;
    }
    this.properties.value = this.optionsSelected.map((data) => {
      return data.value;
    });
    this.writeValue(this.properties.value);
    this.propagateChange(this.properties.value);
    this.propagateTouched();
  }
}
