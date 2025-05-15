import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-form',
	standalone: false,
	templateUrl: './form.component.html',
	styleUrl: './form.component.scss'
})
export class FormComponent {

	public minDate = new Date();
	public maxDate = new Date();

	public salutations = ['Herr', 'Frau', 'keine Angabe'];
	public countries: any[] = [];

	public personalDataForm = new FormGroup({
		salutation: new FormControl('', Validators.required),
		name: new FormControl('', [Validators.required, Validators.minLength(2)]),
		surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
		birthdate: new FormControl(new Date(), [Validators.required]),
		street: new FormControl('', [Validators.required]),
		zipcode: new FormControl('', [Validators.required]),
		city: new FormControl('', Validators.required),
		country: new FormControl('', Validators.required),
	});


	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
	) {

	}

	ngOnInit() {
	}



}



