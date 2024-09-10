import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveNavbarComponent } from './leave-navbar.component';

describe('LeaveNavbarComponent', () => {
  let component: LeaveNavbarComponent;
  let fixture: ComponentFixture<LeaveNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
