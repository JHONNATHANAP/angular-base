import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarPlantillaComponent } from './modal-agregar-plantilla.component';

describe('ModalAgregarPlantillaComponent', () => {
  let component: ModalAgregarPlantillaComponent;
  let fixture: ComponentFixture<ModalAgregarPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
