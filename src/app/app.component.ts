import {
  Component, ViewChild, ViewContainerRef, AfterViewInit, AfterViewChecked,
  ChangeDetectorRef
} from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig, MdButton, MdDialogRef} from "@angular/material";
import {SettingsDialog} from "./settings-dialog/settings.dialog";
import anything = jasmine.anything;
import {NotimplementedDialog} from "./settings-dialog/not-implemented";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // dogs = [
  //   {rows: 2, name: "Mal", human: "Jeremy", age: 5},
  //   {rows: 1, name: "Molly", human: "David", age: 5},
  //   { rows: 1, name: "Sophie", human: "Alex", age: 8},
  //   {rows: 2, name: "Taz", human: "Joey", age: '11 weeks'},
  //   { rows: 1, name: "Kobe", human: "Igor", age: 5},
  //   {rows: 2, name: "Porter", human: "Kara", age: 3},
  //   { rows: 1, name: "Stephen", human: "Stephen", age: 8},
  //   {rows: 1, name: "Cinny", human: "Jules", age: 3},
  //   { rows: 1, name: "Hermes", human: "Kara", age: 3},
  // ];

  @ViewChild('sidenav') sidenav: MdSidenav;
  @ViewChild('sidenavleft') sidenav_left: MdSidenav;
  @ViewChild('bouton-configuration') boutonConfiguration: MdButton;
  @ViewChild('bouton-anomalies') boutonAnomalies: MdButton;
  dialogRef: MdDialogRef<NotimplementedDialog>;

  initedSidenav = false;

  ngAfterViewInit() {
    if (!this.initedSidenav && this.sidenav) {



      //console.log(this.boutonMore);
      this.sidenav_left.open();
      this.initedSidenav = true;

      // http://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
      // sinon erreur 'expression changed after it was checked'.
      this.cdr.detectChanges();

    }
  }

  selectAnomalies() {

  }




  currentDog = {};
  isDarkTheme = false;

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef, public cdr: ChangeDetectorRef) {}

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialog, config);
  }

  showDog(dog) {
    this.currentDog = dog;
    this.sidenav.open();
  }

  //notimplDialogRef: MdDialogRef<NotimplementedDialog>;
  //lastCloseResult: string;

  openNotimplemented() {
    this.dialogRef = this.dialog.open(NotimplementedDialog);

    // this.dialogRef.afterClosed().subscribe(result => {
    //   //this.lastCloseResult = result;
    //   this.dialogRef = null;
    // });
  }

}
