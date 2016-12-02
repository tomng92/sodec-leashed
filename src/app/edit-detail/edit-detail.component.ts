import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './user';

@Component({
  // selector: 'my-app', // non utilisé
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent  {


  showDialog: boolean = false;
  dialogTitla: string;
  editingTodo: any = null;
  fieldValue: string = '';
  todoList: any = [];
  okButtonText: string = 'Ajouter configuration';

  /**
   *
   * @param todo
   */
  todoDialog(todo = null) {
    this.okButtonText = 'Ajouter élément';
    this.dialogTitla = 'Nouvel élément';
    this.fieldValue = '';
    this.editingTodo = todo;
    if (todo) {
      this.dialogTitla = 'Modifier élément config';
      this.fieldValue = todo.title;
      this.okButtonText = 'Modifier élément';
    }
    this.showDialog = true; //ouvrir dialogue
  }

  remove(index: number) {
    this.todoList.splice(index, 1);
  }

  editTodo(title) {
    this.editingTodo.title = title;
  }

  updateTodo(title) {
    if (title) {
      title = title.trim();
      if (this.editingTodo) {
        this.editTodo(title);
      } else {
        this.addTodo(title);
      }
    }
    this.hideDialog();
  }

  addTodo(title) {
    const todo = {title: title, completed: false};
    this.todoList.push(todo);
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null; // make sure Input is new
  }




}
