import {Input, Component} from "@angular/core";
/**
 * Created by tnguyen on 2016-11-23.
 */

@Component({

  template: `

ALLO! chiens ici
     <md-grid-list cols="4" rowHeight="200px">
      <md-grid-tile *ngFor="let dog of dogs" [rowspan]="dog.rows">
        <img src="assets/{{dog.name}}.png" alt="photo of {{dog.name}}">
        <md-grid-tile-footer>
          <h3 md-line>{{dog.name}}</h3>
          <span md-line>Human: {{dog.human}}</span>
          <button md-icon-button (click)="showDog(dog)">
            <md-icon>info</md-icon>
          </button>
        </md-grid-tile-footer>
      </md-grid-tile>
    </md-grid-list>

  `
})
export class DogsComponents {
  //@Input() dogs: any[];// inputted

  constructor(private dogs: any[]) {
    console.log("ctor des chine !!! %s", dogs);
  }

}
