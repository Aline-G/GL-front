import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewExpenseBillsComponent } from './home-view-expense-bills.component';

describe('HomeViewExpenseBillsComponent', () => {
  let component: HomeViewExpenseBillsComponent;
  let fixture: ComponentFixture<HomeViewExpenseBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeViewExpenseBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewExpenseBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
