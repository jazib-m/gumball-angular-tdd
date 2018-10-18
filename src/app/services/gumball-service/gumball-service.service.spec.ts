import { TestBed } from '@angular/core/testing';

import { GumballServiceService } from './gumball-service.service';

describe('GumballServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GumballServiceService = TestBed.get(GumballServiceService);
    expect(service).toBeTruthy();
  });
});
