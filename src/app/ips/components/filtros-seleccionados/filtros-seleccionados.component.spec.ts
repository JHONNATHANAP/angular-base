import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosSeleccionadosComponent } from './filtros-seleccionados.component';

describe('FiltrosSeleccionadosComponent', () => {
  let component: FiltrosSeleccionadosComponent;
  let fixture: ComponentFixture<FiltrosSeleccionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosSeleccionadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosSeleccionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
