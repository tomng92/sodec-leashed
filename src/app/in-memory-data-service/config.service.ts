import {Injectable} from '@angular/core';

import {Http, Response } from "@angular/http";
import {ConfigElem} from "../edit-detail-dialog/config-elem";
import { Observable }     from 'rxjs/Observable';

/**
 * Simule un web service.
 *
 *
 * https://angular.io/docs/ts/latest/guide/server-communication.html#fetch-data-with-http-get
 *
 */
@Injectable()
export class ConfigService {

  private configUrl = 'api/configs';  // URL to web api

  constructor(private http: Http) {
  }

  /**
   * Retourne tous les configs.
   * @returns {Promise<Promise<any>>|Promise<R>|Observable<R>|webdriver.promise.Promise<R>}
   */
  getAllConfig(): Observable<ConfigElem[]> {
    return this.http.get(this.configUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Retourne config-elem pour un nom de config
   * @param id
   * @returns {Promise<Promise<any>>|Promise<R>|Observable<R>|webdriver.promise.Promise<R>}
   */
  getConfig(id: number): Promise<ConfigElem> {
    const url = `${this.configUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as ConfigElem)
      .catch(this.handleError);
  }


  /**
   * Fake network delay
   * @returns {Promise<Promise<ConfigElem[]>>}
   */
  getConfigSlowly(): Promise<ConfigElem[]> {
    return new Promise<ConfigElem[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getAllConfig());
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
