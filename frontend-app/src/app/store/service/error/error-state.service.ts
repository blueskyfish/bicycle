import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { Error } from './error-actions';
import { ErrorStateModel, initialErrorState } from './error-state.model';

export const ERROR_STATE_TOKEN = new StateToken('error');

@State<ErrorStateModel>({
  name: ERROR_STATE_TOKEN,
  defaults: initialErrorState,
})
@Injectable({
  providedIn: 'root'
})
export class ErrorStateService {

  constructor() { }

  @Action(Error.Append)
  appendError(ctx: StateContext<ErrorStateModel>, { payload }: Error.Append) {
    const state = ctx.getState();
    ctx.setState({
      list: [...state.list, payload],
    });
  }
}
