import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task4Component } from './task4/task4.component';
import { Logintask1Component } from './logintask1/logintask1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Dashboardtask1Component } from './dashboardtask1/dashboardtask1.component';
import { Task2comp1Component } from './task2comp1/task2comp1.component';
import { Task2comp2Component } from './task2comp2/task2comp2.component';
import { Task2rootComponent } from './task2root/task2root.component';
import { Task3Component } from './task3/task3.component'

@NgModule({
  declarations: [
    AppComponent,
    Task4Component,
    Logintask1Component,
    Dashboardtask1Component,
    Task2comp1Component,
    Task2comp2Component,
    Task2rootComponent,
    Task3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
