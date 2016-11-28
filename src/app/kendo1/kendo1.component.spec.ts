/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Kendo1Component } from './kendo1.component';

describe('Kendo1Component', () => {
  let component: Kendo1Component;
  let fixture: ComponentFixture<Kendo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kendo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kendo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
