import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable, of } from 'rxjs';
import { BikeErrorBody } from '../../backend';
import { ErrorActions } from './error.actions';
import { ErrorMessage } from './error.state';


export function errorHandler(serverCode: string) {
  return (reason): Observable<TypedAction<any>> => {

    if (reason instanceof HttpErrorResponse) {

      let payload: Partial<ErrorMessage> = {
        status: reason.status,
      };

      if (reason.status >= 500) {
        payload.group = 'server';
        payload.code = serverCode;
      } else if (reason.status >= 400) {
        const body: BikeErrorBody = reason.error;
        payload.group = body.group;
        payload.code = body.code;
        payload.message = body.message;
        payload.request = {
          method: body.method,
          url: body.url
        }
      } else {
        payload.group = 'server';
        payload.code = serverCode;
        payload.message = reason.message;
      }
      return of(ErrorActions.appendError({payload}));

    } else if (reason instanceof HttpResponseBase) {
      const payload: Partial<ErrorMessage> = {
        status: reason.status,
        group: 'server',
        code: serverCode,
        message: reason.statusText,
        request: {
          method: '?',
          url: reason.url
        }
      };
      return of(ErrorActions.appendError({payload}));

    } else if (reason instanceof Error) {
      const payload: Partial<ErrorMessage> = {
        status: 500,
        group: 'server',
        code: serverCode,
        message: reason.message,
      };
      return of(ErrorActions.appendError({payload}));
    }

    const payload: Partial<ErrorMessage> = {
      status: 500,
      group: 'server',
      code: serverCode,
      message: JSON.stringify(reason)
    };
    return of(ErrorActions.appendError({payload}));
  };
}
