import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectPlantillaComponent } from './modal-select-plantilla.component';

describe('ModalSelectPlantillaComponent', () => {
  let component: ModalSelectPlantillaComponent;
  let fixture: ComponentFixture<ModalSelectPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSelectPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelectPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
