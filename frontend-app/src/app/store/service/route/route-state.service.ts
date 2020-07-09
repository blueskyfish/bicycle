import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { RouterUtil } from '../../../common/util';
import { Route } from './route-actions';

export const ROUTE_STATE_TOKEN = new StateToken<boolean>('route');

@State<boolean>({
  name: ROUTE_STATE_TOKEN,
  defaults: false,
})
@Injectable({
  providedIn: 'root'
})
export class RouteStateService {

  constructor(private router: Router) { }

  @Action(Route.Navigate)
  async navigate(ctx: StateContext<boolean>, { paths }: Route.Navigate) {
    ctx.setState(true);
    await RouterUtil.navigateTo(this.router, ...paths);
    ctx.setState(false);
  }
}
