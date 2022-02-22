import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelDialogModel } from '../models/labelDialogModel';

@Component({
  selector: 'app-labels-dialog-item',
  templateUrl: './labels-dialog-item.component.html',
  styleUrls: ['./labels-dialog-item.component.css']
})
export class LabelsDialogItemComponent implements OnInit {

  @Input('label') label: LabelDialogModel;
  @Input('isLabelActive') isLabelActive: any;
  @Input('lastLabel') lastLabel: any;
  @Input('index') index: any;
  @Input('isEditActive') isEditActive: any;

  @Output() addLabelOutputProperty = new EventEmitter<LabelDialogModel>();
  @Output() removeLabelOutputProperty = new EventEmitter<number>();
  @Output() isEditOutputProperty = new EventEmitter<boolean>();

  labelForm: FormGroup;

  constructor() {
    this.label = new LabelDialogModel();
    this.isEditActive = false;
    this.labelForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void { }

  saveLabel(): void {
    if (this.labelForm.value.name === '') return;
    this.label = { id: this.index, name: this.labelForm.value.name, selected: this.label.selected };
    this.isLabelActive = false;
    this.lastLabel = false;
    this.isEditActive = false;
    this.addLabelOutputProperty.emit(this.label);
  }

  editLabel(name: string): void {
    this.isEditActive = true;
    this.isLabelActive = true;
    this.lastLabel = true;
    this.labelForm.setValue({ name: name });
    this.isEditOutputProperty.emit(this.isEditActive);
  }

  deleteLabel(): void {
    this.removeLabelIntoOutputProperty();
  }

  cancelLabel(): void {
    this.isLabelActive = false;
    if (!this.isEditActive) { this.removeLabelIntoOutputProperty(); }
    this.isEditActive = false;
    this.lastLabel = false;
    this.isEditOutputProperty.emit(this.isEditActive);
  }

  checkBoxStatusChange() {
    if (this.label.selected) { this.label.selected = false; }
    else { this.label.selected = true; }
  }

  removeLabelIntoOutputProperty() {
    this.removeLabelOutputProperty.emit(this.index)
  }

  get labelName() { return this.labelForm.controls; }
}
