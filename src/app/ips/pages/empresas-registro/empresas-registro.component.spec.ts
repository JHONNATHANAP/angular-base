import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasRegistroComponent } from './empresas-registro.component';

describe('EmpresasRegistroComponent', () => {
  let component: EmpresasRegistroComponent;
  let fixture: ComponentFixture<EmpresasRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
