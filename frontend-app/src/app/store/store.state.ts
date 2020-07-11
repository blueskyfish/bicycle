import { ErrorState } from './error';
import { UserState } from './user';

export interface StoreState {
  error: ErrorState;
  user: UserState;
}
