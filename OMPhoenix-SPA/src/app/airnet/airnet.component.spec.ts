/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirnetComponent } from './airnet.component';

describe('AirnetComponent', () => {
  let component: AirnetComponent;
  let fixture: ComponentFixture<AirnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
