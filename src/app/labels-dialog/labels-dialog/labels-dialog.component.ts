
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<LabelsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public labeling: { title: "", labels: Array<LabelDialog> }) {
    this.labels = [];
    this.isLabelActive = false;
    this.isEditActive = false;
  }

  ngOnInit(): void {
    this.labels.push(...this.labeling.labels);
  }

  newLabel(): void {
    this.isLabelActive = true;
    this.labels.push(this.labelDialogModel);
  }

  addLabel(label: LabelDialogModel): void {
    this.labels[Number(label.id)] = label;
    this.updateIds();
    this.isLabelActive = false;
    this.isEditActive = false;
  }

  removeLabel(index: number): void {
    this.isLabelActive = false;
    this.labels.splice(index, 1);
    this.updateIds();
  }

  isEditOutputProperty(isEdit: boolean): void {
    this.isEditActive = isEdit;
    if (this.isEditActive) { this.isLabelActive = !isEdit; }
  }

  updateIds() {
    this.labels.forEach((label, index) => label.id = String(index += 1));
  }

  saveAllLabels(): void {
    // console.log("All Labels are:", this.labels); For verify that data is submitted successfully.
    this.dialogRef.close(this.labels);
  }

  close(): void {
    this.dialogRef.close();
  }

}
