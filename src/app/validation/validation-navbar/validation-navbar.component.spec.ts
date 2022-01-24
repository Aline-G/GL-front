import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationNavbarComponent } from './validation-navbar.component';

describe('ValidationNavbarComponent', () => {
  let component: ValidationNavbarComponent;
  let fixture: ComponentFixture<ValidationNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
