import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    test: new FormControl(''),
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}
