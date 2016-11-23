


import {Component} from "@angular/core";
import {MdDialogRef} from '@angular/material';

@Component({
  //selector: 'notimplemented-dialog',
  template: `
  <p>Désolé!</p>
  <p>Cette fonctionalité n'est pas encore implémentée.</p>
  <button md-raised-button  (click)="dialogRef.close('cestfermé!')">Fermer</button>`
})
export class NotimplementedDialog {

  constructor(public dialogRef: MdDialogRef<NotimplementedDialog>) { }

}
