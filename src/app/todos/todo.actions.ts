import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear Todo',
  props<{texto: string}>()
)

export const toggle= createAction(
  '[TODO] toggle Todo',
  props<{ id: number }>()
)

export const editar= createAction(
  '[TODO] editar Todo',
  props<{ id: number, texto:string }>()
)

export const borrar= createAction(
  '[TODO] borrar Todo',
  props<{ id: number }>()
)

export const toggleAll= createAction(
  '[TODO] toggleAll Todo',
  props<{ completado: boolean }>()
)

export const limpiarCompletados = createAction(
  '[TODO] limpiar Todo',
)
