import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CONSTANTS } from '../constants/constants';
import { IUser } from '../models/user.model';

const httpOptions = { // SET THE DEFAULT HEADER
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const baseUrl: string = environment.baseURL;


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  name = 'httpservice';

  constructor(
    private readonly http: HttpClient, // CREATE HTTP CLIENT SERVICE OBJECT
  ) { }

  /**
   * @description For handle http request.
   * @param type request type
   * @param apiName API end point
   * @param data  request body
   */

  httpRequest(
    type: string,
    apiName: string,
    data?:IUser,
  ): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', environment.token);

    this.isOnline();

    switch (type) {
      case 'GET':
        return this.http.get(`${baseUrl}${CONSTANTS.VERSION}/${apiName}`, httpOptions);
        break;
      case 'POST':
        return this.http.post(`${baseUrl}${CONSTANTS.VERSION}/${apiName}`, data, httpOptions);
        break;
      default:
        return this.http.get(`${baseUrl}${CONSTANTS.VERSION}/${apiName}`, httpOptions);
        break;
    } 
  }
  /**
   * @description HERE WE ARE CHECKING INTERNET IS CONNECTED OR NOT
   * @returns 
   */
  isOnline(): void {
    if (!window.navigator.onLine) {
      alert(CONSTANTS.MESSAGE.NO_INTERNET);
    }
    return;
  }

}
