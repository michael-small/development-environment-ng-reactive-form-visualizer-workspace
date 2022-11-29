import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormVisualizerV1Component } from './form-visualizer-v1/form-visualizer-v1.component';
import { ExampleHostComponentComponent } from './example-host-component/example-host-component.component';

// TODO: Once on NPM, change from using relative import of build library to library package import path
// Library
// import { NgReactiveFormVisualizerModule } from '../../../ng-reactive-form-visualizer-workspace/dist/ng-reactive-form-visualizer';

@NgModule({
  declarations: [
    AppComponent,
    FormVisualizerV1Component,
    ExampleHostComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormVisualizerV1Component, ExampleHostComponentComponent],
})
export class AppModule {}
