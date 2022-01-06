import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdvanceComponent } from './home-advance.component';

describe('HomeAdvanceComponent', () => {
  let component: HomeAdvanceComponent;
  let fixture: ComponentFixture<HomeAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
