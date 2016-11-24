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

    private dogs = [
        {rows: 2, name: "Mal", human: "Jeremy", age: 5},
        {rows: 1, name: "Molly", human: "David", age: 5},
        {rows: 1, name: "Sophie", human: "Alex", age: 8},
        {rows: 2, name: "Taz", human: "Joey", age: '11 weeks'},
        {rows: 1, name: "Kobe", human: "Igor", age: 5},
        {rows: 2, name: "Porter", human: "Kara", age: 3},
        {rows: 1, name: "Stephen", human: "Stephen", age: 8},
        {rows: 1, name: "Cinny", human: "Jules", age: 3},
        {rows: 1, name: "Hermes", human: "Kara", age: 3},
    ];


    constructor() {
        console.log("ctor des chine !!! %s", this.dogs);
        //this.dogs = DOGS;
    }

}
