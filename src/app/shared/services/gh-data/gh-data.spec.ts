import { TestBed } from '@angular/core/testing';

import { GhData } from './gh-data';

describe('GhData', () => {
  let service: GhData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
