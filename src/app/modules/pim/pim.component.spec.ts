/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PimComponent } from './pim.component';

describe('PimComponent', () => {
  let component: PimComponent;
  let fixture: ComponentFixture<PimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
