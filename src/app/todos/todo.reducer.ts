import { Action, createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, limpiarCompletados, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capitán América')
];

const _todoReducer = createReducer<Todo[]>(
  estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(borrar, (state, {id})=> state.filter( todo => todo.id !== id)),
  on(toggleAll, (state, {completado})=>state.map( todo=>({...todo, completado}) )),
  on(limpiarCompletados, state=>state.filter(todo=>!todo.completado)),
  on(toggle, (state, {id}) => {
    return state.map( todo =>{
      if(todo.id === id ){
        return {
          ... todo,
          completado:!todo.completado
        }
      }
      return todo
    })
  }),
  on(editar, (state, {id, texto}) => {
    return state.map( todo =>{
      if(todo.id === id ){
        return {
          ... todo,
          texto: texto,
        }
      }
      return todo
    })
  }),
);

export function todoReducer( state:Todo[], action:Action ){
  return _todoReducer(state, action)
}
