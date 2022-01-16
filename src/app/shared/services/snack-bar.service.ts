import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable( {
  providedIn: 'root'
} )
export class SnackBarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  classNameError = 'red-snackbar';
  classNameSuccess = 'green-snackbar';
  snackObject = {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    panelClass: [ this.classNameSuccess ]
  };
  constructor(
    private readonly snackBar: MatSnackBar
  ) { }
  /**
   * @description toast message for success
   * @param msg success message
   */
  success( msg:string ): void {
    this.snackObject.panelClass = [];
    this.snackObject.panelClass.push( this.classNameSuccess );
    this.snackBar.open( msg, 'Close', this.snackObject );
  }
  /**
   * @description toast message for error
   * @param message error message
   */
  error( message:string ): void {
    this.snackObject.panelClass = [];
    this.snackObject.panelClass.push( this.classNameError );
    this.snackBar.open( message, 'Close', this.snackObject );
  }
}
