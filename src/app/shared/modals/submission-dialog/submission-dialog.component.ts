import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-submission-dialog',
	standalone: false,
	templateUrl: './submission-dialog.component.html',
	styleUrl: './submission-dialog.component.scss'
})
export class SubmissionDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<SubmissionDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { message: string }
	) { }

	close(): void {
		this.dialogRef.close();
	}
}
