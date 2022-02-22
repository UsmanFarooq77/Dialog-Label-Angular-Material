import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelDialog } from './labels-dialog/interfaces/labelDialog';
import { LabelsDialogComponent } from './labels-dialog/labels-dialog/labels-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog-label';
  labels: Array<LabelDialog> = [
    { id: '1', name: "Label 1", selected: false },
    { id: '2', name: "Label 2", selected: true },
    { id: '3', name: "Label 3", selected: true },
    { id: '4', name: "Label 4", selected: false }
  ];

  constructor(public dialog: MatDialog) { }

  data = { title: "Window Labels", labels: this.labels };

  openDialog(): void {
    const dialogRef = this.dialog.open(LabelsDialogComponent, {
      width: '600px',
      height: '450px',
      data: { ...this.data }
    });

    dialogRef.afterClosed().subscribe(returnedLabelsList => {
      console.log(returnedLabelsList)
      if (returnedLabelsList) {
        console.log("returnedLabelsList", returnedLabelsList);
      }
    });
  }
}
