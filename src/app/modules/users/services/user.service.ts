import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CONSTANTS } from '../../../core/constants/constants';
import { IUser, IUsersListResponse } from '../../../core/models/user.model';
import { HttpService } from '../../../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly httpService: HttpService
  ) { }
  
  /**
   * @description CALL ADD USER API
   * @param formValue 
   * @returns 
   */
  addUser(formValue:IUser) {
    return this.httpService.httpRequest(
      CONSTANTS.METHOD_TYPES.POST,
      CONSTANTS.BACKEND_URL.ADD_USER,
      formValue
    );
  }
  
  /**
   * @description get user list
   * @returns 
   */
  getUserList(): Observable<IUsersListResponse> {
    return this.httpService.httpRequest(
      CONSTANTS.METHOD_TYPES.GET,
      CONSTANTS.BACKEND_URL.USERS
    );
  }
}
