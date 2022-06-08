import { TextFieldModule } from '@angular/cdk/text-field';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { faker } from '@faker-js/faker';
import { AppInput } from '@src/shared/models';
import { TextAreaComponent } from './text-area.component';
const componentTest = TextAreaComponent;
describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;
  let properties: AppInput;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [componentTest],
      imports: [TextFieldModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(componentTest);
    component = fixture.componentInstance;
    component.registerOnChange(() => {});
    component.registerOnTouched(() => {});
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);

    fixture.detectChanges();
    properties = new AppInput({
      type: 'text',
      label: faker.name.jobTitle(),
      placeholder: faker.name.jobTitle(),
      min: faker.datatype.number(),
      max: faker.datatype.number(),
      disabled: faker.datatype.boolean(),
      minlength: faker.datatype.number(),
      maxlength: faker.datatype.number(),
      value: faker.datatype.string(),
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
      .querySelector('.app-texrarea')
      ?.querySelector('textarea');
    expect(element?.value).toEqual(properties.value);
    expect(element?.placeholder).toEqual(properties.placeholder);
  });

  it('keyup', () => {
    const element = fixture.nativeElement
      .querySelector('.app-texrarea')
      ?.querySelector('textarea');
    const event = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: false,
    });
    element.value = faker.datatype.string();
    element.dispatchEvent(event);
    expect(element?.value).toEqual(properties.value);
  });
  it('blur', () => {
    const element = fixture.nativeElement
      .querySelector('.app-texrarea')
      ?.querySelector('textarea');
    element.dispatchEvent(new Event('blur'));
    expect(element?.value).toEqual(properties.value);
  });
});
