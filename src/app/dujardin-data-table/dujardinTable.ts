import {Component, ViewContainerRef, ChangeDetectorRef, OnInit} from "@angular/core";
import {MdDialogRef, MdDialog} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EditDetailComponent} from "../edit-detail/edit-detail.component";

/**
 * Created by tnguyen on 2016-11-29.
 */


@Component({
  templateUrl: "./dujardinTable.html"
})
export class DujardinSuperBasicDataTable implements  OnInit{

  dialogRef: EditDetailComponent;

  myForm: FormGroup;


  constructor(private dialog: MdDialog, private vcr: ViewContainerRef, private _fb: FormBuilder) {}

  openEditDetailDialog() {
    //this.dialogRef = this.dialog.open(NotimplementedDialog);

    // this.dialogRef.afterClosed().subscribe(result => {
    //   //this.lastCloseResult = result;
    //   this.dialogRef = null;
    // });
  }

  ngOnInit() {


  }


}
