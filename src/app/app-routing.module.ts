import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task4Component } from './task4/task4.component';
import { Logintask1Component } from './logintask1/logintask1.component';
import { Dashboardtask1Component } from './dashboardtask1/dashboardtask1.component';
import { Task2rootComponent } from './task2root/task2root.component';
import { Task3Component } from './task3/task3.component';
import { signinGuard } from './signin.guard';

const routes: Routes = [  
  {path:"task1", component:Logintask1Component},
  {path:"dashboard/:id", component:Dashboardtask1Component,canActivate: [signinGuard]},
  {path:"task2", component:Task2rootComponent,canActivate: [signinGuard]},  
  {path:"task3", component:Task3Component, canActivate: [signinGuard]},
  {path:"task4", component:Task4Component, canActivate: [signinGuard]},
  {path:"**", redirectTo:"task1", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
