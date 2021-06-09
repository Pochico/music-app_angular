import { TestBed } from '@angular/core/testing';

import { PopularSongService } from './popular-songs.service';

describe('PopularSongsService', () => {
  let service: PopularSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
