import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task2Service {

  private messageSource = new Subject<{ message: string, origin: string }>();
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string, origin: string) {
    this.messageSource.next({ message, origin });
  }
}
