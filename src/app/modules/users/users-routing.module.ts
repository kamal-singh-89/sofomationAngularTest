import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONSTANTS } from '../../core/constants/constants';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ContainerComponent } from './components/container/container.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: ContainerComponent,
    children: [
      { path: '', redirectTo: CONSTANTS.FONRTEND_URL.USER_LIST, pathMatch: 'full' },
      { path: CONSTANTS.FONRTEND_URL.USER_LIST, component: UserListComponent },
      { path: CONSTANTS.FONRTEND_URL.ADD_USER, component: AddUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
