import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable, of } from 'rxjs';
import { BikeErrorBody } from '../../backend';
import { Util } from '../../common/util';
import { ErrorActions } from './error.actions';
import { ErrorMessage } from './error.state';

/**
 * The server error group name
 */
export const SERVER_ERROR_GROUP = 'server';

/**
 * Generator for the error id.
 */
export const errorIdGen = {

  /**
   * The internal property for the next id.
   */
  value: 0,

  get nextId(): number {
    return ++this.value;
  }
}

/**
 * Handler for catch an error / exception during a http request.
 *
 * @param {string} serverCode the server error code
 * @returns {(reason) => Observable<TypedAction<any>>}
 */
export function errorHandler(serverCode: string) {
  return (reason): Observable<TypedAction<any>> => {

    if (reason instanceof HttpErrorResponse) {

      let payload: Partial<ErrorMessage> = {
        id: errorIdGen.nextId,
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
        id: errorIdGen.nextId,
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
        id: errorIdGen.nextId,
        status: 500,
        group: SERVER_ERROR_GROUP,
        code: serverCode,
        message: reason.message,
      };
      return of(ErrorActions.appendError({payload}));
    }

    // default error message
    const payload: Partial<ErrorMessage> = {
      id: errorIdGen.nextId,
      status: 500,
      group: SERVER_ERROR_GROUP,
      code: serverCode,
      message: JSON.stringify(reason)
    };
    return of(ErrorActions.appendError({payload}));
  };
}

/**
 * Builds the translate key from the error message
 * @param {ErrorMessage} err the error message or null
 * @returns {string} the translate key or null
 */
export function buildErrorCode(err?: Partial<ErrorMessage>): string {
  return Util.notNil(err) ? ['app.error', err.group, err.code].join('.') : null;
}
