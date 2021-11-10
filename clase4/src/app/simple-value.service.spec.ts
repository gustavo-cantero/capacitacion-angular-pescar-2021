import { TestBed } from '@angular/core/testing';

import { SimpleValueService } from './simple-value.service';

describe('SimpleValueService', () => {
  let service: SimpleValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
