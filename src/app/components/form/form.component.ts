import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CountryService } from '../../services/country.service';
import { SubmissionDialogComponent } from '../../shared/modals/submission-dialog/submission-dialog.component';
import { Country } from '../../shared/models/model';
import { dateInPastValidator, fiveDigitPostcodeValidator } from '../../shared/vaildators/validators';

@Component({
	selector: 'app-form',
	standalone: false,
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	protected maxDate = new Date();

	protected salutations = ['Herr', 'Frau', 'keine Angabe'];
	protected countries: Country[] = [];

	protected personalDataForm = new FormGroup({
		salutation: new FormControl(''),
		name: new FormControl('', [Validators.required, Validators.minLength(2)]),
		surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
		birthdate: new FormControl('', [Validators.required, dateInPastValidator()]),
		street: new FormControl(''),
		zipcode: new FormControl('', [fiveDigitPostcodeValidator()]),
		city: new FormControl(''),
		country: new FormControl('', Validators.required),
	});

	constructor(
		private countryService: CountryService,
		private dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.countryService.loadCountriesFromCSV().subscribe((data: Country[]) => {
			this.countries = data;
		});

		this.maxDate.setDate(this.maxDate.getDate() - 1);
	}

	protected onSubmit() {
		if (this.personalDataForm.invalid) {
			this.personalDataForm.markAllAsTouched(); // Mark all fields to show errors
			return;
		}

		const formData = this.personalDataForm.value;

		// Kept for testing purpose
		console.log('Form submitted:', formData);

		this.dialog.open(SubmissionDialogComponent, {
			data: { message: 'Formular erfolgreich übermittelt!' }
		});

		// Reset the form values and manually clear validation states.
		// This ensures that after successful submission, no fields remain marked as invalid,
		// touched, or dirty — avoiding any red error highlights in the UI.
		this.personalDataForm.reset();
		Object.keys(this.personalDataForm.controls).forEach(key => {
			const control = this.personalDataForm.get(key);
			control?.setErrors(null);
			control?.markAsPristine();
			control?.markAsUntouched();
		});
	}

}



