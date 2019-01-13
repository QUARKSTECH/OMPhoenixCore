/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndoComponent } from './indo.component';

describe('IndoComponent', () => {
  let component: IndoComponent;
  let fixture: ComponentFixture<IndoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
