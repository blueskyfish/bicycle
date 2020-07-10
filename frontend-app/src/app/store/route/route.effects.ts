import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map, switchMap, tap } from 'rxjs/operators';
import { RouterUtil } from '../../common/util';
import { RouteActions } from './route.actions';

@Injectable()
export class RouteEffectService {

  constructor(
    private router: Router,
    private actions$: Actions
  ) {
  }

  navigate$ = createEffect(() => this.actions$
    .pipe(
      ofType(RouteActions.navigate),
      switchMap(action => {
        return fromPromise(
          RouterUtil.navigateTo(this.router, ...action.paths)
        );
      }),
      tap(result => {
        console.log('> debug: routing result =>', result);
      })
    ),
    { dispatch: false }
  );
}
