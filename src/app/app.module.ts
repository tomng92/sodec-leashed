import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
import {ZenDialogComponent} from './edit-detail-dialog/dialog.component';
import { RangleGosselinComponent } from './rangle-gosselin/rangle-gosselin.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeZookeeper }  from './in-memory-data-service/faking-zookeeper';
import './in-memory-data-service/rxjs-operators';
import {ConfigService} from "./in-memory-data-service/config.service";



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
    EditDetailComponent,
    ZenDialogComponent,
    RangleGosselinComponent
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
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(FakeZookeeper),

  ],
  providers: [
    ConfigService,
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
