import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {User} from "../_models";

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})

export class DialogOverviewExampleDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {
  }

  onCancelClick(): void {
    this.dialogRef.close('Cancel');
  }

  onConfirmClick(): void {
    this.dialogRef.close('Confirm');
  }

  ngOnInit() {
    console.log(this.data);
  }
}
