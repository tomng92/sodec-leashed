import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {SettingsDialog} from "./settings-dialog/settings.dialog";
import {NotimplementedDialog} from "./settings-dialog/not-implemented";
import {AppRoutingModule, routingComponents} from './app.routing';
import {KendoGridTest} from './kendo-grid/kendo-grid.component';
import {KendoUploadTest} from './kendo-upload/kendo-upload';
import {GridModule} from '@progress/kendo-angular-grid';
import {UploadModule}  from '@progress/kendo-angular-upload';

import {MockBackend} from '@angular/http/testing';
import {Http, BaseRequestOptions} from '@angular/http';
import {DujardinSuperBasicDataTable} from "./dujardin-data-table/dujardinTable";
import {DataTableBasicUsageComponent} from "./dujardin-data-table/data-table-basic-usage.component";
import {MdDataTableModule} from "ng2-material";
import { EditDetailComponent } from './edit-detail/edit-detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    SettingsDialog,
    NotimplementedDialog,
    routingComponents,
    KendoGridTest,
    KendoUploadTest,
    DujardinSuperBasicDataTable,
    DataTableBasicUsageComponent,
    EditDetailComponent
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

    GridModule, UploadModule,
    MdDataTableModule,
    ReactiveFormsModule

  ],
  providers: [
    BaseRequestOptions,
    MockBackend,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend, options) => {
        return new Http(backend, options);
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
