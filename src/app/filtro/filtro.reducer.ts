import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos>(
  initialState,
  on(setFiltro, (state, {filtro})=>filtro)
)

export function filtroReducer(state:filtrosValidos, action:Action){
  return _filtroReducer(state, action)
}
