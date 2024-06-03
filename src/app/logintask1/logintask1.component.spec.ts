import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logintask1Component } from './logintask1.component';

describe('Logintask1Component', () => {
  let component: Logintask1Component;
  let fixture: ComponentFixture<Logintask1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Logintask1Component]
    });
    fixture = TestBed.createComponent(Logintask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
