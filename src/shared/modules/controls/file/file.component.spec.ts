import { TestBed } from '@angular/core/testing';
import { FileComponent } from './file.component';

describe('FileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileComponent],
    }).compileComponents();
  });

  it('should create InputComponent', () => {
    const fixture = TestBed.createComponent(FileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
