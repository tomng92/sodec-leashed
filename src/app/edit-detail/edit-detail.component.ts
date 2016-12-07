import {Component, OnInit} from '@angular/core';
import {ConfigElem} from "../edit-detail-dialog/config-elem";
import {MyConfigurationService} from "../in-memory-data-service/config.service";

@Component({
  // selector: 'my-app', // non utilisé
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css'],
  providers: [MyConfigurationService]
})

export class EditDetailComponent implements OnInit {

  showDialog: boolean = false;
  dialogTitle: string;
  currentConfig: ConfigElem = null;
  configList: ConfigElem[] = []; // liste des todos existants
  okButtonText: string = 'Ajouter configuration';
  modeAjout: boolean;
  errorMessage: string;

  constructor(private cfgSvc:MyConfigurationService) {};

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    console.log(`OnInit`);

    /**
     * Lit la liste de config elem
     */
    this.cfgSvc.getAllConfig().subscribe(
      configs => this.configList = configs,
      error => this.errorMessage = <any>error);

      console.log(this.configList);
  }


  /**
   * Open the TODO dialog (if todo == null, then this is to add a new todo.)
   * @param elem
   */
  todoDialog(elem = null) {

    if (elem) {
      this.dialogTitle = 'Modifier élément config';
      this.okButtonText = 'Modifier élément';
      this.currentConfig = elem;
      this.modeAjout = false;
    } else {
      this.okButtonText = 'Ajouter élément';
      this.currentConfig = new ConfigElem(0, "", "");
      this.dialogTitle = 'Ajouter nouvel élément';
      this.modeAjout = true;
    }
    this.showDialog = true; //ouvrir dialogue
  }

  /**
   * Remove the elem at index
   * @param index
   */
  remove(index: number) {
    console.log("removing config eelem " + index);
    this.configList.splice(index, 1);
  }

  private _editTodo(elem) {
    this.currentConfig = elem;
  }

  /**
   * The currentConfig determines what to do with elem:
   *   - if null: add
   *   - otherwise: update it us
   * @param elem
   */
  updateTodo(elem) {
    if (this.modeAjout) {
      this.addConfig(elem);
    } else {
      this._editTodo(elem);
    }

    this.hideDialog();
  }

  /**
   * Add elem to the list
   * @param elem
   */
  // addTodo(elem) {
  //   this.configList.push(elem);
  // }
  /**
   * Ajouter nouvel config elem
   * @param configElem
   */
  addConfig (configElem: ConfigElem) {
    if (!configElem) { return; }

    this.cfgSvc.addConfig(configElem)
      .subscribe(
        configElem  => this.configList.push(),
        error =>  this.errorMessage = <any>error);
  }


  hideDialog() {
    this.showDialog = false;
    this.currentConfig = null;
  }
}
