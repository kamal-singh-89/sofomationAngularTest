import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CONSTANTS } from '../../../../core/constants/constants';
import { IUser } from '../../../../core/models/user.model';
import { CommonServiceService } from '../../../../shared/services/common-service.service';
import { SnackBarService } from '../../../../shared/services/snack-bar.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit, OnDestroy {
  addUserForm: FormGroup; // FORM GROUP
  message = CONSTANTS.MESSAGE; // CREATE VARIABLE FOR MESSAGS
  maxDate = new Date(); // SET A MAX DATE IN DOB DATE PICKER
  userListRoute = `/${CONSTANTS.FONRTEND_URL.USER_LIST}`; // AFTER ADDING REDIRECT TO LIST
  isSubmitting = false;
  private readonly onDestroy = new Subject<void>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userService: UserService,
    private readonly commonServiceService: CommonServiceService,
    private readonly snackBarService: SnackBarService,
    private readonly router: Router
  ) {
    // HERE WE ARE CREATING ADD USER FORM USING REACTIVE FORMS
    this.addUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(CONSTANTS.REGEX.CHARACTERS)]],
      lastName: ['', [Validators.required, Validators.pattern(CONSTANTS.REGEX.CHARACTERS)]],
      dob: [''],
      gender: [''],
      status: [CONSTANTS.ACTIVE]
    });
  }

  ngOnInit(): void {
  }
  
  /**
   * @description GET FORM CONTROLS
   */
  get getAddFormControls() {
    return this.addUserForm.controls;
  }
  /**
   * @description SAVE A USER FORM AND PASS DATA INTO ADD-USER API
   * @param values 
   */

  saveUserForm(form: FormGroup): void {
    if (form.valid) {
      this.isSubmitting = true;
      const values = form.value;
      const request: IUser = {
        fields: {
          'First Name': values.firstName,
          'Last Name': values.lastName,
          'Date of Birth': this.commonServiceService.getDataBaseDateFormat(values.dob),
          'Status': values.status,
          'Gender': values.gender
        }
      };
      this.userService.addUser(request).pipe(takeUntil(this.onDestroy)).
      subscribe(res => {
        this.isSubmitting = false;
        this.router.navigateByUrl(this.userListRoute);
        this.snackBarService.success(CONSTANTS.MESSAGE.USER_ADDED);
      },
        error => {
          this.isSubmitting = false;
          this.snackBarService.error(CONSTANTS.MESSAGE.USER_ERROR_ADDED);
        }
      );
    }

  }

  ngOnDestroy() {
    this.onDestroy.next();
  }
}
