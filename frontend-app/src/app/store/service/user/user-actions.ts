import { BikeLoginPayload } from '../../../backend';

export namespace User {

  /**
   * Action for send login credentials
   */
  export class Login {
    static readonly type = '[User] login user';

    constructor(public readonly payload: BikeLoginPayload) {
    }
  }

  /**
   * Action for get the user info.
   */
  export class GetInfo {
    static readonly type = '[User] get user info'
  }
}
