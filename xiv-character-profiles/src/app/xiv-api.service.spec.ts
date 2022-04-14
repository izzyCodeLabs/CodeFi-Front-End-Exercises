import { TestBed } from '@angular/core/testing';

import { XivApiService } from './xiv-api.service';

describe('XivApiService', () => {
  let service: XivApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XivApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
