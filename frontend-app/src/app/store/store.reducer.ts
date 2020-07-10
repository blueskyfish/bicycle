import { ActionReducerMap } from '@ngrx/store';
import { StoreState } from './store.state';
import * as fromUser from './user/user.reducer';

export const initial: StoreState = {
  user: fromUser.initial,
}
export const reducer: ActionReducerMap<StoreState> = ({
  user: fromUser.reducer,
})
