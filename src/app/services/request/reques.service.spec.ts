import { TestBed } from '@angular/core/testing';

import { RequesService } from './reques.service';

describe('RequesService', () => {
  let service: RequesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
