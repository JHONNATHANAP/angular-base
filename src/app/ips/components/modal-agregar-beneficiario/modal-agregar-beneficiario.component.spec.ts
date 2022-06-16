import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarBeneficiarioComponent } from './modal-agregar-beneficiario.component';

describe('ModalAgregarEmpresaComponent', () => {
  let component: ModalAgregarBeneficiarioComponent;
  let fixture: ComponentFixture<ModalAgregarBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAgregarBeneficiarioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
