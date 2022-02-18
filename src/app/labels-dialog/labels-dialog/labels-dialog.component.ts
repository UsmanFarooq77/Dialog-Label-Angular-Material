
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
    this.labels.push(this.labelDialogModel);
    this.checkBoxDisableOrEnable(true);
  }

  addLabel(label: LabelDialog): void {
    this.labels[label.id] = label;
    this.isLabelActive = false;
    this.checkBoxDisableOrEnable(false);
    this.isEditActive = false;
  }

  removeLabel(index: number): void {
    this.isLabelActive = false;
    this.labels.splice(index, 1);
    this.labels.forEach((label, index) => label.id = index);
  }

  saveAllLabels(): void {
    console.log("All Labels are:", this.labels);
    this.close();
  }

  isEditOutputProperty(isEdit: boolean): void {
    this.checkBoxDisableOrEnable(isEdit);
    this.isEditActive = isEdit;
  }

  checkBoxDisableOrEnable(isEdit: boolean): void {
    this.labels.forEach((label) => label.isEdit = isEdit );
  }

  close(): void {
    this.dialogRef.close();
  }

}
