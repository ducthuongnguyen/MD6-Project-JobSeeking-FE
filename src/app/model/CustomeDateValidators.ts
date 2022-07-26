import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomeDateValidators{
  static fromToDate(fromDateField: string, errorName: string = 'fromToDate'): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
      const fromDate = formGroup.get(fromDateField).value;
      // Ausing the fromDate and toDate are numbers. In not convert them first after null check
      if ((fromDate !== null) && fromDate > Date.now()) {
        return {[errorName]: true};
      }
      return null;
    };
  }
}
