import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRetenienteComponent } from './modal-reteniente.component';

describe('ModalRetenienteComponent', () => {
  let component: ModalRetenienteComponent;
  let fixture: ComponentFixture<ModalRetenienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRetenienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRetenienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
