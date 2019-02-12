import { TestBed, inject } from '@angular/core/testing';

import { AlbumesService } from './albumes.service';

describe('AlbumesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumesService]
    });
  });

  it('should be created', inject([AlbumesService], (service: AlbumesService) => {
    expect(service).toBeTruthy();
  }));
});
