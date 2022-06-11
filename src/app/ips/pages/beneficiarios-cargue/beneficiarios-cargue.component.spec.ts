import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariosCargueComponent } from './beneficiarios-cargue.component';

describe('BeneficiariosCargueComponent', () => {
  let component: BeneficiariosCargueComponent;
  let fixture: ComponentFixture<BeneficiariosCargueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiariosCargueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariosCargueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
