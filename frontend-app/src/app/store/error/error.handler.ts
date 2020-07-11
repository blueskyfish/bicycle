import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable, of } from 'rxjs';
import { BikeErrorBody } from '../../backend';
import { ErrorActions } from './error.actions';
import { ErrorMessage } from './error.state';

export const SERVER_ERROR_GROUP = 'server';

export class ErrorId {

  private _nextId = 0;

  get nextId(): number {
    return ++this._nextId;
  }
}

export const errorId = new ErrorId();

export function errorHandler(serverCode: string) {
  return (reason): Observable<TypedAction<any>> => {

    if (reason instanceof HttpErrorResponse) {

      let payload: Partial<ErrorMessage> = {
        id: errorId.nextId,
        status: reason.status,
      };

      if (reason.status >= 500) {
        payload.group = SERVER_ERROR_GROUP;
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
        payload.group = SERVER_ERROR_GROUP;
        payload.code = serverCode;
        payload.message = reason.message;
      }
      return of(ErrorActions.appendError({payload}));

    } else if (reason instanceof HttpResponseBase) {
      const payload: Partial<ErrorMessage> = {
        id: errorId.nextId,
        status: reason.status,
        group: SERVER_ERROR_GROUP,
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
        id: errorId.nextId,
        status: 500,
        group: SERVER_ERROR_GROUP,
        code: serverCode,
        message: reason.message,
      };
      return of(ErrorActions.appendError({payload}));
    }

    const payload: Partial<ErrorMessage> = {
      id: errorId.nextId,
      status: 500,
      group: SERVER_ERROR_GROUP,
      code: serverCode,
      message: JSON.stringify(reason)
    };
    return of(ErrorActions.appendError({payload}));
  };
}
