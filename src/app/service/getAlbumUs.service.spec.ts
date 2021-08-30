/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetAlbumUsService } from './getAlbumUs.service';

describe('Service: GetAlbumUs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAlbumUsService]
    });
  });

  it('should ...', inject([GetAlbumUsService], (service: GetAlbumUsService) => {
    expect(service).toBeTruthy();
  }));
});
