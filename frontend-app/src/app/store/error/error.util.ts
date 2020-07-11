import { Util } from '../../common/util';
import { ErrorMessage, ErrorState } from './error.state';

export class ErrorUtil {

  static appendError(state: ErrorState, error: Partial<ErrorMessage>): ErrorState {
    console.log('> debug: state =>', state, error);

    const last = state.last;
    let newState = { ...state };
    newState.last = error;
    if (Util.notNil(last)) {
      newState.list.push({ ...last });
    }
    return newState;
  }

  static removeError(state: ErrorState, id: number): ErrorState {
    if (Util.notNil(state.last) && state.last.id === id) {
      return {
        ...state,
        last: null,
      };
    }
    return {
      ...state,
      list: state.list.filter(err => err.id !== id),
    };
  }
}
