import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2comp2Component } from './task2comp2.component';

describe('Task2comp2Component', () => {
  let component: Task2comp2Component;
  let fixture: ComponentFixture<Task2comp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task2comp2Component]
    });
    fixture = TestBed.createComponent(Task2comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
