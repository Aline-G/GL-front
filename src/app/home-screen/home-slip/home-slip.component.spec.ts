import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlipComponent } from './home-slip.component';

describe('HomeSlipComponent', () => {
  let component: HomeSlipComponent;
  let fixture: ComponentFixture<HomeSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
