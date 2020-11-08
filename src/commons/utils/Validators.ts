import {AbstractControl, FormGroup} from '@angular/forms';

export class CustomValidators {
  // tslint:disable-next-line:typedef
  public static confirmPassword(passwordControl: string, confirmControl: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[passwordControl];
      const matchingControl = formGroup.controls[confirmControl];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (matchingControl.value) {
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirm: 'Contraseñas no son iguales', status: 'error' });
        } else {
          matchingControl.setErrors(null);
        }
      }
    };
  }
}
