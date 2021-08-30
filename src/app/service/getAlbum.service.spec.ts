/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetAlbumService } from './getAlbum.service';

describe('Service: GetAlbum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAlbumService]
    });
  });

  it('should ...', inject([GetAlbumService], (service: GetAlbumService) => {
    expect(service).toBeTruthy();
  }));
});
