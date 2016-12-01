import {Component} from "@angular/core";
import {MdDialogRef} from '@angular/material';

@Component({
  //selector: 'notimplemented-dialog',
  templateUrl: 'not-implemented.html',
})

export class NotimplementedDialog {

  constructor(public dialogRef: MdDialogRef<NotimplementedDialog>) {
  }

}
