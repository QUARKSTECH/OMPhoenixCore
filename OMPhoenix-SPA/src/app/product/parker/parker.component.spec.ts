/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParkerComponent } from './parker.component';

describe('ParkerComponent', () => {
  let component: ParkerComponent;
  let fixture: ComponentFixture<ParkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
