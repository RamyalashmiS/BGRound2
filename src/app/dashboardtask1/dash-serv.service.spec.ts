import { TestBed } from '@angular/core/testing';

import { DashServService } from './dash-serv.service';

describe('DashServService', () => {
  let service: DashServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
