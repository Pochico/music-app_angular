import { TestBed } from '@angular/core/testing';

import { SongSearchServiceService } from './song-search-service.service';

describe('SongSearchServiceService', () => {
  let service: SongSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
