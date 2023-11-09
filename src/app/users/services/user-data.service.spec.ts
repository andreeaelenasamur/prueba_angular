import { TestBed } from '@angular/core/testing';

import { UserDataService } from './user-data.service';
import { HttpClient } from '@angular/common/http';

describe('UserDataService', () => {
  let service: UserDataService;
  let httpClientMock: jasmine.SpyObj<Partial<HttpClient>> = {
    post: jasmine.createSpy('httpClientMock.post')
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientMock
        }
      ]
    });
    service = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
