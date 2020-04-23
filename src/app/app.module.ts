import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';
import { DragComponent } from './drag/drag.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    DragDropModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
