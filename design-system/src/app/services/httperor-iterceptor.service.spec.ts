import { TestBed } from '@angular/core/testing';

import { HttperorIterceptorService } from './httperor-iterceptor.service';

describe('HttperorIterceptorService', () => {
  let service: HttperorIterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttperorIterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
