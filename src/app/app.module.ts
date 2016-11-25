import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent} from './app.component';
import {SettingsDialog} from "./settings-dialog/settings.dialog";
import {NotimplementedDialog} from "./settings-dialog/not-implemented";
import {AppRoutingModule, routingComponents} from './app.routing';
import { Primeng1Component } from './primeng1/primeng1.component';
import  {GrowlModule} from 'primeng/components/growl/growl';
import {TreeModule} from "primeng/components/tree/tree";
import {ContextMenuModule} from "primeng/components/contextmenu/contextmenu";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {FileUploadDemoModule} from "./primengdemo/fileupload/fileuploaddemo.module";
import {FileUploadDemoRoutingModule} from "./primengdemo/fileupload/fileuploaddemo-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    SettingsDialog,
    NotimplementedDialog,
    routingComponents,
    Primeng1Component
    //TabPanel,
    //TabView
  ],
  entryComponents: [
    AppComponent,
    SettingsDialog,
    NotimplementedDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule.forRoot(),
    GrowlModule,
    TreeModule,
    ContextMenuModule,
    FileUploadDemoModule, FileUploadDemoRoutingModule, TabViewModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
