import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2comp1Component } from './task2comp1.component';

describe('Task2comp1Component', () => {
  let component: Task2comp1Component;
  let fixture: ComponentFixture<Task2comp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task2comp1Component]
    });
    fixture = TestBed.createComponent(Task2comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
