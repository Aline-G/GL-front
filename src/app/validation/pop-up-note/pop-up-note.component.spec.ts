import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNoteComponent } from './pop-up-note.component';

describe('PopUpNoteComponent', () => {
  let component: PopUpNoteComponent;
  let fixture: ComponentFixture<PopUpNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
