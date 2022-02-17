
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
  // isEditActive: any;

  constructor(
    public dialogRef: MatDialogRef<LabelsDialogComponent>) {
    this.labels = [];
    this.isLabelActive = true;
  }

  ngOnInit(): void {
    this.labels.push(this.labelDialogModel);
  }

  newLabel() {
    this.isLabelActive = true;
    console.log(this.labelDialogModel)
    this.labels.push(this.labelDialogModel);
  }

  addLabel(value: LabelDialog) {
    
    this.labels[value.id] = value;
    this.isLabelActive = false;
  
  }

  removeLabel(index: any) {
    this.isLabelActive = false;
    this.labels.splice(index, 1);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveAllLabels() {
    console.log(this.labels);
    this.onNoClick();
  }

    // isEdit(value: any) {
  //   return this.isEditActive = value;
  // }

}
