import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ConfigElem} from "./config-elem";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class ZenDialogComponent {
  @Input() configElem : ConfigElem; // le configElem a editer
  @Input() showDialog: boolean;
  @Input() title: string;
  @Input() template: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter<ConfigElem>();

  constructor() {
    this.okText = 'OK';
    this.cancelText = 'Cancel';
  }


  emitValue(configElem) {
    this.valueEmitted.emit(configElem);
  }

}
