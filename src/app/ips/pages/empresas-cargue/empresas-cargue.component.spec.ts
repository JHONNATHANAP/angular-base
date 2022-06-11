import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasCargueComponent } from './empresas-cargue.component';

describe('EmpresasCargueComponent', () => {
  let component: EmpresasCargueComponent;
  let fixture: ComponentFixture<EmpresasCargueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasCargueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasCargueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
