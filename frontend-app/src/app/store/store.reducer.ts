import { ActionReducerMap } from '@ngrx/store';
import { StoreState } from './store.state';
import * as fromUser from './user/user.reducer';
import * as fromError from './error/error.reducer';

export const initial: StoreState = {
  error: fromError.initial,
  user: fromUser.initial,
}
export const reducer: ActionReducerMap<StoreState> = ({
  error: fromError.reducer,
  user: fromUser.reducer,
});
