import { TestBed } from '@angular/core/testing';

import { RestApiCownsService } from './rest-api-cowns.service';

describe('RestApiCownsService', () => {
  let service: RestApiCownsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiCownsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
