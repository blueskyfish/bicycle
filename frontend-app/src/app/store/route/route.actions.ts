import { createAction, props } from '@ngrx/store';

export class RouteActions {

  static navigate = createAction(
    '[Route] navigate',
    props<{ paths: any[] }>()
  )
}
