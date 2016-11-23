import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent} from './app.component';
import {SettingsDialog} from "./settings-dialog/settings.dialog";
import {NotimplementedDialog} from "./settings-dialog/not-implemented";

@NgModule({
  declarations: [
    AppComponent,
    SettingsDialog,
    NotimplementedDialog
  ],
  entryComponents: [
    AppComponent,
    SettingsDialog,
    NotimplementedDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
