import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLogsComponent } from './modal-logs.component';

describe('ModalLogsComponent', () => {
  let component: ModalLogsComponent;
  let fixture: ComponentFixture<ModalLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
