import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadoresRegistroComponent } from './trabajadores-registro.component';

describe('BeneficiariosCargueComponent', () => {
  let component: TrabajadoresRegistroComponent;
  let fixture: ComponentFixture<TrabajadoresRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrabajadoresRegistroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadoresRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
