import { Component } from '@angular/core';
import { Task2Service } from '../task2root/task2.service';

@Component({
  selector: 'comp1',
  templateUrl: './task2comp1.component.html',
  styleUrls: ['./task2comp1.component.css']
})
export class Task2comp1Component {

  message!: string;

  constructor(private messageServ: Task2Service) {
    this.messageServ.currentMessage.subscribe(({ message, origin }) => {
      if (origin !== 'Component1') {
        this.message = message;
      }
    });
  }

  btn2Clicked() {
    this.messageServ.changeMessage('', 'Component2');
    this.messageServ.changeMessage('Button 1 clicked in Component1', 'Component1');
  }

}
