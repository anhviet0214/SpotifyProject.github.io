/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetAlbumDetailService } from './getAlbumDetail.service';

describe('Service: GetAlbumDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAlbumDetailService]
    });
  });

  it('should ...', inject([GetAlbumDetailService], (service: GetAlbumDetailService) => {
    expect(service).toBeTruthy();
  }));
});
