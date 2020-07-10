import { Action, createReducer } from '@ngrx/store';
import { UserState } from './user.state';

export const initial: UserState = {
  id: null,
  name: null,
  email: null,
  roles: null,
};

const userReducer = createReducer(initial,
);

export function reducer(state: UserState|undefined, action: Action) {
  return userReducer(state, action);
}

