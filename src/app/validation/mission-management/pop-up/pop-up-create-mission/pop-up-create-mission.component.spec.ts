import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCreateMissionComponent } from './pop-up-create-mission.component';

describe('PopUpCreateMissionComponent', () => {
  let component: PopUpCreateMissionComponent;
  let fixture: ComponentFixture<PopUpCreateMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpCreateMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpCreateMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
