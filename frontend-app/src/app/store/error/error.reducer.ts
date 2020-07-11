import { Action, createReducer, on } from '@ngrx/store';
import { ErrorActions } from './error.actions';
import { ErrorState } from './error.state';
import { ErrorUtil } from './error.util';

export const initial: ErrorState = {
  last: null,
  list: [],
};

const errorReducer = createReducer(initial,
  on(ErrorActions.appendError, (state, action) => ErrorUtil.appendError(state, action.payload)),
  on(ErrorActions.removeError, (state, action) => ErrorUtil.removeError(state, action.id)),
);

export function reducer(state: ErrorState | undefined, action: Action) {
  return errorReducer(state, action);
}
