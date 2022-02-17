
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
  isEditActive: boolean;

  constructor(
    public dialogRef: MatDialogRef<LabelsDialogComponent>) {
    this.labels = [];
    this.isLabelActive = true;
    this.isEditActive = false;
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
    this.checkBoxDisableOrEnable(false);
    this.isEditActive = false;

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

  isEditOutputProperty(value: boolean) {
    this.checkBoxDisableOrEnable(value);
    this.isEditActive = value;
    console.log(value,this.labels)
  }

  checkBoxDisableOrEnable(value: boolean){
    for(let i=0; i<this.labels.length; i++){
      // if(id !== i){
      this.labels[i].isEdit = value;
      // }
    }
  }

}
