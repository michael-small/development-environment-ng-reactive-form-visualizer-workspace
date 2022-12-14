import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-example-host-component',
  templateUrl: './example-host-component.component.html',
  styleUrls: ['./example-host-component.component.scss'],
})
export class ExampleHostComponentComponent implements OnInit {
  formGroup!: FormGroup;
  formArray!: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      id: new FormControl(1),
      name: new FormControl('', Validators.required),
    });

    this.formArray = this.fb.array([
      new FormGroup({
        id: new FormControl(1),
        name: new FormControl('', Validators.required),
      }),
      new FormGroup({
        id: new FormControl(2),
        name: new FormControl('', Validators.required),
      }),
    ]);
  }
}
