/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestTokenService } from './requestToken.service';

describe('Service: RequestToken', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestTokenService]
    });
  });

  it('should ...', inject([RequestTokenService], (service: RequestTokenService) => {
    expect(service).toBeTruthy();
  }));
});
