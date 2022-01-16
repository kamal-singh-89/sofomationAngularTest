import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser, IUsersListResponse } from '../../../../core/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['First Name','Last Name','Gender', 'Date of Birth', 'Status'];
  title= 'User List';
  userList$: Observable<IUser[]>; // CREATE USERLIST Observable TO HOLD Observable DATA

  constructor(
    private readonly userService: UserService
  ) {
    this.userList$ = of(); // ASSIGN EMPTY Observable
   }

  ngOnInit(): void {
    this.getUserList(); // CALL GET USER FUNCTION
  }

  /**
   * @description GET ALL USER LIST VIA CALLING USER LIST API AND ASSIGN THE RESPONSE IN Observable VARIABLE SO WE CAN SUBSCRIBE THAT ON DOM
   */
  getUserList(): void {
    this.userList$ = this.userService.getUserList().pipe(map((response:IUsersListResponse) => {
      return response.records;
    }));
  }
  /**
   * 
   * @param item 
   * @returns 
   */
  trackByUserId(index: any, user: IUser): string | undefined {
    return index;
  }
}
