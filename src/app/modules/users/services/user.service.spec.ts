import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/services/http.service';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpServicestub: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: HttpService, useValue: httpServicestub
      }]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
