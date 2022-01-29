import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionManagementComponent } from './mission-management.component';

describe('MissionManagementComponent', () => {
  let component: MissionManagementComponent;
  let fixture: ComponentFixture<MissionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
