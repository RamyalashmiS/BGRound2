import { Component } from '@angular/core';

@Component({
  selector: 'task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  color=""

  colorChange(color:string){    
    this.color=color
    console.log(this.color)
  }  
}
