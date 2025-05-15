// services/country.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../shared/models/model';

@Injectable({
	providedIn: 'root'
})
export class CountryService {
	constructor(private http: HttpClient) { }

	public loadCountriesFromCSV(): Observable<Country[]> {
		return this.http.get('assets/countries.csv', { responseType: 'text' }).pipe(
			map(data => {
				const lines = data.split(/\r?\n/);
				return lines
					.map(line => line.trim())
					.filter(line => !!line)
					.map(line => {
						const parts = line.split(';');
						if (parts.length < 2) return null;
						const [code, name] = parts;
						return { code: code.trim(), name: name.trim() } as Country;
					})
					.filter((country): country is Country => !!country);
			})
		);
	}
}
