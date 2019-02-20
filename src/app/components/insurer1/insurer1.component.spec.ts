import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurer1Component } from './insurer1.component';

describe('Insurer1Component', () => {
  let component: Insurer1Component;
  let fixture: ComponentFixture<Insurer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Insurer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Insurer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
