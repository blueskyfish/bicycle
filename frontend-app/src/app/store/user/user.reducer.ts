import { Action, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { UserState } from './user.state';

export const initial: UserState = {
  id: null,
  name: null,
  email: null,
  roles: null,
};

const userReducer = createReducer(initial,
  on(UserActions.updateUser, (state, action) => (
    {
      ...action.user
    }
  )),
);

export function reducer(state: UserState|undefined, action: Action) {
  return userReducer(state, action);
}

