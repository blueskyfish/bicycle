import { createAction, props } from '@ngrx/store';
import { BikeLoginPayload, BikeUserInfo } from '../../backend';

export class UserActions {

  static loginUser = createAction(
    '[User] login user',
    props<{payload: BikeLoginPayload}>()
  );

  static updateUser = createAction(
    '[User] update user',
    props<{user: BikeUserInfo}>()
  );


}
