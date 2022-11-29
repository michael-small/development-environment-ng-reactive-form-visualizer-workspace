import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-visualizer-v1',
  templateUrl: './form-visualizer-v1.component.html',
  styleUrls: ['./form-visualizer-v1.component.scss'],
})
export class FormVisualizerV1Component implements OnInit {
  @Input()
  formElement: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}
}
