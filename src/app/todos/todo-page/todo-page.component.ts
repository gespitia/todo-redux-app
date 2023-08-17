import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  constructor(private store:Store<AppState>){}

  completado:boolean=false;

  toggleAll(){
    this.completado=!this.completado
    console.log(this.completado)
    this.store.dispatch(toggleAll({completado:this.completado}))
  }
}
