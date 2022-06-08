import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faker } from '@faker-js/faker';
import { AppInput, AppSelect, IAppSelectOption } from '@src/shared/models';
import { SelectComponent } from './select.component';
const componentTest = SelectComponent;
describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let properties: AppSelect;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [componentTest],
      imports: [
        MatSelectModule,
        MatAutocompleteModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(componentTest);
    component = fixture.componentInstance;
    component.registerOnChange(() => {});
    component.registerOnTouched(() => {});
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
    const value = faker.datatype.number();
    let fakeList: IAppSelectOption[] = Array.from(Array(10).keys()).map(
      (e, index) => {
        return {
          label: faker.datatype.string(),
          value: faker.datatype.number(),
        };
      }
    );
    fakeList.push({ label: faker.datatype.string(), value });
    fixture.detectChanges();
    properties = new AppSelect({
      type: 'text',
      label: faker.name.jobTitle(),
      placeholder: faker.name.jobTitle(),
      disabled: faker.datatype.boolean(),
      value: value,
      framework: 'material',
      options: fakeList,
    });
    component.properties = properties;
    fixture.detectChanges();
  });

  it('Create component', () => {
    const fixture = TestBed.createComponent(componentTest);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('New', () => {
    const element = fixture.nativeElement
      .querySelector('.app-select')
      ?.querySelector('mat-select');
    expect(element.attributes['ng-reflect-value'].value).toEqual(
      String(properties.selectValue())
    );
  });

  it('change', () => {
    const element = fixture.nativeElement
      .querySelector('.app-select')
      ?.querySelector('mat-select');
    const event = new Event('selectionChange');
    fixture.detectChanges();
    const value = faker.datatype.number();
    properties.options?.push({ label: faker.datatype.string(), value });
    element.value = value;
    element.dispatchEvent(event);
    fixture.detectChanges();
    expect(element.attributes['ng-reflect-value'].value).toEqual(
      String(properties.selectValue())
    );
    properties.framework = 'bootstrap';
    fixture.detectChanges();
    const elementb = fixture.nativeElement
      .querySelector('.app-select')
      ?.querySelector('select');
    elementb.dispatchEvent(new Event('change'));
    expect(elementb.value).toEqual(String(properties.selectValue()));
  });
  it('blur', () => {
    const element = fixture.nativeElement
      .querySelector('.app-select')
      ?.querySelector('mat-select');
    element.dispatchEvent(new Event('blur'));
    expect(element.attributes['ng-reflect-value'].value).toEqual(
      String(properties.selectValue())
    );
  });
});
