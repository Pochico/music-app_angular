import { TestBed } from '@angular/core/testing';

import { PopularSongsService } from './popular-songs.service';

describe('PopularSongsService', () => {
  let service: PopularSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
