import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpChangeStateComponent } from './pop-up-change-state.component';

describe('PopUpChangeStateComponent', () => {
  let component: PopUpChangeStateComponent;
  let fixture: ComponentFixture<PopUpChangeStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpChangeStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpChangeStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
