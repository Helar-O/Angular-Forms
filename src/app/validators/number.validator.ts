import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class NumberValidator {
  static decimalPlacesValidator(allowedDecimalPlaces: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (isNaN(value) || value === null) {
        return { notANumber: true };
      }

      const decimalPart = (value.toString().split('.')[1] || '').length;
      if (decimalPart > allowedDecimalPlaces) {
        return { tooManyDecimalPlaces: true };
      }

      return null;
    };
  }

  static negativeNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (parseFloat(value) < 0) {
        return { negativeNumber: true }
      }

      return null;
    };
  }
}
