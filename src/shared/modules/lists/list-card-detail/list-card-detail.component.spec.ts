import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardDetailComponent } from './list-card-detail.component';

describe('ListCardDetailComponent', () => {
  let component: ListCardDetailComponent;
  let fixture: ComponentFixture<ListCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
