/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarkAirComponent } from './markAir.component';

describe('MarkAirComponent', () => {
  let component: MarkAirComponent;
  let fixture: ComponentFixture<MarkAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
