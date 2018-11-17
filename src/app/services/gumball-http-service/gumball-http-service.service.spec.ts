import { TestBed } from '@angular/core/testing';

import { GumballHttpServiceService } from './gumball-http-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('GumballHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: GumballHttpServiceService = TestBed.get(GumballHttpServiceService);
    expect(service).toBeTruthy();
  });
});
