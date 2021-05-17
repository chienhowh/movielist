import { TestBed } from '@angular/core/testing';

import { SearchResultGuard } from './search-result.guard';

describe('SearchResultGuard', () => {
  let guard: SearchResultGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SearchResultGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
