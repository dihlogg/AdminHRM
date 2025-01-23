import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOffPopupComponent } from './time-off-popup.component';

describe('TimeOffPopupComponent', () => {
  let component: TimeOffPopupComponent;
  let fixture: ComponentFixture<TimeOffPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeOffPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeOffPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
