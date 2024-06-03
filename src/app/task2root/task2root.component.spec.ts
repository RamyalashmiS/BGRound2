import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2rootComponent } from './task2root.component';

describe('Task2rootComponent', () => {
  let component: Task2rootComponent;
  let fixture: ComponentFixture<Task2rootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task2rootComponent]
    });
    fixture = TestBed.createComponent(Task2rootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
