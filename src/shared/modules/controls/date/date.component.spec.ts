import { TestBed } from '@angular/core/testing';
import { DateComponent } from './date.component';

describe('DateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateComponent],
    }).compileComponents();
  });

  it('should create DateComponent', () => {
    const fixture = TestBed.createComponent(DateComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
