
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LabelDialog } from '../interfaces/labelDialog';
import { LabelDialogModel } from '../models/labelDialogModel';

@Component({
  selector: 'app-labels-dialog-item',
  templateUrl: './labels-dialog-item.component.html',
  styleUrls: ['./labels-dialog-item.component.css']
})
export class LabelsDialogItemComponent implements OnInit {

  @Input('isLabelActive') isLabelActive: any;
  @Input('last') last: any;
  @Input('index') index: any;
  @Input('label') label: LabelDialogModel;

  @Output() addLabel = new EventEmitter<LabelDialog>();
  @Output() removeLabel = new EventEmitter<number>();
  // @Output() isEdit = new EventEmitter<boolean>();

  isError: boolean;
  isEditActive: boolean;

  // public labelDialog = new LabelDialogModel();

  constructor() {
    this.label = new LabelDialogModel();
    this.isEditActive = false;
    this.isError = false;
  }

  name = new FormControl('', Validators.required);

  ngOnInit(): void {
  }
  saveLabel(value: string, id: number) {
    if (value === '') {
      this.isError = true;
      return;
    }

    this.label = { id: id, name: value, selected: true, isEdit: false }
    this.addLabel.emit(this.label);
    this.isLabelActive = false;
    this.last = false;
    this.isEditActive = false;
  }
  deleteLabel(id: number) {
    this.removeLabel.emit(id);
  }
  editLabel(name: string, id: number) {
    this.isEditActive = true;
    this.isLabelActive = true;
    this.last = true;
    this.name.setValue(name);
  }
  cancelLabel(id: number) {
    this.isLabelActive = false;
    if (!this.isEditActive){
    this.deleteLabel(id);
    }
    this.isEditActive = false;
  }
}
