import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { RouteModule } from './route/route.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    RouteModule, 
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
