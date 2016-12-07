/**
 * Created by tnguyen on 2016-12-02.
 */

export class ConfigElem {

  completed: boolean;

  constructor(public id: number, public repertoire: string, public value: string) {
    this.completed = false;
  };
}
