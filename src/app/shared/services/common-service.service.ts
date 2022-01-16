import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { DATE_FORMAT, DATE_FORMAT_LANGUAGE } from 'src/app/core/constants/mat-date-format';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }
  
  /**
   * @description get moment format date and return sting format date
   * @param date 
   * @returns date
   */

  getDataBaseDateFormat(date: Date): string | null {
    return date ? formatDate(date, DATE_FORMAT.YEAR_MONTH_FORMAT, DATE_FORMAT_LANGUAGE.ENG_US) : null;
  }
}
