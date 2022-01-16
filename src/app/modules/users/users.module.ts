import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ContainerComponent } from './components/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './material.module';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DD_MM_YYYY_Format } from '../../core/constants/mat-date-format';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { CONSTANTS } from 'src/app/core/constants/constants';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@NgModule({
  declarations: [
    UserListComponent,
    AddUserComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MaterialModule,
    MatSnackBarModule
  ],
  providers: [
    SnackBarService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: CONSTANTS.TOAST_DISPLAY_LIMIT } }
  ]
})
export class UsersModule { }
