import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHostComponentComponent } from './example-host-component.component';

describe('ExampleHostComponentComponent', () => {
  let component: ExampleHostComponentComponent;
  let fixture: ComponentFixture<ExampleHostComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleHostComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleHostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
