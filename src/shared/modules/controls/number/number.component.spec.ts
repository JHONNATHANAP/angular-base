import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { faker } from '@faker-js/faker';
import { AppInput } from '@src/shared/models';
import { NumberComponent } from './number.component';
const componentTest = NumberComponent;
describe('NumberComponent', () => {
  let component: NumberComponent;
  let fixture: ComponentFixture<NumberComponent>;
  let properties: AppInput;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [componentTest],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(componentTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.registerOnChange(() => {});
    component.registerOnTouched(() => {});
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
    properties = new AppInput({
      type: 'text',
      label: faker.name.jobTitle(),
      placeholder: faker.name.jobTitle(),
      min: faker.datatype.number(),
      max: faker.datatype.number(),
      disabled:faker.datatype.boolean(),
      minlength: faker.datatype.number(),
      maxlength: faker.datatype.number(),
      value: faker.datatype.number(),
    });
    component.properties = properties;
    fixture.detectChanges();
  });

  it('should create NumberComponent', () => {
    const fixture = TestBed.createComponent(componentTest);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('New Number', () => {
    const element = fixture.nativeElement
      .querySelector('.app-input')
      ?.querySelector('input');
    expect(element?.value).toEqual(String(properties.value));
    expect(element?.placeholder).toEqual(properties.placeholder);
    expect(element?.min).toEqual(String(properties.min));
    expect(element?.max).toEqual(String(properties.max));
    expect(element?.minLength).toEqual(properties.minlength);   
    expect(element?.maxLength).toEqual(properties.maxlength);
    expect(element?.disabled).toEqual(properties.disabled);
  });

  it('keyup Number', () => {
    const element = fixture.nativeElement
      .querySelector('.app-input')
      ?.querySelector('input');
    const event = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: false,
    });
    element.value = faker.datatype.string();
    element.dispatchEvent(event);
    expect(element?.value).toEqual(properties.value);
  });
  it('blur Input', () => {
    const element = fixture.nativeElement
      .querySelector('.app-input')
      ?.querySelector('input'); 
    element.dispatchEvent(new Event('blur'));
    expect(element?.value).toEqual(String(properties.value));
  });
});
