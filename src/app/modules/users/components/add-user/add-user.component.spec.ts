import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonServiceService } from '../../../../shared/services/common-service.service';
import { SnackBarService } from '../../../../shared/services/snack-bar.service';
import { UserService } from '../../services/user.service';

import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let userServiceStub: UserService;
  let snackBarServiceStub: SnackBarService;
  let commonServiceServiceStub: CommonServiceService
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports: [
          RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {provide: UserService, useValue: userServiceStub},
        {provide: SnackBarService, useValue: snackBarServiceStub},
        {provide: CommonServiceService, useValue: commonServiceServiceStub},
        FormBuilder,
      ]
    })
    .compileComponents();
    router = TestBed.get(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
