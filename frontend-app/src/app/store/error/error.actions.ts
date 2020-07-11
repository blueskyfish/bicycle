import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from './error.state';

export class ErrorActions {

  static readonly appendError = createAction(
    '[Error] append error',
    props<{payload: Partial<ErrorMessage>}>()
  )

  static readonly removeError = createAction(
    '[Error] remove error',
    props<{id: number}>()
  )
}
