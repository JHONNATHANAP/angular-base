import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausantesComponent } from './causantes.component';

describe('CausantesComponent', () => {
  let component: CausantesComponent;
  let fixture: ComponentFixture<CausantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CausantesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CausantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
