/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndoForkComponent } from './indoFork.component';

describe('IndoForkComponent', () => {
  let component: IndoForkComponent;
  let fixture: ComponentFixture<IndoForkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoForkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
