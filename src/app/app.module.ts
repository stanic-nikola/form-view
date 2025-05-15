import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { SubmissionDialogComponent } from './shared/modals/submission-dialog/submission-dialog.component';

@NgModule({
	declarations: [
		AppComponent,
		FormComponent,
		SubmissionDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatCardModule,
		MatDatepickerModule,
		MatDialogModule,
		MatInputModule,
		MatSelectModule,
		MatTooltipModule,
		ReactiveFormsModule,
		MatDatepickerModule,
		MatNativeDateModule,
		FlexLayoutModule,
		MatButtonModule
	],
	providers: [provideHttpClient()],
	bootstrap: [AppComponent]
})
export class AppModule { }
