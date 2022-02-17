import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LabelsDialogComponent } from './labels-dialog/labels-dialog/labels-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog-label';

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {
    this.animal = "Loin";
    this.name = "Usman";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LabelsDialogComponent, {
      width: '550px',
      height: '450px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
