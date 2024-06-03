import { Component } from '@angular/core';
import { Task2Service } from '../task2root/task2.service';

@Component({
  selector: 'comp2',
  templateUrl: './task2comp2.component.html',
  styleUrls: ['./task2comp2.component.css']
})
export class Task2comp2Component {
  message!: string;

  constructor(private messageServ: Task2Service) {
    this.messageServ.currentMessage.subscribe(({ message, origin }) => {
      if (origin !== 'Component2') {
        this.message = message;
      }
    });
  }

  btn1Clicked() {
    this.messageServ.changeMessage('', 'Component1');
    this.messageServ.changeMessage('Button 2 clicked in Component2', 'Component2');
  }
}
