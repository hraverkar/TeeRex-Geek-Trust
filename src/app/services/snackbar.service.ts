import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar: MatSnackBar) { }

  public error(message: string, title: string) {
    this._snackbar.open(message, title, {
      duration: 3000,
      panelClass: ['error-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  public success(message: string, title: string) {
    this._snackbar.open(message, title, {
      duration: 3000,
      panelClass: ['success-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  public warning(message: string, title: string) {
    this._snackbar.open(message, title, {
      duration: 3000,
      panelClass: ['warning-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  public info(message: string, title: string) {
    this._snackbar.open(message, title, {
      duration: 3000,
      panelClass: ['info-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  public show(message: string, title: string) {
    this._snackbar.open(message, title, {
      duration: 3000,
      panelClass: ['show-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
