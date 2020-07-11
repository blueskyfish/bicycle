import { createSelector } from '@ngrx/store';
import { StoreState } from '../store.state';
import { ErrorMessage, ErrorState } from './error.state';

const selectError = (state: StoreState) => state.error;

export namespace ErrorSelectors {

  export const getLastError = createSelector(
    selectError,
    (state: ErrorState): Partial<ErrorMessage> => state.last,
  );

}
