import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveLeaveComponent } from './receive-leave.component';

describe('ReceiveLeaveComponent', () => {
  let component: ReceiveLeaveComponent;
  let fixture: ComponentFixture<ReceiveLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveLeaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiveLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
