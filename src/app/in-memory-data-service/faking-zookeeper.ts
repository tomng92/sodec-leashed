/**
 * Created by tnguyen on 2016-12-05.
 */

import {InMemoryDbService} from 'angular-in-memory-web-api';


export class InMemoryZooConfig implements InMemoryDbService {

  createDb() {

    let myConfigItems = [
      { id: '1', repertoire: "/TypeEntree/cha", value: "charlie"},
      { id: '2', repertoire: "/TypeEntree/sid", value: "sidney"},
      { id: '3', repertoire: "/TypeEntree/lou", value: "Louis"},
      { id: '4', repertoire: "/TypeEntree/lud", value: "ludwig"}
    ];
    // { id: '1', elem: new ConfigElem("/TypeEntree/cha", "charlie")},
    // { id: '2', elem: new ConfigElem("/TypeEntree/sid", "sidney")},
    // { id: '3', elem: new ConfigElem("/TypeEntree/lou", "Louis")},
    // { id: '4', elem: new ConfigElem("/TypeEntree/lud", "ludwig")}];

    return {myConfigItems};
  }
}
