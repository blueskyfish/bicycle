import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, delay, map, mergeMap, switchMap } from 'rxjs/operators';
import { BikeUserService } from '../../backend';
import { RouteNames } from '../../common/route.names';
import { AuthService } from '../../common/service/auth.service';
import { RouteActions } from '../route';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffectService {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: BikeUserService
  ) {
  }

  readonly loginAndUpdateUser$ = createEffect(() => this.actions$
    .pipe(
      ofType(UserActions.loginUser),
      switchMap(action => {
        return this.userService.login({ body: action.payload })
          .pipe(
            mergeMap(user => {
              // Update the user token
              this.authService.updateToken(user.token);

              return of(
                UserActions.updateUser({
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    roles: user.roles,
                  }
                }),
                RouteActions.navigate({
                  paths: [RouteNames.Root, RouteNames.Home]
                }),
              );
            }),
            catchError(reason => {
              console.log('> debug: Error on =>', reason);
              return EMPTY;
            })
          );
      })
    )
  );

  readonly loadAndUpdateUser$ = createEffect(() => this.actions$
    .pipe(
      ofType(ROOT_EFFECTS_INIT),
      delay(400),
      switchMap(() => {
        if (this.authService.isAuth) {
          return this.userService.getInfo()
            .pipe(
              map(user => UserActions.updateUser({ user }))
            );
        }
        return EMPTY;
      })
    )
  );
}
