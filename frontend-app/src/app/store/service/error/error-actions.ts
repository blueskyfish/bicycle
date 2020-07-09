import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ErrorItem } from './error-state.model';

export namespace Error {

  export class Append {
    static readonly type = '[Error] append error';
    constructor(public readonly payload: ErrorItem) {
    }
  }

  export function appendError(status: number, group: string, code: string, message?: string): ErrorItem {
    return {
      status, group, code, message
    };
  }

  export function handleError(reason: HttpErrorResponse) {
    console.log('> debug: reason =>', reason);
    if (reason.status >= 500) {
      return new Append(appendError(500, 'server', 'notConnect'));
    } else if (reason.status < 500 && reason.status >= 400) {
      const {group, code, message} = reason.error;
      return new Append(appendError(reason.status, group, code, message));
    }
    return new Append(appendError(399, 'server', 'unknown'));
  }
}
