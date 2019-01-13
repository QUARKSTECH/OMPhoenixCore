/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParkersComponent } from './parkers.component';

describe('ParkersComponent', () => {
  let component: ParkersComponent;
  let fixture: ComponentFixture<ParkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
