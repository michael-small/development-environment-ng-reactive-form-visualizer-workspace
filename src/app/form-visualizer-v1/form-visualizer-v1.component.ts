import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-visualizer-v1',
  templateUrl: './form-visualizer-v1.component.html',
  styleUrls: ['./form-visualizer-v1.component.scss'],
})
export class FormVisualizerV1Component implements OnInit {
  @Input()
  formElement: FormGroup | FormArray;

  formElementType: 'FormGroup' | 'FormArray';

  constructor() {}

  ngOnInit(): void {
    this.formElement instanceof FormGroup
      ? (this.formElementType = 'FormGroup')
      : (this.formElementType = 'FormArray');

    console.log(this.formElementType);
  }
}
