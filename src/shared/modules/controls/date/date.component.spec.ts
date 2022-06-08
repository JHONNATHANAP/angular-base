import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { faker } from '@faker-js/faker';
import { sharedConts } from '@src/shared';
import { AppDate, AppInput } from '@src/shared/models';
import moment from 'moment';
import { DateComponent } from './date.component';
const componentTest = DateComponent;
describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;
  let properties: AppDate;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [componentTest],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(componentTest);
    component = fixture.componentInstance;
    component.registerOnChange(() => {});
    component.registerOnTouched(() => {});
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);

    fixture.detectChanges();
    properties = new AppDate({
      type: 'date',
      label: faker.name.jobTitle(),
      placeholder: faker.name.jobTitle(),
      disabled: faker.datatype.boolean(),
      value: moment(faker.datatype.datetime()).format(
        sharedConts.forms.controls.date.outputFormat
      ),
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
      .querySelector('.app-date')
      ?.querySelector('input');
    expect(
      moment(element?.value).format(
        sharedConts.forms.controls.date.outputFormat
      )
    ).toEqual(properties.value);
    expect(element?.placeholder).toEqual(properties.placeholder);
    expect(element?.disabled).toEqual(properties.disabled);
  });

  it('change', () => {
    const element = fixture.nativeElement
      .querySelector('.app-date')
      ?.querySelector('input');

    element.value = new Date(moment(faker.datatype.datetime()).toDate());
    element.dispatchEvent(new Event('dateChange'));
    fixture.detectChanges();
    expect(
      moment(element.value).format(sharedConts.forms.controls.date.outputFormat)
    ).toEqual(properties.value);
    properties.framework = 'bootstrap';
    fixture.detectChanges();
    const elementb = fixture.nativeElement
      .querySelector('.app-date')
      ?.querySelector('input');

    elementb.value = moment(faker.datatype.datetime()).format(
      sharedConts.forms.controls.date.outputFormat
    );
    elementb.dispatchEvent(new Event('change'));
    component.onClosed();
    expect(elementb.value).toEqual(properties.value);
  });
  it('blur', () => {
    const element = fixture.nativeElement
      .querySelector('.app-date')
      ?.querySelector('input');
    element.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(
      moment(element.value).format(sharedConts.forms.controls.date.outputFormat)
    ).toEqual(properties.value);
  });
});
