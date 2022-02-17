import { LabelsDialogModule } from './labels-dialog/labels-dialog.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelsDialogItemComponent } from './labels-dialog/labels-dialog-item/labels-dialog-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule
    // MatInputModule,
    // MatFormFieldModule,
    // LabelsDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
