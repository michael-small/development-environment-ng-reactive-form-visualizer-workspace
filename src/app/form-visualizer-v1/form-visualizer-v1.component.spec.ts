import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVisualizerV1Component } from './form-visualizer-v1.component';

describe('FormVisualizerV1Component', () => {
  let component: FormVisualizerV1Component;
  let fixture: ComponentFixture<FormVisualizerV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVisualizerV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVisualizerV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
