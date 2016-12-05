import {Component} from '@angular/core';


import { Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

@Component({
  selector: 'my-app',
  template: `
    Veuillez choisir un ou plusieurs fichier:
    <br>
    <kendo-upload
        [saveUrl]="uploadSaveUrl"
        [removeUrl]="uploadRemoveUrl"
      ></kendo-upload>`
})
export class KendoUploadTest {

  uploadSaveUrl: string = "saveUrl";
  uploadRemoveUrl: string = "removeUrl";

  constructor(private backend: MockBackend) {
    this.backend.connections.subscribe((c: any) => {

      console.log("backend.connections.subscribe( %s )", c.request.url);
      console.log(c);
      if (c.request.url === "saveUrl" || c.request.url === "removeUrl") {

        let responseOptions = new ResponseOptions({status: 200});

        c.mockRespond(new Response(responseOptions));
      }
    });
  }
}
