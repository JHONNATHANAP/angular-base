import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausantesRegistroComponent } from './causantes-registro.component';

describe('CausantesRegistroComponent', () => {
  let component: CausantesRegistroComponent;
  let fixture: ComponentFixture<CausantesRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CausantesRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CausantesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
