
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
  isEditActive: boolean;

  public labelDialogModel = new LabelDialogModel();

  constructor(
    public dialogRef: MatDialogRef<LabelsDialogComponent>) {
    this.labels = [];
    this.isLabelActive = true;
    this.isEditActive = false;
  }

  ngOnInit(): void {
    this.labels.push(this.labelDialogModel);
  }

  newLabel(): void {
    this.isLabelActive = true;
    console.log(this.labelDialogModel);
    this.labels.push(this.labelDialogModel);
    this.checkBoxDisableOrEnable(true);
  }

  addLabel(value: LabelDialog): void {
    this.labels[value.id] = value;
    this.isLabelActive = false;
    this.checkBoxDisableOrEnable(false);
    this.isEditActive = false;
  }

  removeLabel(index: number): void {
    this.isLabelActive = false;
    this.labels.splice(index, 1);
  }

  saveAllLabels(): void {
    console.log("All Labels are:", this.labels);
    this.close();
  }

  isEditOutputProperty(value: boolean): void {
    this.checkBoxDisableOrEnable(value);
    this.isEditActive = value;
  }

  checkBoxDisableOrEnable(value: boolean): void {
    for (let index = 0; index < this.labels.length; index++) {
      this.labels[index].isEdit = value;
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}
