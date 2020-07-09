import { Injectable } from '@angular/core';
import { Action, NgxsAfterBootstrap, State, StateContext, StateToken } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin'
import { EMPTY } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { BikeLoginUser, BikeUserInfo, BikeUserService } from '../../../backend';
import { RouteNames } from '../../../common/route.names';
import { AuthService } from '../../../common/service/auth.service';
import { Error } from '../error/error-actions';
import { User } from './user-actions';
import { initialUserState, UserStateModel } from './user-state.model';
import handleError = Error.handleError;

export const USER_STATE_TOKEN = new StateToken<UserStateModel>('user');

/**
 * State service manages the user values
 */
@State<UserStateModel>({
  name: USER_STATE_TOKEN,
  defaults: initialUserState,
})
@Injectable({
  providedIn: 'root'
})
export class UserStateService implements NgxsAfterBootstrap {

  constructor(
    private authService: AuthService,
    private userService: BikeUserService
  ) {
  }

  ngxsAfterBootstrap(ctx: StateContext<any>) {
    if (ctx && this.authService.isAuth) {
      ctx.dispatch(new User.GetInfo());
    }
  }

  @Action(User.Login)
  sendLogin(ctx: StateContext<UserStateModel>, { payload }: User.Login) {
    return this.userService.login({ body: { ...payload } })
      .pipe(
        map(({ id, name, email, roles, token }: BikeLoginUser) => {
          this.authService.updateToken(token);

          ctx.setState({
            id,
            name,
            email,
            roles,
          });

          return true;
        }),
        mergeMap((result: any) => {
          if (result === true) {
            return ctx.dispatch(new Navigate([RouteNames.Root, RouteNames.Home]));
          }
          return ctx.dispatch(Error.handleError(result));
        })
      );
  }

  @Action(User.GetInfo)
  getUserInfo(ctx: StateContext<UserStateModel>) {
    return this.userService.getInfo()
      .pipe(
        map(({ id, name, email, roles }: BikeUserInfo) => {
          ctx.setState({
            id,
            name,
            email,
            roles,
          });
          return true;
        }),
        mergeMap((result: any) => {
          if (result === true) {
            return EMPTY;
          }
          return ctx.dispatch(handleError(result));
        })
      );
  }
}
