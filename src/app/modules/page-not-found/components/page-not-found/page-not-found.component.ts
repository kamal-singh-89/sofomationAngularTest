import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../../../../core/constants/constants';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  homePageRoute = `/${CONSTANTS.FONRTEND_URL.USER_LIST}`; // REDIRECTING ON HOME BUT HERE WE HAVE USER LIST

  constructor() { }

  ngOnInit(): void {
  }

}
