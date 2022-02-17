
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/app.component';
import { LabelDialog } from '../interfaces/labelDialog';
import { LabelDialogModel } from '../models/labelDialogModel';


@Component({
  selector: 'app-labels-dialog',
  templateUrl: './labels-dialog.component.html',
  styleUrls: ['./labels-dialog.component.css']
})
export class LabelsDialogComponent implements OnInit {

  labels: Array<LabelDialog>;
  isLabelActive: boolean;
  public labelDialogModel = new LabelDialogModel();
  isEditActive: any;

  constructor(
    public dialogRef: MatDialogRef<LabelsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.labels = [
      // { id: '1', name: "Label 1", selected: false },
      // { id: '2', name: "Label 2", selected: true },
      // { id: '3', name: "Label 3", selected: true },
      // { id: '4', name: "Label 4", selected: false },
    ];
    this.isLabelActive = false;
  }

  ngOnInit(): void {
  }

  newLabel() {
    this.isLabelActive = true;
    console.log(this.labelDialogModel)
    this.labels.push(this.labelDialogModel)
  }

  addLabel(value: LabelDialog) {
    if(this.isEditActive){
    this.labels[Number(value.id)] = value;
    }
    else {
      this.labels[Number(value.id)] = value;
    }
    this.isLabelActive = false;
    // console.log(this.labels);
  }
  isEdit(value: any){
    return this.isEditActive = value;
  }

  removeLabel(index: any) {
    // console.log(this.labels, index)
    // for (var i = 0; i <= this.labels.length-1; i++) {

    //   if ( this.labels[i].id == index) {

    //     this.labels.splice(i, 1);
    //   }

    // }
    this.isLabelActive = false;
    this.labels.splice(index,1);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveAllLabels(){
    console.log(this.labelDialogModel);
    this.onNoClick();
  }

}
