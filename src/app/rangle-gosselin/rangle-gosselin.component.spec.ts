/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RangleGosselinComponent } from './rangle-gosselin.component';

describe('RangleGosselinComponent', () => {
  let component: RangleGosselinComponent;
  let fixture: ComponentFixture<RangleGosselinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangleGosselinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangleGosselinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
