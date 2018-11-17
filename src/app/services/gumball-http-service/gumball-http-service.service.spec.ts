import { TestBed } from '@angular/core/testing';

import { GumballHttpServiceService } from './gumball-http-service.service';

describe('GumballHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GumballHttpServiceService = TestBed.get(GumballHttpServiceService);
    expect(service).toBeTruthy();
  });
});
