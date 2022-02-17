import { LabelsDialogItemComponent } from './labels-dialog-item/labels-dialog-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelsDialogComponent } from './labels-dialog/labels-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LabelsDialogComponent,
    LabelsDialogItemComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class LabelsDialogModule { }
