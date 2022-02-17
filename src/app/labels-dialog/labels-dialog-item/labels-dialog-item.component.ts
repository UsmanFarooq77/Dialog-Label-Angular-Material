
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
  @Input('label') label:  LabelDialog ={
    selected: false,
    id: 0,
    name: ''
  };
  isEditActive : boolean;
  public labelDialog = new LabelDialogModel();
  @Output() addLabel = new EventEmitter<LabelDialog>();
  @Output() removeLabel = new EventEmitter<number>();
  @Output() isEdit = new EventEmitter<boolean>();
  isError: boolean; 
  

  constructor() {
    // console.log(this.label, this.isLabelActive)
    this.isEditActive = false;
    this.isError = false;
   }

  name = new FormControl(this.label.name,Validators.required);

  ngOnInit(): void {
  }
  saveLabel(value : string, id :  number){
    if (value == ''){
      this.isError = true;
      return;
    }
    
    this.label = {id : id, name : value, selected : true}
    this.isEdit.emit(this.isEditActive);
    this.addLabel.emit(this.label);
    this.isLabelActive = false;
    this.last = false;
    this.isEditActive = false;
  }
  deleteLabel(id : number){
    this.removeLabel.emit(id);
  }
  editLabel(name: string,id: number){
    this.isEditActive = true;
    // this.labelDialog.isEditActive(true);
    // if (this.labelDialog.isEdit){
    //   return
    // }

    this.isLabelActive = true;
    this.last = true;
    // this.label.name = name;
    this.name.setValue(name);
  }
  cancelLabel(id :number){
    this.isLabelActive = false;
    this.deleteLabel(id);
  }


}
