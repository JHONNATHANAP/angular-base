import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutoCompleteModule } from './autocomplete/autocomplete.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { ChipsModule } from './chips/chips.module';
import { DateModule } from './date/date.module';
import { FileModule } from './file/file.module';
import { InputModule } from './input/input.module';
import { NumberModule } from './number/number.module';
import { PasswordModule } from './password/password.module';
import { SelectModule } from './select/select.module';
import { TextAreaModule } from './text-area/text-area.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    TextAreaModule,
    SelectModule,
    DateModule,
    NumberModule,
    FileModule,
    PasswordModule,
    CheckboxModule,
    ChipsModule,
    AutoCompleteModule,
  ],
  exports: [
    InputModule,
    TextAreaModule,
    SelectModule,
    DateModule,
    NumberModule,
    FileModule,
    PasswordModule,
    CheckboxModule,
    ChipsModule,
    AutoCompleteModule,
  ],
})
export class ControlsModule {}
