import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpViewComponent } from './pop-up-view.component';

describe('PopUpViewComponent', () => {
  let component: PopUpViewComponent;
  let fixture: ComponentFixture<PopUpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
