/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Primeng1Component } from './primeng1.component';

describe('Primeng1Component', () => {
  let component: Primeng1Component;
  let fixture: ComponentFixture<Primeng1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Primeng1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Primeng1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
