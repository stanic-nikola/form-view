import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fiveDigitPostcodeValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const value = control.value;

		if (!value || value.trim() === '') {
			return null;
		}

		const valid = /^\d{5}$/.test(value);
		return valid ? null : { invalidPostcode: true };
	}
}

export function dateInPastValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const value = control.value;

		const inputDate = new Date(value);
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		return inputDate < today ? null : { dateNotInPast: true };
	};
}

