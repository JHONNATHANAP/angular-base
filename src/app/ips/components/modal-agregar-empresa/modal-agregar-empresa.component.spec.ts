import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarEmpresaComponent } from './modal-agregar-empresa.component';

describe('ModalAgregarEmpresaComponent', () => {
  let component: ModalAgregarEmpresaComponent;
  let fixture: ComponentFixture<ModalAgregarEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
