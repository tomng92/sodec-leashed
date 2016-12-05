/**
 * Created by tnguyen on 2016-12-05.
 */

import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ConfigElem} from "../edit-detail-dialog/config-elem";
export class FakeZookeeper implements InMemoryDbService {

  createDb() {

    let configItems: ConfigElem[] = [
      new ConfigElem("/svc1/actif", "true"),
      new ConfigElem("/TypeEntree/typ1", "charlie parker"),
      new ConfigElem("/TypeEntree/typ2", "sidney bechet"),
      new ConfigElem("/TypeEntree/typ3", "Louis armstrong"),
      new ConfigElem("/TypeEntree/typ4", "maple leaf rag")];

    return {configItems};
  }
}
