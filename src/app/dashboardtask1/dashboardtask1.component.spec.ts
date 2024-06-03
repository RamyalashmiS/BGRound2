import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardtask1Component } from './dashboardtask1.component';

describe('Dashboardtask1Component', () => {
  let component: Dashboardtask1Component;
  let fixture: ComponentFixture<Dashboardtask1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dashboardtask1Component]
    });
    fixture = TestBed.createComponent(Dashboardtask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
